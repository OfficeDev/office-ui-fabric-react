/** @jsx createElementWrapper */
import { KeytipData } from 'office-ui-fabric-react/lib/KeytipData';
import { Label } from 'office-ui-fabric-react/lib/Label';

import { createElementWrapper, getSlots } from '../../Foundation';
import { inputProperties, getNativeProps } from '../../Utilities';
import { IToggleComponent, IToggleSlots } from './Toggle.types';

export const ToggleView: IToggleComponent['view'] = props => {
  const { as: RootType = 'div', label, text, ariaLabel, checked, disabled, onChange, keytipProps, onClick, toggleButtonRef } = props;
  const toggleNativeProps = getNativeProps(this.props, inputProperties, ['defaultChecked']);

  const Slots = getSlots<typeof props, IToggleSlots>(props, {
    root: RootType,
    label: Label,
    container: 'div',
    pill: 'button',
    thumb: 'div',
    text: Label
  });

  // TODO: find a way to remove check against existence of label and text for rendering if possible
  return (
    <Slots.root>
      {label && (
        <Slots.label htmlFor={this._id}>
          {label}
        </Slots.label>
      )}

      <Slots.container>
        <KeytipData keytipProps={keytipProps} ariaDescribedBy={(toggleNativeProps as any)['aria-describedby']} disabled={disabled}>
          {(keytipAttributes: any): JSX.Element => (
            <Slots.pill
              {...toggleNativeProps}
              {...keytipAttributes}
              disabled={disabled}
              id={this._id}
              type="button"
              role="switch" // ARIA 1.1 definition; "checkbox" in ARIA 1.0
              ref={toggleButtonRef}
              aria-disabled={disabled}
              aria-checked={checked}
              aria-label={ariaLabel}
              data-is-focusable={true}
              onChange={onChange}
              onClick={onClick}
            >
              <Slots.thumb />
            </Slots.pill>
          )}
        </KeytipData>
        {text && <Slots.text>{text}</Slots.text>}
      </Slots.container>
    </Slots.root>
  );
};
