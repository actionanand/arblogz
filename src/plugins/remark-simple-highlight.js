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
      
      // Simple pattern: ==text|color== or ==text|color|mode== or ==text|fgColor|bgColor|dual==
      const regex = /==(.*?)\|(.*?)(?:\|(.*?))?(?:\|(.*?))?==/g;
      const matches = [...node.value.matchAll(regex)];
      
      if (matches.length === 0) return;
      
      const newNodes = [];
      let lastIndex = 0;
      
      for (const match of matches) {
        const [fullMatch, rawText, param1, param2, param3] = match;
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
        
        // Determine styling
        let style = '';
        if (param3 === 'dual') {
          // Dual mode: fg and bg colors
          style = `color: ${param1} !important; background-color: ${param2}; padding: 0.2rem; border-radius: 4px;`;
        } else if (param2 === 'fg') {
          // Foreground mode
          style = `color: ${param1} !important;`;
        } else {
          // Default background mode
          style = `background-color: ${param1}; color: white !important; padding: 0.2rem; border-radius: 4px;`;
        }
        
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

// Apply color styling to text (which may already contain HTML formatting)
function applyColorStyling(text, mode, fgColor, bgColor) {
  let styles = [];
  
  switch (mode) {
    case 'fg':
      // Foreground mode: color text only
      if (fgColor) {
        styles.push(`color: ${fgColor} !important`);
      }
      break;
      
    case 'bg':
      // Background mode: colored background with white text
      if (bgColor) {
        styles.push(`background-color: ${bgColor}`);
        styles.push('color: white !important');
        styles.push('padding: 0.2rem');
        styles.push('border-radius: 4px');
      }
      break;
      
    case 'dual':
      // Dual mode: both foreground and background colors
      if (fgColor) {
        styles.push(`color: ${fgColor} !important`);
      }
      if (bgColor) {
        styles.push(`background-color: ${bgColor}`);
      }
      styles.push('padding: 0.2rem');
      styles.push('border-radius: 4px');
      break;
      
    default:
      // Default to background mode
      const color = bgColor || fgColor;
      if (color) {
        styles.push(`background-color: ${color}`);
        styles.push('color: white !important');
        styles.push('padding: 0.2rem');
        styles.push('border-radius: 4px');
      }
  }
  
  const styleString = styles.join('; ');
  
  // Wrap the text (which may contain HTML) with the color span
  // The !important declaration should override any default styles
  return `<span style="${styleString}">${text}</span>`;
}

// Process inline markdown formatting on plain text
function processInlineMarkdown(text) {
  return text
    // Bold and italic: ***text*** → <strong><em>text</em></strong>
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    // Bold: **text** → <strong>text</strong>
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic: *text* → <em>text</em>
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Underline: __text__ → <u>text</u>
    .replace(/__(.*?)__/g, '<u>$1</u>')
    // Strikethrough: ~~text~~ → <s>text</s>
    .replace(/~~(.*?)~~/g, '<s>$1</s>');
}
