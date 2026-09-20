import {visit} from "unist-util-visit";
import {config} from "../consts.ts";

export function resetRemark() {
  return function (tree, file) {
    const frontmatter = file?.data?.astro?.frontmatter ?? {};
    const mermaidEnabled = frontmatter.mermaid === true;

    visit(tree, function (node) {
      if (node.type === 'code' && config.codeFoldingStartLines) {
        const currentMeta = node.meta ? `${node.meta} ` : '';
        node.meta = `${currentMeta}collapse={${config.codeFoldingStartLines}-1000000}`;
      }

      if (node.type === 'code' && node.lang === 'mermaid') {
        if (mermaidEnabled) {
          node.type = 'html';
          node.value = '<pre class="mermaid">\n' + node.value + '</pre>';
        } else {
          // Mermaid is disabled (or omitted): keep the source visible as plain text
          // and prevent syntax highlighters from treating "mermaid" as a language.
          node.lang = 'text';
        }
      }
    })
  }
}
