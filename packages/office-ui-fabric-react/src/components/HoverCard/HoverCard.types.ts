import * as React from 'react';
import { HoverCard } from './HoverCard';
import { IExpandingCardProps } from './ExpandingCard.types';
import { IStyle } from '../../Styling';
import { IRefObject, KeyCodes } from '../../Utilities';

export interface IHoverCard { }

/**
 * HoverCard component props.
 */
export interface IHoverCardProps extends React.HTMLAttributes<HTMLDivElement | HoverCard> {
  /**
   * Optional callback to access the IHoverCardHost interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: IRefObject<IHoverCard>;

  /**
   * Additional properties to pass through for HoverCard, reference detail properties in IHoverCardProps
   */
  expandingCardProps?: IExpandingCardProps;

  /**
   * Whether or not to mark the container as described by the hover card.
   * If not specified, the caller should mark as element as described by the hover card id.
   */
  setAriaDescribedBy?: boolean;

  /**
   * Length of compact card delay
   * @defaultvalue 500
   */
  cardOpenDelay?: number;

  /**
   * Length of card dismiss delay. A min number is necessary for pointer to hop between target and card
   * @defaultvalue 100
   */
  cardDismissDelay?: number;

  /**
   * Time in ms when expanded card should open after compact card
   * @defaultvalue 1500
   */
  expandedCardOpenDelay?: number;

  /**
   * If true disables Card dismiss upon mouse leave, so that card sticks around.
   * @defaultvalue false
   */
  sticky?: boolean;

  /**
   * Enables instant open of the full card upon click
   * @defaultvalue false
   */
  instantOpenOnClick?: boolean;

  /**
   * Custom styles for this component
   */
  styles?: IHoverCardStyles;

  /**
   * Optional target element to tag hover card on
   */
  target?: HTMLElement | string;

  /**
   * Callback when card becomes visible
   */
  onCardVisible?: () => void;

  /**
   * Callback when card hides
   */
  onCardHide?: () => void;

  /**
   * Trap focus or not
   */
  trapFocus?: boolean;

  /**
   * Should block hover card or not
   */
  shouldBlockHoverCard?: () => void;

  /**
   * Set first focus into hover card.
   * @defaultvalue false
   */
  setInitialFocus?: boolean;

  /**
   * HotKey used for opening the HoverCard when tabbed to target.
   * @defaultvalue 'KeyCodes.c'
   */
  openHotKey?: KeyCodes;
}

export interface IHoverCardStyles {
  /**
   * Style for the host element in the default enabled, non-toggled state.
   */
  host?: IStyle;
}
