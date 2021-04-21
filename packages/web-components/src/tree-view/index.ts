import { treeViewTemplate as template, TreeView } from '@microsoft/fast-foundation';
import { treeViewStyles as styles } from './tree-view.styles';

/**
 * The FAST tree view Custom Element. Implements, {@link @microsoft/fast-foundation#TreeView}
 * {@link @microsoft/fast-foundation#treeViewTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fast-tree-view\>
 *
 */
export const fluentTreeView = TreeView.compose({
  baseName: 'tree-view',
  template,
  styles,
});

/**
 * Styles for TreeView
 * @public
 */
export const treeViewStyles = styles;
