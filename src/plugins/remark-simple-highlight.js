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
      
      // Extended pattern: ==text|color== or ==text|color|mode== or ==text|fgColor|bgColor|dual== 
      // or ==text|color|mode|fontWeight|fontStyle|textAlign== etc.
      const regex = /==(.*?)\|([^|]*?)(?:\|([^|]*?))?(?:\|([^|]*?))?(?:\|([^|]*?))?(?:\|([^|]*?))?==/g;
      const matches = [...node.value.matchAll(regex)];
      
      if (matches.length === 0) return;
      
      const newNodes = [];
      let lastIndex = 0;
      
      for (const match of matches) {
        const [fullMatch, rawText, param1, param2, param3, param4, param5, param6] = match;
        const matchStart = match.index;
        const matchEnd = matchStart + fullMatch.length;
        
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
  if (param3 === 'dual') {
    // Dual mode: param1=fgColor, param2=bgColor, param3='dual'
    config.mode = 'dual';
    config.fgColor = param1;
    config.bgColor = param2;
    // Additional styles in param4, param5, param6
    config.fontWeight = param4;
    config.fontStyle = param5;
    config.textAlign = param6;
  } else if (param2 === 'fg') {
    // Foreground mode: param1=color, param2='fg'
    config.mode = 'fg';
    config.fgColor = param1;
    // Additional styles in param3, param4, param5
    config.fontWeight = param3;
    config.fontStyle = param4;
    config.textAlign = param5;
  } else if (param2 === 'bg' || !param2) {
    // Background mode: param1=color, param2='bg' or undefined
    config.mode = 'bg';
    config.bgColor = param1;
    // Additional styles in param3, param4, param5
    config.fontWeight = param3;
    config.fontStyle = param4;
    config.textAlign = param5;
  } else {
    // Assume param1=color, param2=fontWeight, param3=fontStyle, param4=textAlign
    config.mode = 'bg'; // default
    config.bgColor = param1;
    config.fontWeight = param2;
    config.fontStyle = param3;
    config.textAlign = param4;
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
