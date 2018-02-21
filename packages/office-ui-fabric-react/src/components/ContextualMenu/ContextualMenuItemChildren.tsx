import * as React from 'react';
import { hasSubmenu, getIsChecked } from '../../utilities/contextMenu';
import { IContextualMenuItem } from './ContextualMenu.types';
import { IMenuItemClassNames } from './ContextualMenu.classNames';
import { getRTL } from '../../Utilities';
import { Icon, IIconProps } from '../../Icon';
import { IContextualMenuItemChildrenProps } from './ContextualMenuItemChildren.types';

const ItemIcon = ({ hasIcons, item, classNames }: IContextualMenuItemChildrenProps) => {
  // Only present to allow continued use of item.icon which is deprecated.
  const { iconProps, icon } = item;

  if (!hasIcons) {
    return null;
  }

  if (iconProps) {
    return <Icon { ...iconProps } className={ classNames.icon } />;
  }

  return <Icon iconName={ icon } className={ classNames.icon } />;
};

const CheckMarkIcon = ({ onCheckmarkClick, item, classNames }: IContextualMenuItemChildrenProps) => {
  const isItemChecked = getIsChecked(item);
  if (onCheckmarkClick) {
    const onClick = (e: React.MouseEvent<HTMLElement>) => onCheckmarkClick(item, e);

    return (
      <Icon
        iconName={ isItemChecked ? 'CheckMark' : '' }
        className={ classNames.checkmarkIcon }
        onClick={ onClick }
      />
    );
  }
  return null;
};

const ItemName = ({ item, classNames }: IContextualMenuItemChildrenProps) => {
  if (item.name) {
    return <span className={ classNames.label }>{ item.name }</span>;
  }
  return null;
};

const SubMenuIcon = ({ item, classNames }: IContextualMenuItemChildrenProps) => {
  if (hasSubmenu(item)) {
    return (
      <Icon
        iconName={ getRTL() ? 'ChevronLeft' : 'ChevronRight' }
        { ...item.submenuIconProps }
        className={ classNames.subMenuIcon }
      />
    );
  }
  return null;
};

export const ContextualMenuItemChildren: React.StatelessComponent<IContextualMenuItemChildrenProps> = (props) => {
  const { item, classNames } = props;

  return (
    <div
      className={
        item.split ? classNames.linkContentMenu : classNames.linkContent
      }
    >
      <CheckMarkIcon {...props} />
      <ItemIcon {...props} />
      <ItemName {...props} />
      <SubMenuIcon { ...props }/>
    </div>
  );
};
