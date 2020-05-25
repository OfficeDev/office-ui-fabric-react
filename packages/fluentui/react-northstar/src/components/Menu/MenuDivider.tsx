import { Accessibility, MenuDividerBehaviorProps, menuDividerBehavior } from '@fluentui/accessibility';
import { mergeComponentVariables } from '@fluentui/styles';
import {
  compose,
  ComponentWithAs,
  getElementType,
  useAccessibility,
  useTelemetry,
  useStyles,
  useUnhandledProps,
  ShorthandConfig,
} from '@fluentui/react-bindings';
import { useContextSelectors } from '@fluentui/react-context-selector';
import * as PropTypes from 'prop-types';
import * as React from 'react';
// @ts-ignore
import { ThemeContext } from 'react-fela';

import {
  createShorthandFactory,
  UIComponentProps,
  commonPropTypes,
  childrenExist,
  ChildrenComponentProps,
  ContentComponentProps,
  rtlTextContainer,
  ShorthandFactory,
} from '../../utils';
import { ProviderContextPrepared } from '../../types';
import { MenuContext, MenuDividerSubscribedValue } from './menuContext';

export interface MenuDividerProps extends UIComponentProps, ChildrenComponentProps, ContentComponentProps {
  /** Accessibility behavior if overridden by the user. */
  accessibility?: Accessibility<MenuDividerBehaviorProps>;

  inSubmenu?: boolean;
  secondary?: boolean;
  pills?: boolean;
  pointing?: boolean | 'start' | 'end';
  primary?: boolean;
  vertical?: boolean;
}

export type MenuDividerStylesProps = Required<
  Pick<MenuDividerProps, 'vertical' | 'inSubmenu' | 'pills' | 'primary' | 'pointing' | 'secondary'>
> & {
  hasContent: boolean;
};

export const menuDividerClassName = 'ui-menu__divider';

/**
 * A MenuDivider is non-actionable element that visually segments items of Menu.
 */
const MenuDivider = compose<'li', MenuDividerProps, MenuDividerStylesProps, {}, {}>(
  (props, ref, composeOptions) => {
    const context: ProviderContextPrepared = React.useContext(ThemeContext);
    const { setStart, setEnd } = useTelemetry(composeOptions.displayName, context.telemetry);
    setStart();

    const parentProps = (useContextSelectors(MenuContext, {
      variables: v => v.variables,
      slotProps: v => v.slotProps.divider,
      accessibility: v => v.behaviors.divider,
    }) as unknown) as MenuDividerSubscribedValue;

    const allProps = {
      ...parentProps.slotProps,
      accessibility: parentProps.accessibility,
      variables: parentProps.variables,
      ...props,
    };

    const {
      accessibility = menuDividerBehavior,
      children,
      content,
      vertical,
      inSubmenu,
      pills,
      pointing,
      primary,
      className,
      design,
      styles,
      secondary,
      variables,
    } = allProps;

    const getA11yProps = useAccessibility(accessibility, {
      debugName: composeOptions.displayName,
      rtl: context.rtl,
    });

    const { classes } = useStyles<MenuDividerStylesProps>(composeOptions.displayName, {
      className: composeOptions.className,
      composeOptions,
      mapPropsToStyles: () => ({
        hasContent: !!content || !!children,
        pills,
        pointing,
        vertical,
        inSubmenu,
        primary,
        secondary,
      }),
      mapPropsToInlineStyles: () => ({
        className,
        design,
        styles,
        variables: mergeComponentVariables(variables, parentProps.variables),
      }),
      rtl: context.rtl,
      unstable_props: allProps,
    });

    const ElementType = getElementType(allProps);
    const unhandledProps = useUnhandledProps(composeOptions.handledProps, allProps);

    const element = (
      <ElementType
        {...getA11yProps('root', {
          className: classes.root,
          ...rtlTextContainer.getAttributes({ forElements: [children, content] }),
          ...unhandledProps,
          ref,
        })}
      >
        {childrenExist(children) ? children : content}
      </ElementType>
    );
    setEnd();

    return element;
  },
  {
    className: menuDividerClassName,
    displayName: 'MenuDivider',

    handledProps: [
      'accessibility',
      'as',
      'children',
      'className',
      'content',
      'design',
      'styles',
      'variables',

      'inSubmenu',
      'primary',
      'secondary',
      'vertical',
    ],
  },
) as ComponentWithAs<'li', MenuDividerProps> & {
  create: ShorthandFactory<MenuDividerProps>;
  shorthandConfig: ShorthandConfig<MenuDividerProps>;
};

MenuDivider.defaultProps = {
  as: 'li',
};

MenuDivider.propTypes = {
  ...commonPropTypes.createCommon(),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  vertical: PropTypes.bool,
  inSubmenu: PropTypes.bool,
};

MenuDivider.create = createShorthandFactory({ Component: MenuDivider, mappedProp: 'content' });
MenuDivider.shorthandConfig = { mappedProp: 'content' };

export default MenuDivider;
