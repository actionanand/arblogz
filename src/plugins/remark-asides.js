import {h as _h, s as _s} from "hastscript";
import {remove} from "unist-util-remove";
import {visit} from "unist-util-visit";

const variants = new Set(["note", "tip", "info", "caution", "warning", "danger"]);

function defaultLabel(v) {
  switch (v) {
    case "note": return "Note";
    case "tip": return "Tip";
    case "info": return "Info";
    case "caution": return "Caution";
    case "warning": return "Warning";
    case "danger": return "Danger";
    default: return "";
  }
}

function isAsideVariant(variant) {
  return variants.has(variant);
}

/** Hacky function that generates an mdast HTML tree ready for conversion to HTML by rehype. */
function h(el, attrs = {}, children = []) {
  const {tagName, properties} = _h(el, attrs);
  return {
    type: "paragraph",
    data: {hName: tagName, hProperties: properties},
    children,
  };
}

export function remarkAsides(options = {}) {
  const transformer = (tree) => {
    visit(tree, (node, index, parent) => {
      if (!parent || index === undefined || node.type !== "containerDirective") {
        return;
      }
      const variant = node.name;
      if (!isAsideVariant(variant)) return;

      // Store the original variant to ensure it doesn't get modified
      const originalVariant = String(variant);

      // Get default title
      let title = defaultLabel(originalVariant);

      // Check for custom title from directive label
      let hasCustomTitle = false;
      
      // Create a copy of children to iterate over, since we'll be removing items
      const childrenCopy = [...node.children];
      
      for (let i = 0; i < childrenCopy.length; i++) {
        const child = childrenCopy[i];
        if (child.type === "paragraph" && child.data && child.data.directiveLabel === true) {
          if ("children" in child && Array.isArray(child.children)) {
            // The label is in a paragraph with children containing text nodes
            const firstChild = child.children[0];
            if (firstChild && "value" in firstChild) {
              title = firstChild.value;
              hasCustomTitle = true;
            }
          }
          // Remove the label paragraph from the node's children
          const originalIndex = node.children.indexOf(child);
          if (originalIndex !== -1) {
            node.children.splice(originalIndex, 1);
          }
          break;
        }
      }

      // Create the title span with conditional data-translate
      const titleSpan = hasCustomTitle 
        ? h("span", {}, [{ type: "text", value: title }])
        : h("span", { "data-translate": `aside.${originalVariant}` }, [{ type: "text", value: title }]);

      // Ensure we're using the exact original variant for all CSS classes and attributes
      const aside = h(
        "aside",
        {
          "aria-label": originalVariant,
          class: `remark-aside remark-aside--${originalVariant}`,
          "data-variant": originalVariant, // Add explicit data attribute for debugging
        },
        [
          h("h4", {class: "remark-aside__title", "aria-hidden": "true"}, [
            h("span", {
              class: "remark-aside__icon",
              "data-icon-variant": originalVariant, // Add explicit data attribute for debugging
            }),
            titleSpan,
          ]),
          h("div", {class: "remark-aside__content"}, node.children),
        ]
      );

      parent.children[index] = aside;
    });
  };

  return () => transformer;
}