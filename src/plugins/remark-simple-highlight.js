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
      
      // Enhanced pattern: ==text|color== or ==text|color|mode==
      const regex = /==(.*?)\|(.*?)(?:\|(.*?))?==/g;
      const matches = [...node.value.matchAll(regex)];
      
      if (matches.length === 0) return;
      
      const newNodes = [];
      let lastIndex = 0;
      
      for (const match of matches) {
        const [fullMatch, text, color, mode = 'bg'] = match;
        const matchStart = match.index;
        const matchEnd = matchStart + fullMatch.length;
        
        // Add text before match
        if (matchStart > lastIndex) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex, matchStart)
          });
        }
        
        // Generate HTML based on mode
        let html = '';
        if (mode === 'fg') {
          // Foreground mode: color text only, no background
          html = `<span style="color: ${color};">${text}</span>`;
        } else {
          // Background mode (default): colored background with white text
          html = `<span style="background-color: ${color}; color: white; padding: 0.2rem; border-radius: 4px;">${text}</span>`;
        }
        
        // Add colored text as HTML
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
