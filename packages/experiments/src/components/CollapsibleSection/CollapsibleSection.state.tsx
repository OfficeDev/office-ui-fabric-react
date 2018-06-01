import * as React from 'react';
import { ICollapsibleSectionProps, ICollapsibleSectionStyles } from './CollapsibleSection.types';
import { createRef } from 'office-ui-fabric-react';
import { TStateProps } from '../../utilities/createComponent';

export interface ICollapsibleSectionState {
  collapsed: boolean;
}

// TODO: these types seem duplicated from createComponent. try to avoid duplication and be aware of circular references with IStateComponent
// export type ICollapsibleSectionStateProps = ICollapsibleSectionProps & { styles: { [key in keyof ICollapsibleSectionStyles]: string } };
export type ICollapsibleSectionStateProps =
  TStateProps<ICollapsibleSectionProps & { styles: { [key in keyof ICollapsibleSectionStyles]: string } }>;

export class CollapsibleSectionState extends React.Component<
  ICollapsibleSectionStateProps,
  ICollapsibleSectionState
  > {
  private _titleElement = createRef<HTMLElement>();

  constructor(props: ICollapsibleSectionStateProps) {
    super(props);

    this.state = {
      collapsed: !!(props.defaultCollapsed === undefined
        ? props.collapsed
        : props.defaultCollapsed)
    };
  }

  public render(): JSX.Element {
    const { collapsed } = this.state;

    // TODO: clean this up. is this the right way to merge and pass props on?
    // TODO: check React 16 deriveStateFromProps
    // TODO: analyze functions and determine if any should be moved to view
    const mergedProps = {
      ...this.props,
      collapsed,
      titleElementRef: this._titleElement,
      onToggleCollapse: this._onToggleCollapse,
      onKeyDown: this._onKeyDown,
      onRootKeyDown: this._onRootKeyDown,
    };

    return this.props.view(mergedProps);
  }

  private _onRootKeyDown = (ev: React.KeyboardEvent<Element>) => {
    switch (ev.which) {
      case 37:
        if (
          ev.target !== this._titleElement.value &&
          this._titleElement.value
        ) {
          this._titleElement.value.focus();
          ev.preventDefault();
          ev.stopPropagation();
        }
        break;

      default:
        break;
    }
  }

  private _onToggleCollapse = () => {
    this.setState((state: ICollapsibleSectionState) => ({ collapsed: !state.collapsed }));
    // TODO: make sense of this in design and clean this up
    if (this.props.titleProps && this.props.titleProps.onToggleCollapse) {
      this.props.titleProps.onToggleCollapse();
    }
  }

  private _onKeyDown = (ev: React.KeyboardEvent<Element>) => {
    const { collapsed } = this.state;

    switch (ev.which) {
      case 37: // left
        if (!collapsed) {
          this.setState({ collapsed: true });
          break;
        }
        return;

      case 39: // right
        if (collapsed) {
          this.setState({ collapsed: false });
          break;
        }
        return;

      default:
        return;
    }

    ev.preventDefault();
    ev.stopPropagation();
  }
}
