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

      // Only turn a Mermaid fence into a renderable Mermaid element when
      // the current article explicitly enables `mermaid: true`.
      // Otherwise it stays a normal fenced code block.
      if (node.type === 'code' && node.lang === 'mermaid' && mermaidEnabled) {
        node.type = 'html'
        node.value = '<pre class="mermaid">\n' + node.value + '</pre>'
      }
    })
  }
}
