import * as React from 'react';
import { IComponent, IComponentStyles, IStyleableComponentProps } from '../../Foundation';
import { IRefObject } from '../../Utilities';
import { IHTMLSlot } from '../../utilities/factoryComponents.types';
import { ICollapsibleSectionTitleSlot } from './CollapsibleSectionTitle.types';

export type ICollapsibleSectionComponent = IComponent<ICollapsibleSectionProps, ICollapsibleSectionViewProps, ICollapsibleSectionStyles>;

export interface ICollapsibleSectionSlots {
  root?: IHTMLSlot;
  title?: ICollapsibleSectionTitleSlot;
  body?: IHTMLSlot;
}

export interface ICollapsibleSection { }

export interface ICollapsibleSectionProps extends ICollapsibleSectionSlots,
  IStyleableComponentProps<ICollapsibleSectionViewProps, ICollapsibleSectionStyles> {
  /**
   * Optional callback to access the ICollapsibleSectionComponent interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: IRefObject<ICollapsibleSection>;

  /**
   * Additional class name to provide on the root element.
   */
  className?: string;

  /**
   * Default and initial collapsed state if collapsed prop is not provided.
   * @default true
   */
  defaultCollapsed?: boolean;

  /**
   * Collapsed state. If provided, component is controlled.
   * @default defaultCollapsed
   */
  collapsed?: boolean;

  indent?: number;
}

export type ICollapsibleSectionViewProps = Pick<ICollapsibleSectionProps, 'indent'> &
  Required<Pick<ICollapsibleSectionProps, 'collapsed'>> & {
    /**
     * Optional callback to access the Title element interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    titleElementRef?: IRefObject<HTMLButtonElement>;

    /**
     * Toggle input callback triggered by mouse and keyboard input.
     */
    onClick?: (ev: React.MouseEvent<Element>) => void;

    /**
     * Key down callback for root element of CollapsibleSection.
     */
    onRootKeyDown?: (ev: React.KeyboardEvent<Element>) => void;

    /**
     * Key down callback for CollapsibleSection title.
     */
    onKeyDown?: (ev: React.KeyboardEvent<Element>) => void;
  };

export type ICollapsibleSectionStyles = IComponentStyles<ICollapsibleSectionSlots>;

