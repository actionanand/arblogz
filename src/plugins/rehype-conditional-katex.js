import rehypeKatex from 'rehype-katex';
import { visit } from 'unist-util-visit';

const RUPEE_KATEX_PLACEHOLDER = String.raw`\htmlClass{rupee-symbol}{R}`;

function getFrontmatter(file) {
  return (
    file?.data?.astro?.frontmatter ??
    file?.data?.frontmatter ??
    {}
  );
}

/**
 * Render math with KaTeX only when frontmatter contains:
 *
 *   mathjax: true
 *
 * Before KaTeX runs, literal Indian rupee signs inside math nodes are changed
 * into a KaTeX-safe HTML-class placeholder. KaTeX never receives the unsupported
 * ₹ character, so it no longer prints:
 *
 *   No character metrics for '₹' in style 'Main-Regular' and mode 'text'
 *
 * CSS restores the real ₹ glyph visually after KaTeX has laid out the formula.
 */
export function rehypeConditionalKatex(options = {}) {
  const renderKatex = rehypeKatex({
    throwOnError: false,
    strict: false,

    // Required for \htmlClass.
    trust: true,

    ...options,
  });

  return async function transformer(tree, file) {
    const frontmatter = getFrontmatter(file);

    if (frontmatter.mathjax !== true) {
      return tree;
    }

    // At this stage remark-math has already produced HAST elements such as:
    // <code class="language-math math-display">...</code>
    // and <code class="language-math math-inline">...</code>.
    visit(tree, 'element', (node) => {
      const classNames = Array.isArray(node.properties?.className)
        ? node.properties.className
        : [];

      const isMath =
        classNames.includes('language-math') ||
        classNames.includes('math-inline') ||
        classNames.includes('math-display');

      if (!isMath) {
        return;
      }

      visit(node, 'text', (textNode) => {
        if (
          typeof textNode.value === 'string' &&
          textNode.value.includes('₹')
        ) {
          textNode.value = textNode.value.replaceAll(
            '₹',
            RUPEE_KATEX_PLACEHOLDER
          );
        }
      });
    });

    return renderKatex(tree, file);
  };
}
