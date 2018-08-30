import { getDividerClassNames } from '../Divider/VerticalDivider.classNames';
import { getMenuItemStyles } from './ContextualMenu.cnstyles';
import { ITheme, mergeStyleSets, getGlobalClassNames } from '../../Styling';
import { IVerticalDividerClassNames } from '../Divider/VerticalDivider.types';
import { memoizeFunction } from '../../Utilities';
import { IContextualMenuItemStyles, IContextualMenuItemStyleProps } from './ContextualMenuItem.types';
import { IsFocusVisibleClassName } from '@uifabric/utilities';

/**
 * @deprecated in favor of mergeStyles API.
 */
export interface IContextualMenuClassNames {
  container: string;
  root: string;
  list: string;
  header: string;
  title: string;
}

/**
 * @deprecated in favor of mergeStyles API.
 */
export interface IMenuItemClassNames {
  item: string;
  divider: string;
  root: string;
  linkContent: string;
  icon: string;
  checkmarkIcon: string;
  subMenuIcon: string;
  label: string;
  secondaryText: string;
  splitContainer: string;
  splitPrimary: string;
  splitMenu: string;
  linkContentMenu: string;
}

export const getSplitButtonVerticalDividerClassNames = memoizeFunction(
  (theme: ITheme): IVerticalDividerClassNames => {
    return mergeStyleSets(getDividerClassNames(theme), {
      divider: {
        height: 16,
        width: 1
      }
    });
  }
);

const GlobalClassNames = {
  item: 'ms-ContextualMenu-item',
  divider: 'ms-ContextualMenu-divider',
  root: 'ms-ContextualMenu-link',
  isChecked: 'is-checked',
  isExpanded: 'is-expanded',
  isDisabled: 'is-disabled',
  linkContent: 'ms-ContextualMenu-linkContent',
  linkContentMenu: 'ms-ContextualMenu-linkContent',
  icon: 'ms-ContextualMenu-icon',
  iconColor: 'ms-ContextualMenu-iconColor',
  checkmarkIcon: 'ms-ContextualMenu-checkmarkIcon',
  subMenuIcon: 'ms-ContextualMenu-submenuIcon',
  label: 'ms-ContextualMenu-itemText',
  secondaryText: 'ms-ContextualMenu-secondaryText'
};

export const getItemClassNames = memoizeFunction(
  (props: IContextualMenuItemStyleProps): IContextualMenuItemStyles => {
    const {
      theme,
      disabled,
      expanded,
      checked,
      isAnchorLink,
      knownIcon,
      itemClassName,
      dividerClassName,
      iconClassName,
      subMenuClassName,
      primaryDisabled,
      className
    } = props;
    const styles = getMenuItemStyles(theme);
    const classNames = getGlobalClassNames(GlobalClassNames, theme);

    return mergeStyleSets({
      item: [classNames.item, styles.item, itemClassName],
      divider: [classNames.divider, styles.divider, dividerClassName],
      root: [
        classNames.root,
        styles.root,
        checked && [classNames.isChecked, styles.rootChecked],
        isAnchorLink && styles.anchorLink,
        expanded && [classNames.isExpanded, styles.rootExpanded],
        disabled && [classNames.isDisabled, styles.rootDisabled],
        !disabled &&
          !expanded && [
            {
              selectors: {
                ':hover': styles.rootHovered,
                ':active': styles.rootPressed,
                [`.${IsFocusVisibleClassName} &:focus, .${IsFocusVisibleClassName} &:focus:hover`]: styles.rootFocused,
                [`.${IsFocusVisibleClassName} &:hover`]: { background: 'inherit;' }
              }
            }
          ],
        className
      ],
      splitPrimary: [
        styles.root,
        checked && ['is-checked', styles.rootChecked],
        (disabled || primaryDisabled) && ['is-disabled', styles.rootDisabled],
        !(disabled || primaryDisabled) &&
          !checked && [
            {
              selectors: {
                ':hover': styles.rootHovered,
                ':active': styles.rootPressed,
                [`.${IsFocusVisibleClassName} &:focus, .${IsFocusVisibleClassName} &:focus:hover`]: styles.rootFocused,
                [`.${IsFocusVisibleClassName} &:hover`]: { background: 'inherit;' }
              }
            }
          ]
      ],
      splitMenu: [
        styles.root,
        {
          width: 32
        },
        expanded && ['is-expanded', styles.rootExpanded],
        disabled && ['is-disabled', styles.rootDisabled],
        !disabled &&
          !expanded && [
            {
              selectors: {
                ':hover': styles.rootHovered,
                ':active': styles.rootPressed,
                [`.${IsFocusVisibleClassName} &:focus, .${IsFocusVisibleClassName} &:focus:hover`]: styles.rootFocused,
                [`.${IsFocusVisibleClassName} &:hover`]: { background: 'inherit;' }
              }
            }
          ]
      ],
      anchorLink: styles.anchorLink,
      linkContent: [classNames.linkContent, styles.linkContent],
      linkContentMenu: [
        classNames.linkContentMenu,
        styles.linkContent,
        {
          justifyContent: 'center'
        }
      ],
      icon: [
        classNames.icon,
        knownIcon && styles.iconColor,
        styles.icon,
        iconClassName,
        disabled && [classNames.isDisabled, styles.iconDisabled]
      ],
      iconColor: styles.iconColor,
      checkmarkIcon: [classNames.checkmarkIcon, knownIcon && styles.checkmarkIcon, styles.icon, iconClassName],
      subMenuIcon: [classNames.subMenuIcon, styles.subMenuIcon, subMenuClassName],
      label: [classNames.label, styles.label],
      secondaryText: [classNames.secondaryText, styles.secondaryText],
      splitContainer: [
        styles.splitButtonFlexContainer,
        !disabled &&
          !checked && [
            {
              selectors: {
                [`.${IsFocusVisibleClassName} &:focus, .${IsFocusVisibleClassName} &:focus:hover`]: styles.rootFocused
              }
            }
          ]
      ]
    });
  }
);
