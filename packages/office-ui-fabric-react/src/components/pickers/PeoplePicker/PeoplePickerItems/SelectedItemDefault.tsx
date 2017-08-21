/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import { css, getId } from '../../../../Utilities';
import { Persona, PersonaSize, PersonaPresence } from '../../../../Persona';
import { IPeoplePickerItemProps } from './PeoplePickerItem.Props';
import { ValidationState } from '../../BasePicker.Props';
import { IconButton } from '../../../../Button';
import * as stylesImport from './PickerItemsDefault.scss';
const styles: any = stylesImport;

export const SelectedItemDefault: (props: IPeoplePickerItemProps) => JSX.Element = (peoplePickerItemProps: IPeoplePickerItemProps) => {
  let {
    item,
    onRemoveItem,
    index,
    selected,
    removeButtonAriaLabel
  } = peoplePickerItemProps;

  const itemId = getId();

  return (
    <div
      className={ css(
        'ms-PickerPersona-container',
        styles.personaContainer,
        { ['is-selected ' + styles.personaContainerIsSelected]: selected },
        { ['is-invalid ' + styles.validationError]: item.ValidationState === ValidationState.warning }
      ) }
      data-is-focusable={ true }
      data-is-sub-focuszone={ true }
      data-selection-index={ index }
      role={ 'listitem' }
      aria-labelledby={ 'selectedItemPersona-' + itemId } >
      <div
        className={ css('ms-PickerItem-content', styles.itemContent) }
        id={ 'selectedItemPersona-' + itemId } >
        <Persona
          { ...item }
          presence={ item.presence !== undefined ? item.presence : PersonaPresence.none }
          size={ PersonaSize.size28 }
        />
      </div>
      <IconButton
        onClick={ () => { if (onRemoveItem) { onRemoveItem(); } } }
        iconProps={ { iconName: 'Cancel', style: { fontSize: '12px' } } }
        className={ css('ms-PickerItem-removeButton', styles.removeButton) }
        ariaLabel={ removeButtonAriaLabel }
      />
    </div >
  );
};
