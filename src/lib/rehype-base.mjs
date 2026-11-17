import { visit } from 'unist-util-visit';

/** Prefix repository paths for Markdown images and links on GitHub Pages. */
/** @param {{ base: string }} options */
export default function rehypeBase({ base }) {
  const prefix = base.replace(/\/$/, '');
  /** @param {import('hast').Root} tree */
  return (tree) => {
    visit(tree, 'element', (node) => {
      for (const key of ['src', 'href', 'poster']) {
        const value = node.properties[key];
        if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
          node.properties[key] = `${prefix}${value}`;
        }
      }
    });
  };
}
