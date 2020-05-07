import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ComboBox, IComboBoxOption, SelectableOptionMenuItemType } from 'office-ui-fabric-react/lib/index';
import { useBoolean } from '@uifabric/react-hooks';

const INITIAL_OPTIONS: IComboBoxOption[] = [
  { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
  { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
  { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'E', text: 'Option E' },
  { key: 'F', text: 'Option F', disabled: true },
  { key: 'G', text: 'Option G' },
  { key: 'H', text: 'Option H' },
  { key: 'I', text: 'Option I' },
  { key: 'J', text: 'Option J' },
];
const dragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
};
const iconProps = { iconName: 'IncreaseIndentLegacy' };
const dialogContentProps = {
  type: DialogType.normal,
  title: 'Missing Subject',
  subText: 'Do you want to send this message without a subject?',
};

export const DialogBlockingExample: React.FunctionComponent = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
  return (
    <div>
      <Checkbox label="Is draggable" onChange={toggleIsDraggable} checked={isDraggable} />
      <DefaultButton secondaryText="Opens the Sample Dialog" onClick={toggleHideDialog} text="Open Dialog" />
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={{
          isBlocking: true,
          styles: { main: { maxWidth: 450 } },
          dragOptions: isDraggable ? dragOptions : undefined,
        }}
      >
        <SpinButton
          defaultValue="0"
          label={'Number of subjects to add:'}
          min={0}
          max={100}
          step={1}
          iconProps={iconProps}
          // tslint:disable:jsx-no-lambda
          onFocus={() => console.log('onFocus called')}
          onBlur={() => console.log('onBlur called')}
          incrementButtonAriaLabel={'Increase value by 1'}
          decrementButtonAriaLabel={'Decrease value by 1'}
        />
        <ComboBox
          label="Sample subject lines you could add instead"
          placeholder="Select or type an option"
          allowFreeform
          autoComplete="on"
          options={INITIAL_OPTIONS}
        />
        <DialogFooter>
          <PrimaryButton onClick={toggleHideDialog} text="Send" />
          <DefaultButton onClick={toggleHideDialog} text="Don't send" />
        </DialogFooter>
      </Dialog>
    </div>
  );
};
