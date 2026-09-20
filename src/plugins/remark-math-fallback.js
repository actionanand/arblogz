import { visit } from 'unist-util-visit';

function getFrontmatter(file) {
  return (
    file?.data?.astro?.frontmatter ??
    file?.data?.frontmatter ??
    {}
  );
}

/**
 * remark-math must always stay enabled globally so MDX can safely parse
 * TeX braces such as \text{...} without Acorn treating them as JavaScript.
 *
 * When `mathjax: true`, leave math nodes untouched so rehype-katex can render them.
 *
 * When `mathjax` is false or omitted, turn the math nodes into normal text/code
 * nodes before Expressive Code sees them. This prevents Expressive Code from
 * trying to highlight an unsupported language named "math".
 */
export function remarkMathFallback() {
  return function transformer(tree, file) {
    const frontmatter = getFrontmatter(file);
    const mathEnabled = frontmatter.mathjax === true;

    if (mathEnabled) {
      return;
    }

    visit(tree, (node, index, parent) => {
      if (!parent || index === undefined) {
        return;
      }

      if (node.type === 'math') {
        parent.children[index] = {
          type: 'code',
          lang: 'text',
          value: `$$\n${node.value}\n$$`,
        };
        return;
      }

      if (node.type === 'inlineMath') {
        parent.children[index] = {
          type: 'inlineCode',
          value: `$${node.value}$`,
        };
      }
    });
  };
}
