import { visit } from 'unist-util-visit';

export function remarkColorHighlight() {
  return function (tree, file) {
    // Only process if we have frontmatter indicating this feature should be enabled
    const frontmatter = file?.data?.astro?.frontmatter;
    if (!frontmatter?.colorHighlight) {
      return;
    }

    visit(tree, 'text', (node, index, parent) => {
      if (!node.value || !parent) return;
      
      // Extended pattern to properly capture text and parameters
      // This regex ensures we capture the text part and remaining parameters correctly
      const regex = /==(.*?)\|(.*?)==/g;
      const matches = [...node.value.matchAll(regex)];
      
      if (matches.length === 0) return;
      
      const newNodes = [];
      let lastIndex = 0;
      
      for (const match of matches) {
        const [fullMatch, rawText, paramString] = match;
        const matchStart = match.index;
        const matchEnd = matchStart + fullMatch.length;
        
        // Split the parameter string by |
        const params = paramString.split('|');
        const param1 = params[0] || '';
        const param2 = params[1] || '';
        const param3 = params[2] || '';
        const param4 = params[3] || '';
        const param5 = params[4] || '';
        const param6 = params[5] || '';
        
        // Add text before match
        if (matchStart > lastIndex) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex, matchStart)
          });
        }
        
        // Simple approach: just use the text as-is, no markdown processing
        let processedText = rawText;
        
        // Parse parameters for styling
        const styleConfig = parseStyleParameters(param1, param2, param3, param4, param5, param6);
        const style = buildStyleString(styleConfig);
        
        // Create the final HTML
        const html = `<span style="${style}">${processedText}</span>`;
        
        newNodes.push({
          type: 'html',
          value: html
        });
        
        lastIndex = matchEnd;
      }
      
      // Add remaining text
      if (lastIndex < node.value.length) {
        newNodes.push({
          type: 'text',
          value: node.value.slice(lastIndex)
        });
      }
      
      // Replace the node
      if (newNodes.length > 0) {
        parent.children.splice(index, 1, ...newNodes);
        return index + newNodes.length;
      }
    });
  };
}

// Parse style parameters into a configuration object
function parseStyleParameters(param1, param2, param3, param4, param5, param6) {
  const config = {
    mode: 'bg', // default mode
    fgColor: null,
    bgColor: null,
    fontWeight: null,
    fontStyle: null,
    textAlign: null
  };
  
  // Determine the mode and colors based on parameters
  // Clean up parameters (remove whitespace and handle empty strings)
  const cleanParam1 = param1 ? param1.trim() : '';
  const cleanParam2 = param2 ? param2.trim() : '';
  const cleanParam3 = param3 ? param3.trim() : '';
  const cleanParam4 = param4 ? param4.trim() : '';
  const cleanParam5 = param5 ? param5.trim() : '';
  const cleanParam6 = param6 ? param6.trim() : '';
  
  // More robust dual mode detection
  if (cleanParam3.toLowerCase() === 'dual') {
    // Dual mode: param1=fgColor, param2=bgColor, param3='dual'
    config.mode = 'dual';
    config.fgColor = cleanParam1;
    config.bgColor = cleanParam2;
    // Additional styles in param4, param5, param6 (filter out empty strings)
    config.fontWeight = cleanParam4 || null;
    config.fontStyle = cleanParam5 || null;
    config.textAlign = cleanParam6 || null;
  } else if (cleanParam2.toLowerCase() === 'fg') {
    // Foreground mode: param1=color, param2='fg'
    config.mode = 'fg';
    config.fgColor = cleanParam1;
    // Additional styles in param3, param4, param5 (filter out empty strings)
    config.fontWeight = cleanParam3 || null;
    config.fontStyle = cleanParam4 || null;
    config.textAlign = cleanParam5 || null;
  } else if (cleanParam2.toLowerCase() === 'bg' || !cleanParam2) {
    // Background mode: param1=color, param2='bg' or undefined
    config.mode = 'bg';
    config.bgColor = cleanParam1;
    // Additional styles in param3, param4, param5 (filter out empty strings)
    config.fontWeight = cleanParam3 || null;
    config.fontStyle = cleanParam4 || null;
    config.textAlign = cleanParam5 || null;
  } else {
    // Fallback: treat as background mode with fontWeight/fontStyle
    // Only if param2 looks like a font-weight value, not a color
    config.mode = 'bg';
    config.bgColor = cleanParam1;
    // Only assign styling if param2 doesn't look like a color (no # or color names)
    if (cleanParam2 && !cleanParam2.startsWith('#') && !cleanParam2.match(/^(red|blue|green|yellow|orange|purple|black|white|gray|grey)$/i)) {
      config.fontWeight = cleanParam2 || null;
      config.fontStyle = cleanParam3 || null;
      config.textAlign = cleanParam4 || null;
    } else {
      // If param2 looks like a color, don't assign it to fontWeight
      config.fontWeight = null;
      config.fontStyle = null;
      config.textAlign = null;
    }
  }
  
  return config;
}

// Build CSS style string from configuration
function buildStyleString(config) {
  const styles = [];
  
  // Check if any custom styling is applied
  const hasCustomStyling = config.fontWeight || config.fontStyle || config.textAlign;
  
  // Apply color styling based on mode
  switch (config.mode) {
    case 'fg':
      // Foreground mode: color text only
      if (config.fgColor) {
        styles.push(`color: ${config.fgColor} !important`);
      }
      break;
      
    case 'bg':
      // Background mode: colored background
      if (config.bgColor) {
        styles.push(`background-color: ${config.bgColor}`);
        // Only force white text if no custom styling is applied
        if (!hasCustomStyling) {
          styles.push('color: white !important');
        }
        styles.push('padding: 0.2rem');
        styles.push('border-radius: 4px');
      }
      break;
      
    case 'dual':
      // Dual mode: both foreground and background colors
      if (config.fgColor && !hasCustomStyling) {
        styles.push(`color: ${config.fgColor} !important`);
      } else if (config.fgColor && hasCustomStyling) {
        styles.push(`color: ${config.fgColor}`);
      }
      if (config.bgColor) {
        styles.push(`background-color: ${config.bgColor}`);
      }
      styles.push('padding: 0.2rem');
      styles.push('border-radius: 4px');
      break;
  }
  
  // Apply additional CSS styling
  if (config.fontWeight) {
    styles.push(`font-weight: ${config.fontWeight}`);
  }
  
  if (config.fontStyle) {
    styles.push(`font-style: ${config.fontStyle}`);
  }
  
  if (config.textAlign) {
    styles.push(`display: block`);
    styles.push(`text-align: ${config.textAlign}`);
  }
  
  return styles.join('; ');
}
