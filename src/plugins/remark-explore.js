import {h as _h} from "hastscript";
import {visit} from "unist-util-visit";
import {t} from '../i18n/utils.ts';

/**
 * remark-explore
 *
 * Transforms :::explore container directives into an "Explore Further" section.
 *
 * Usage in MDX / Markdown:
 *
 *   :::explore
 *   [>] [New website](https://newwebsite.co)
 *   [>] Help children [in USA](https://usa.com)
 *   [>] mixed text with [a link](https://example.com) mid-sentence
 *   :::
 *
 * Each line prefixed with [>] becomes a link entry.
 *
 * NOTE: Consecutive lines without blank lines form a single paragraph in
 * remark. Each line's "[>]" marker therefore appears as a text node that may
 * start with "\n[>]" (the newline from the line break). splitIntoItems()
 * handles this by trimming leading whitespace before checking for [>].
 *
 * The rendered section is moved after .footnotes by client-side JS in BlogPost.astro.
 */

function h(el, attrs = {}, children = []) {
  const {tagName, properties} = _h(el, attrs);
  return {
    type: "paragraph",
    data: {hName: tagName, hProperties: properties},
    children,
  };
}

/**
 * Returns true if this inline node is a [>] marker:
 *   - text node whose value, after trimming leading whitespace/newlines, starts with [>]
 *   - OR a linkReference with identifier ">" (some parsers produce this instead of text)
 */
function isMarker(node) {
  if (node.type === "text") {
    return node.value.replace(/^\s+/, '').startsWith('[>]');
  }
  if (node.type === "linkReference" && node.identifier === ">") {
    return true;
  }
  return false;
}

/**
 * Split an array of inline MDAST nodes into groups at [>] boundaries.
 * Each group is one explore item (the [>] prefix itself is discarded).
 *
 * Works whether the items are in one paragraph (joined by \n text nodes)
 * or across separate paragraphs.
 */
function splitIntoItems(inlineNodes) {
  const groups = [];
  let current = null;

  for (const node of inlineNodes) {
    if (isMarker(node)) {
      // Save the previous group before starting a new one
      if (current !== null && current.length > 0) {
        groups.push(current);
      }
      current = [];

      // For text nodes, keep the content that follows [>] on the same line
      if (node.type === "text") {
        const trimmed = node.value.replace(/^\s+/, ''); // strip leading \n / spaces
        const after = trimmed.slice(3).replace(/^\s+/, ''); // strip "[>]" + trailing space
        if (after) {
          current.push({ ...node, value: after });
        }
      }
      // linkReference [>] nodes are discarded entirely (just the marker)
    } else if (current !== null) {
      current.push(node);
    }
    // Nodes appearing before the first [>] are ignored
  }

  // Push the last group
  if (current !== null && current.length > 0) {
    groups.push(current);
  }

  return groups;
}

export function remarkExplore() {
  const transformer = (tree) => {
    visit(tree, (node, index, parent) => {
      if (node.type !== "containerDirective") return;
      if (!parent || index === undefined) return;
      if (node.name !== "explore") return;

      const label = t('remark.exploreFurther') || 'Explore Further';
      const listItems = [];

      for (const child of node.children) {
        // Skip the directive label (:::explore[Custom Title])
        if (child.data && child.data.directiveLabel) continue;

        if (child.type === "paragraph") {
          // A single paragraph may contain multiple [>] items separated by
          // \n inside text nodes. splitIntoItems handles this correctly.
          const groups = splitIntoItems(child.children);
          for (const group of groups) {
            listItems.push(h('li', { class: 'explore-item' }, group));
          }
        }
      }

      // If no valid [>] items found, remove the directive silently
      if (listItems.length === 0) {
        parent.children.splice(index, 1);
        return;
      }

      parent.children[index] = h('div', { class: 'explore-further' }, [
        h('div', { class: 'explore-header' }, [
          h('i', { class: 'ri-compass-3-line menu-icon', 'aria-hidden': 'true' }, []),
          h('span', { class: 'font-semibold', 'data-translate': 'remark.exploreFurther' }, [
            { type: 'text', value: label },
          ]),
        ]),
        h('ul', { class: 'explore-links' }, listItems),
      ]);
    });
  };
  return () => transformer;
}
