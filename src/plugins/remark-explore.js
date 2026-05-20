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
 *   :::
 *
 * Each line prefixed with [>] becomes a link entry.
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

export function remarkExplore() {
  const transformer = (tree) => {
    visit(tree, (node, index, parent) => {
      if (node.type !== "containerDirective") return;
      if (!parent || index === undefined) return;
      if (node.name !== "explore") return;

      const label = t('remark.exploreFurther') || 'Explore Further';
      const listItems = [];

      for (const child of node.children) {
        // Skip the directive label (custom title via :::explore[Title])
        if (child.data && child.data.directiveLabel) continue;
        if (child.type !== "paragraph") continue;

        const firstChild = child.children[0];
        if (!firstChild || firstChild.type !== "text") continue;

        // Only process lines that start with [>]
        const text = firstChild.value;
        if (!text.startsWith('[>]')) continue;

        // Strip the [>] prefix and any leading whitespace
        const remaining = text.slice(3).replace(/^\s+/, '');
        const inlineChildren = [...child.children];
        if (remaining) {
          inlineChildren[0] = { ...firstChild, value: remaining };
        } else {
          // [>] was the entire first text node — drop it
          inlineChildren.shift();
        }

        listItems.push(h('li', { class: 'explore-item' }, inlineChildren));
      }

      // If no valid [>] items, remove the directive entirely
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
