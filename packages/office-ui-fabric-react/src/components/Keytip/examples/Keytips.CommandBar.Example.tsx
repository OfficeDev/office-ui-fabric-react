import * as React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { keytipMap } from './KeytipSetup';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

export interface IKeytipsCommandBarExampleState {
  showModal: boolean;
  showMessageBar: boolean;
}

export class KeytipsCommandBarExample extends React.Component<{}, IKeytipsCommandBarExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showModal: false,
      showMessageBar: false
    };
  }

  /* tslint:disable:jsx-ban-props jsx-no-lambda */
  public render() {
    return (
      <div style={ { height: 150 } }>
        <CommandBar
          items={
            [
              {
                key: 'commandBarItem1',
                name: 'New',
                icon: 'Add',
                onClick: this._showModal,
                keytipProps: keytipMap.CommandButton1Keytip
              },
              {
                key: 'commandBarItem2',
                name: 'Upload',
                icon: 'Upload',
                onClick: this._showMessageBar,
                keytipProps: keytipMap.CommandButton2Keytip
              }
            ]
          }
          farItems={
            [
              {
                key: 'farItem1',
                name: 'Options',
                icon: 'SortLines',
                keytipProps: keytipMap.CommandButton3Keytip,
                subMenuProps: {
                  items: [
                    {
                      key: 'emailMessage',
                      name: 'Send Email',
                      icon: 'Mail',
                      keytipProps: keytipMap.SubmenuKeytip1,
                      onClick: () => { console.log('test1'); }
                    },
                    {
                      key: 'calendarEvent',
                      name: 'Make Calendar Event',
                      icon: 'Calendar',
                      keytipProps: keytipMap.SubmenuKeytip2,
                      onClick: () => { console.log('test2'); },
                      subMenuProps: {
                        items: [
                          {
                            key: 'testButton',
                            name: 'Add to Outlook',
                            keytipProps: keytipMap.SubmenuKeytip3,
                            onClick: () => { console.log('test3'); }
                          },
                          {
                            key: 'testButton2',
                            name: 'Go to Bing',
                            keytipProps: keytipMap.SubmenuKeytip4,
                            href: 'http://www.bing.com',
                            target: '_blank'
                          }
                        ]
                      }
                    },
                    {
                      key: 'splitButtonTest',
                      name: 'Other...',
                      split: true,
                      keytipProps: keytipMap.SubmenuKeytip5,
                      subMenuProps: {
                        items: [
                          {
                            key: 'splitButtonSubMenu1',
                            name: 'Submenu Item w/o Keytip',
                          },
                          {
                            key: 'splitButtonSubMenu2',
                            name: 'Submenu Item w/o Keytip'
                          }
                        ]
                      }
                    }
                  ],
                },
              }
            ]
          }
        />
        { this.state.showMessageBar &&
          <MessageBar messageBarType={ MessageBarType.success }>
            Success Uploading
        </MessageBar>
        }
        <Modal
          isOpen={ this.state.showModal }
          onDismiss={ this._hideModal }
          isBlocking={ false }
        >
          <h3>New Modal</h3>
        </Modal>
      </div>
    );
  }

  @autobind
  private _showModal(): void {
    this.setState({ showModal: true });
  }

  @autobind
  private _hideModal(): void {
    this.setState({ showModal: false });
  }

  @autobind
  private _showMessageBar(): void {
    this.setState({ showMessageBar: true });

    // Hide the MessageBar after 2 seconds
    setTimeout(this._hideMessageBar, 2000);
  }

  @autobind
  private _hideMessageBar(): void {
    this.setState({ showMessageBar: false });
  }
}