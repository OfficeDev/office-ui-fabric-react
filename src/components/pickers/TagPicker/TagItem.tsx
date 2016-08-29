import * as React from 'react';
import { IPickerItemProps } from '../BasePickerProps';
import { css } from '../../../utilities/css';
import './TagItem.scss';

export interface TagItem {
  item: {
    key: string;
    name: string;
  }
}

export const TagItem = (props: IPickerItemProps<TagItem> ) => (
  <div
  className={ css('ms-TagItem', {
    'is-selected': props.isSelected
  }) }
    key={ props.index }
    data-selection-index={ props.index }
    data-is-focusable={ true }>
    <span className='ms-TagItem-text'>{ props.children }</span>
    <span className='ms-TagItem-close' onClick={ props.onRemoveItem }><i className=' ms-Icon ms-Icon--x'/></span>
  </div>
);
