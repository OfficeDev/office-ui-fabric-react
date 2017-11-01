import * as React from 'react';
import {
  css,
  autobind,
  BaseComponent
} from '../../Utilities';
import { mergeStyles } from '../../Styling';
import { IOverflowSet, IOverflowSetProps } from './OverflowSet.Props';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';

import * as stylesImport from './OverflowSet.scss';
const styles: any = stylesImport;

export class OverflowSet extends BaseComponent<IOverflowSetProps, {}> implements IOverflowSet {

  private _focusZone: FocusZone;

  public render() {
    let {
      items,
      overflowItems,
      onRenderOverflowButton,
      className,
      focusZoneProps,
      itemDirection,
      role = 'menubar'
    } = this.props;

    console.log(itemDirection);

    return (
      <FocusZone
        { ...focusZoneProps }
        componentRef={ this._resolveRef('_focusZone') }
        className={ mergeStyles(
          'ms-OverflowSet',
          styles.root,
          itemDirection === 'vertical' && styles.rootVertical,
          className
        ) }
        direction={ itemDirection === 'vertical' ? FocusZoneDirection.vertical : FocusZoneDirection.horizontal }
        role={ role }
      >
        { items && this._onRenderItems(items) }
        { overflowItems && overflowItems.length > 0 && onRenderOverflowButton(overflowItems) }
      </FocusZone>
    );
  }

  public focus() {
    if (this._focusZone) {
      this._focusZone.focus();
    }
  }

  @autobind
  private _onRenderItems(items: any[]): JSX.Element[] {
    return items.map((item, i) => {
      let wrapperDivProps: React.HTMLProps<HTMLDivElement> = { className: css('ms-OverflowSet-item', styles.item) };
      if (item.key) {
        wrapperDivProps.key = item.key;
      }
      return (
        <div {...wrapperDivProps}>
          { this.props.onRenderItem(item) }
        </div>
      );
    });
  }

}