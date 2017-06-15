import * as React from 'react';
import { HoverCard } from './HoverCard';
import { ICalloutProps } from '../../Callout';
import { IRenderFunction } from '../../Utilities';
import { DirectionalHint } from '../../common/DirectionalHint';
import { IStyle } from '../../Styling';

export interface IHoverCard {
  isExpanded: boolean
}

/**
 * HoverCard component props.
 */
export interface IHoverCardProps extends React.HTMLAttributes<HTMLDivElement | HoverCard> {
  /**
   * Optional callback to access the IHoverCard interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: IHoverCard) => void;

  /**
   *  Item to be returned with onRender functions
   */
  item?: any;

  /**
   *  Render function to populate compact content area
   */
  onRenderCompactContent?: IRenderFunction<IHoverCardProps>;

  /**
   *  Render function to populate expanded content area
   */
  onRenderExpandedContent?: IRenderFunction<IHoverCardProps>;

  /**
   * Element to anchor the HoverCard to.
   */
  targetElement?: HTMLElement;

  /**
   * Callback when the HoverCard tries to open
   */
  onEnter?: (ev?: any) => void;

  /**
   * Callback when the HoverCard tries to close
   */
  onDismiss?: (ev?: any) => void;

  /**
   * Length of expanded card delay
   */
  expandedCardOpenDelay?: number;

  /**
   * Custom styles for this component
   */
  styles?: IHoverCardStyles;
}

export interface IHoverCardStyles {
  /**
   * Style for the root element in the default enabled, non-toggled state.
   */
  root?: IStyle;

  /**
   * Style for the main card element.
   */
  compactCard?: IStyle;

  /**
   * Style for the content element in the default enabled, non-toggled state.
   */
  expandedCard?: IStyle;
}