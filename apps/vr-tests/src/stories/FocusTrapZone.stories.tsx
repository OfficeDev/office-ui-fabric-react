import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { FabricDecorator } from '../utilities';
import {
  Panel,
  PanelType,
  Dialog,
  DialogType,
  DialogFooter,
  PrimaryButton,
  DefaultButton
} from 'office-ui-fabric-react';

storiesOf('FocusTrapZones', module)
  .addDecorator(FabricDecorator)
  .addDecorator(story => (
    <Screener
      steps={new Screener.Steps()
        .snapshot('default')
        .click('ms-Panel-closeButton')
        .snapshot('click on panel close button')
        .end()}
    >
      {story()}
    </Screener>
  ))
  .add('Dialog nested in Panel', () => (
    <div>
      <Panel
        isOpen={true}
        type={PanelType.smallFixedFar}
        headerText="This panel makes use of Layer and FocusTrapZone. Focus should be trapped in the panel."
        closeButtonAriaLabel="Close"
        hasCloseButton={true}
      >
        <Dialog
          hidden={false}
          isBlocking={true}
          dialogContentProps={{
            type: DialogType.normal,
            title:
              'This dialog uses Modal, which also makes use of Layer and FocusTrapZone. Focus should be trapped in the dialog.',
            subText: "Focus will move back to the panel if you press 'OK' or 'Cancel'."
          }}
          modalProps={{
            titleAriaId: 'myLabelId',
            subtitleAriaId: 'mySubTextId',
            isBlocking: false,
            containerClassName: 'ms-dialogMainOverride'
          }}
        >
          {null}
        </Dialog>
      </Panel>
    </div>
  ))
  .add('Panel on its own', () => (
    <div>
      <Panel
        isOpen={true}
        type={PanelType.smallFixedFar}
        headerText="This is a panel on its own"
        closeButtonAriaLabel="Close"
        hasCloseButton={true}
      >
        {null}
      </Panel>
    </div>
  ));
