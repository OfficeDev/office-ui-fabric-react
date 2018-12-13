import * as React from 'react';

import { getId, classNamesFunction, styled, IStyleFunctionOrObject } from '../../../../Utilities';
import {
  Persona,
  PersonaSize,
  PersonaPresence,
  IPersonaStyleProps,
  IPersonaStyles,
  IPersonaCoinStyleProps,
  IPersonaCoinStyles
} from '../../../../Persona';
import { IconButton } from '../../../../Button';
import { ValidationState } from '../../BasePicker.types';
import { IPeoplePickerItemProps, IPeoplePickerItemStyleProps, IPeoplePickerItemStyles } from './PeoplePickerItem.types';
import { getStyles } from './PeoplePickerItem.styles';

const getClassNames = classNamesFunction<IPeoplePickerItemStyleProps, IPeoplePickerItemStyles>();

export const PeoplePickerItemBase = (props: IPeoplePickerItemProps) => {
  const { item, onRemoveItem, index, selected, removeButtonAriaLabel, styles, theme, className } = props;

  const itemId = getId();

  const classNames = getClassNames(styles, {
    theme: theme!,
    className,
    selected,
    invalid: item.ValidationState === ValidationState.warning
  });

  const personaStyles = classNames.subComponentStyles
    ? (classNames.subComponentStyles.persona as IStyleFunctionOrObject<IPersonaStyleProps, IPersonaStyles>)
    : undefined;

  // TODO use this to pass to coinProps the styles after fixing coinProps type.
  // const personaCoinStyles = classNames.subComponentStyles
  //   ? (classNames.subComponentStyles.personaCoin as IStyleFunctionOrObject<IPersonaCoinStyleProps, IPersonaCoinStyles>)
  //   : undefined;

  return (
    <div
      className={classNames.root}
      data-is-focusable={true}
      data-is-sub-focuszone={true}
      data-selection-index={index}
      role={'listitem'}
      aria-labelledby={'selectedItemPersona-' + itemId}
    >
      <div className={classNames.itemContent} id={'selectedItemPersona-' + itemId}>
        <Persona
          {...item}
          presence={item.presence !== undefined ? item.presence : PersonaPresence.none}
          size={PersonaSize.size28}
          styles={personaStyles}
          // coinProps={{}}
        />
      </div>
      <IconButton
        onClick={onRemoveItem}
        iconProps={{ iconName: 'Cancel', styles: { root: { fontSize: '12px' } } }}
        className={classNames.removeButton}
        ariaLabel={removeButtonAriaLabel}
      />
    </div>
  );
};

export const PeoplePickerItem = styled<IPeoplePickerItemProps, IPeoplePickerItemStyleProps, IPeoplePickerItemStyles>(
  PeoplePickerItemBase,
  getStyles,
  undefined,
  { scope: 'PeoplePickerItem' }
);
