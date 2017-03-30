import * as React from 'react';
import { BaseButton } from './BaseButton';
import { Button } from './Button';
import { IRenderFunction } from '../../Utilities';
import { IContextualMenuProps } from '../../ContextualMenu';

export interface IButton {
  /**
   * Sets focus to the button.
   */
  focus: () => void;
}

export interface IButtonClassNames {
  base?: string;
  variant?: string;
  isDisabled?: string;
  isEnabled?: string;
  description?: string;
  flexContainer?: string;
  icon?: string;
  menuIcon?: string;
  label?: string;
  root?: string;
}

export interface IButtonProps extends React.HTMLProps<HTMLButtonElement | HTMLAnchorElement | BaseButton | Button> {

  /**
   * Optional way to fetch the IButton interface. Use this instead of ref, to avoid accessing higher-order component
   * wrappers rather than the IButton interface.
   */
  componentRef?: (component: IButton) => void;

  /**
   * If provided, this component will be rendered as an anchor.
   * @default ElementType.anchor
   */
  href?: string;

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;

  /**
   * If provided, additional class name to provide on the root element.
   */
  className?: string;

  /**
   *  Custom class names for individual elements within the button DOM.
   */
  classNames?: IButtonClassNames;

  /**
   * The aria label of the button for the benefit of screen readers.
   */
  ariaLabel?: string;

  /**
   * Detailed description of the button for the benefit of screen readers.
   *
   * Besides the compound button, other button types will need more information provided to screen reader.
   */
  ariaDescription?: string;

  /**
  * Text to render button label. If text is supplied, it will override any string in button children. Other children components will be passed through after the text.
  */
  text?: string;

  /**
   * The button icon shown in command or hero type.
   */
  icon?: string;

  /**
   * The button icon shown to the right of the text
   */
  menuIconName?: string | null;

  /**
   * Props for button menu
   */
  menuProps?: IContextualMenuProps;

  /**
   * Custom render function for the icon
   */
  onRenderIcon?: IRenderFunction<IButtonProps>;

  /**
   * Custom render function for the label text.
   */
  onRenderLabel?: IRenderFunction<IButtonProps>;

  /**
   * Custom render function for the desciption text.
   */
  onRenderDescription?: IRenderFunction<IButtonProps>;

  /**
   * Custom render function for button menu icon
   */
  onRenderMenuIcon?: IRenderFunction<IButtonProps>;

  /**
  * Custom render function for button menu
  */
  onRenderMenu?: IRenderFunction<IContextualMenuProps>;

  /**
   * Description of the action this button takes.
   * Only used for compound buttons
   */
  description?: string;

  /**
   * The type of button to render.
   * @defaultvalue ButtonType.default
   * @deprecated
   * Deprecated at v1.2.3, to be removed at >= v2.0.0. Use specific button component instead
   */

  buttonType?: ButtonType;

  /**
   * @deprecated
   * Deprecated at v0.56.2, to be removed at >= v1.0.0. Just pass in button props instead;
   * they will be mixed into the button/anchor element rendered by the component.
   */
  rootProps?: React.HTMLProps<HTMLButtonElement> | React.HTMLProps<HTMLAnchorElement>;
}

export enum ElementType {
  /** <button> element. */
  button = 0,
  /** <a> element. */
  anchor = 1
}

export enum ButtonType {
  normal = 0,
  primary = 1,
  hero = 2,
  compound = 3,
  command = 4,
  icon = 5,
  default = 6
}
