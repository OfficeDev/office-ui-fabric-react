import { IStyle } from '../../../Styling';
import { IStyleableComponent } from '../../../Foundation';

export interface IStackItemProps extends IStyleableComponent<IStackItemProps, IStackItemStyles> {
  className?: string;

  renderAs?: string | React.ReactType<IStackItemProps>;

  /** @internal Internal use only - gives the Stack component a handle on the children of its Stack.Items */
  children?: React.ReactElement<IStackItemProps>[] | React.ReactElement<IStackItemProps>;

  gap?: number;
  horizontal?: boolean;
  index?: number;

  grow?: boolean | number | 'inherit' | 'initial' | 'unset';
  collapse?: boolean;

  align?: 'auto' | 'center' | 'start' | 'baseline' | 'stretch' | 'end';
}

export interface IStackItemStyles {
  root: IStyle;
}
