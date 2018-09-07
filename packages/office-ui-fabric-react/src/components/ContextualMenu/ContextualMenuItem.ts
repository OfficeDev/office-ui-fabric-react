import { styled } from '../../Utilities';
import { IContextualMenuItemProps, IContextualMenuItemStyleProps, IContextualMenuItemStyles } from './ContextualMenuItem.types';
import { ContextualMenuItemBase } from './ContextualMenuItem.base';
import { getItemClassNames as getStyles } from './ContextualMenu.classNames';

/**
 * ContextualMenuItem description
 */
export const ContextualMenuItem = styled<IContextualMenuItemProps, IContextualMenuItemStyleProps, IContextualMenuItemStyles>(
  ContextualMenuItemBase,
  getStyles,
  undefined,
  { scope: 'ContextualMenuItem' }
);
