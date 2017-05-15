/* tslint:disable */
import * as React from 'react';
import {
  BaseComponent,
  css
} from '../../../Utilities';
/* tslint:enable */
import { BasePicker } from '../BasePicker';
import { IBasePickerProps } from '../BasePicker.Props';
import { TagItem } from './TagItem';
import { CommandButton } from '../../../Button';
import * as stylesImport from './TagItem.scss';
const styles: any = stylesImport;

export interface ITag {
  key: string;
  name: string;
}

export interface ITagPickerProps extends IBasePickerProps<ITag> {
}

export class TagPicker extends BasePicker<ITag, ITagPickerProps> {
  protected static defaultProps = {
    onRenderItem: (props) => { return <TagItem { ...props }>{ props.item.name }</TagItem>; },
    onRenderSuggestionsItem: (props: ITag, itemProps) => <CommandButton onClick={ itemProps.onClick } className={ css('ms-TagItem-TextOverflow', styles.tagItemTextOverflow) }> { props.name } </CommandButton>
  };
}
