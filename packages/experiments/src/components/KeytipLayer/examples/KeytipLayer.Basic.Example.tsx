import * as React from 'react';
import { convertSequencesToKeytipID, IKeytipTransitionKey } from '../../../utilities/keysequence';
import { KeytipLayer } from '../KeytipLayer';
import { registerKeytip } from '../../../utilities/keytip/KeytipUtils';
import { IKeytipProps } from '../../Keytip';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { addKeytipSequence } from '../../../utilities/keytip';
import { ModifierKeyCodes } from '../../../utilities/keytip/ModifierKeyCodes';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

export interface IKeytipLayerBasicExampleState {
  showModal: boolean;
  showMessageBar: boolean;
}

export interface IKeytipMap {
  [componentKeytipId: string]: IKeytipProps;
}

export class KeytipLayerBasicExample extends React.Component<{}, IKeytipLayerBasicExampleState> {

  private startingKeySequence: IKeytipTransitionKey = { key: 'Meta', modifierKeys: [ModifierKeyCodes.alt] };
  private keytipMap: IKeytipMap = {};

  constructor(props: {}) {
    super(props);

    // Setup state
    this.state = {
      showModal: false,
      showMessageBar: false
    };

    // Setup keytips
    this.keytipMap.Pivot1Keytip = {
      content: 'A',
      keySequences: [{ keys: ['a'] }]
    } as IKeytipProps;

    this.keytipMap.Pivot2Keytip = {
      content: 'B',
      keySequences: [{ keys: ['b'] }]
    } as IKeytipProps;

    this.keytipMap.Button1Pivot1Keytip = {
      content: '1B',
      keySequences: addKeytipSequence(this.keytipMap.Pivot1Keytip.keySequences, { keys: ['1', 'b'] }),
    } as IKeytipProps;

    this.keytipMap.Button2Pivot1Keytip = {
      content: '1A',
      keySequences: addKeytipSequence(this.keytipMap.Pivot1Keytip.keySequences, { keys: ['1', 'a'] })
    } as IKeytipProps;

    this.keytipMap.Button3Pivot1Keytip = {
      content: 'M',
      keySequences: addKeytipSequence(this.keytipMap.Pivot1Keytip.keySequences, { keys: ['m'] })
    } as IKeytipProps;

    this.keytipMap.CommandButton1Pivot2Keytip = {
      content: '2',
      keySequences: addKeytipSequence(this.keytipMap.Pivot2Keytip.keySequences, { keys: ['2'] })
    } as IKeytipProps;

    this.keytipMap.CommandButton2Pivot2Keytip = {
      content: 'Y',
      keySequences: addKeytipSequence(this.keytipMap.Pivot2Keytip.keySequences, { keys: ['y'] })
    } as IKeytipProps;

    this.keytipMap.CommandButton3Pivot2Keytip = {
      content: 'LK',
      keySequences: addKeytipSequence(this.keytipMap.Pivot2Keytip.keySequences, { keys: ['l', 'k'] })
    } as IKeytipProps;
  }

  /* tslint:disable:jsx-ban-props jsx-no-lambda */
  public render(): JSX.Element {
    let showModal = this._showModal.bind(this);
    let hideModal = this._hideModal.bind(this);
    let showMessageBar = this._showMessageBar.bind(this);

    let divStyle = {
      width: '50%',
      display: 'inline-block',
      verticalAlign: 'top'
    };

    return (
      <div>
        <p>Press Alt-Win to enable keytips, Esc to return up a level, and Alt-Win to exit keytip mode</p>
        <div>
          <div style={ divStyle }>
            <div>
              <DefaultButton
                data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Pivot1Keytip.keySequences) }
                text='Mock Pivot 1'
              />
            </div>
            <div>
              <DefaultButton
                data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Button1Pivot1Keytip.keySequences) }
                text='Test Button 1'
                onClick={ () => { alert('Button 1'); } }
              />
              <DefaultButton
                data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Button2Pivot1Keytip.keySequences) }
                text='Test Button 2'
                onClick={ () => { alert('Button 2'); } }
              />
              <DefaultButton
                data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Button3Pivot1Keytip.keySequences) }
                text='Test Button 3'
                onClick={ () => { alert('Button 3'); } }
              />
            </div>
          </div>
          <div style={ divStyle }>
            <div>
              <DefaultButton
                data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Pivot2Keytip.keySequences) }
                text='Mock Pivot 2'
              />
            </div>
            <CommandBar
              items={
                [
                  {
                    key: 'commandBarItem1',
                    name: 'New',
                    icon: 'Add',
                    onClick: showModal,
                    ['data-ktp-id']: convertSequencesToKeytipID(this.keytipMap.CommandButton1Pivot2Keytip.keySequences)
                  },
                  {
                    key: 'commandBarItem2',
                    name: 'Upload',
                    icon: 'Upload',
                    onClick: showMessageBar,
                    ['data-ktp-id']: convertSequencesToKeytipID(this.keytipMap.CommandButton2Pivot2Keytip.keySequences)
                  }
                ]
              }
              farItems={
                [
                  {
                    key: 'farItem1',
                    name: 'SubMenu',
                    icon: 'SortLines',
                    ['data-ktp-id']: convertSequencesToKeytipID(this.keytipMap.CommandButton3Pivot2Keytip.keySequences),
                    subMenuProps: {
                      items: [
                        {
                          key: 'emailMessage',
                          name: 'Email message',
                          icon: 'Mail',
                        },
                        {
                          key: 'calendarEvent',
                          name: 'Calendar event',
                          icon: 'Calendar'
                        }
                      ],
                    },
                  }
                ]
              }
            />
          </div>
        </div>
        { this.state.showMessageBar &&
          <MessageBar messageBarType={ MessageBarType.success }>
            Success Uploading
          </MessageBar>
        }
        <Modal
          isOpen={ this.state.showModal }
          onDismiss={ hideModal }
          isBlocking={ false }
        >
          <h2>Hello this is a Modal</h2>
        </Modal>
        <KeytipLayer
          keytipStartSequences={ [this.startingKeySequence] }
          keytipExitSequences={ [this.startingKeySequence] }
          id={ 'test-id' }
        />
      </div>
    );
  }

  public componentDidMount(): void {
    // Manually add keytips to the KeytipManager
    for (let component of Object.keys(this.keytipMap)) {
      registerKeytip(this.keytipMap[component]);
    }
  }

  private _showModal(): void {
    this.setState({ showModal: true });
  }

  private _hideModal(): void {
    this.setState({ showModal: false });
  }

  private _showMessageBar(): void {
    this.setState({ showMessageBar: true });
    // Hide the MessageBar after 2 seconds
    let hideMessageBar = () => {
      this.setState({ showMessageBar: false });
    };
    setTimeout(hideMessageBar.bind(this), 2000);
  }

  // TODO use this to getExecute of buttons
  // private _getExecute(id: string): () => void {
  //   let element = document.querySelector(id) as HTMLElement;
  //   return element.click;
  // }
}