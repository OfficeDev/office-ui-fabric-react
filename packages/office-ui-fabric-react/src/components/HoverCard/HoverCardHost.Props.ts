import * as React from 'react';
import { HoverCardHost } from './HoverCardHost';
import { HoverCardDelay, IHoverCardProps } from './HoverCard.Props';
import { ICalloutProps } from '../../Callout';
import { DirectionalHint } from '../../common/DirectionalHint';
import { IStyle } from '../../Styling';

export interface IHoverCardHost {

}

/**
 * HoverCard component props.
 */
export interface IHoverCardHostProps extends React.HTMLAttributes<HTMLDivElement | HoverCardHost> {
  /**
   * Optional callback to access the IHoverCardHost interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: IHoverCardHost) => void;

  /**
   * Additional properties to pass through for Callout, reference detail properties in ICalloutProps
   */
  calloutProps?: ICalloutProps;

  /**
   * Additional properties to pass through for HoverCard, reference detail properties in IHoverCardProps
   */
  hoverCardProps?: IHoverCardProps;

  /**
   * Whether or not to mark the container as described by the tooltip.
   * If not specified, the caller should mark as element as described by the tooltip id.
   */
  setAriaDescribedBy?: boolean;

  /**
   * Length of delay
   * @default medium
   */
  delay?: HoverCardDelay;

  /**
   * String to be passed to the tooltip
   */
  content?: string;

  /**
   * Indicator of how the tooltip should be anchored to its targetElement.
   * @default DirectionalHint.topCenter
   */
  directionalHint?: DirectionalHint;

  /**
   * Custom styles for this component
   */
  styles?: IHoverCardHostStyles;
}

export interface IHoverCardHostStyles {
  /**
   * Style for the host element in the default enabled, non-toggled state.
   */
  host?: IStyle;
}
