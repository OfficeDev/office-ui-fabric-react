import * as React from 'react';
import { css } from '../../Utilities';
import { IObjectWithKey } from 'office-ui-fabric-react/lib/Selection';

import { IStaticListProps } from './StaticList.Props';

import * as stylesImport from './StaticList.scss';

export class StaticList<TItem extends IObjectWithKey> extends React.PureComponent<IStaticListProps<TItem>> implements IGenericList<TItem> {
  public render(): JSX.Element {
    const {
      className,
      items,
      onRenderItem,
      listTagName: ListTag = 'ul'
     } = this.props;

    return (
      <ListTag className={ css(stylesImport.root, className) }>
        { items.map((item: TItem, index: number) => onRenderItem(item, index)) }
      </ListTag>
    );
  }
}