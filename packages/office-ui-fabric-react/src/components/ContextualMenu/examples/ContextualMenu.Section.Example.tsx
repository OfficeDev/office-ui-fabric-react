import * as React from 'react';
import { ContextualMenu, ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { autobind, getRTL } from 'office-ui-fabric-react/lib/Utilities';
import './ContextualMenuExample.scss';

export class ContextualMenuSectionExample extends React.Component<any, any> {

  constructor() {
    super();
    this.state = {
      isContextMenuVisible: false,
      showCallout: false
    };
    this._onClick = this._onClick.bind(this);
    this._onDismiss = this._onDismiss.bind(this);
  }

  public render() {
    let { showCallout } = this.state;

    return (
      <div>
        <DefaultButton onClick={ this._onClick } id='ContextualMenuButton1' text='Click for ContextualMenu' />
        { this.state.isContextMenuVisible ? (
          <ContextualMenu
            shouldFocusOnMount={ true }
            target={ this.state.target }
            onDismiss={ this._onDismiss }
            title='My Menu'
            directionalHint={ getRTL() ? DirectionalHint.bottomRightEdge : DirectionalHint.bottomLeftEdge }
            items={
              [
                {
                  key: 'section',
                  itemType: ContextualMenuItemType.Section,
                  sectionProps: {
                    topDivider: true,
                    bottomDivider: true,
                    title: {
                      key: 'Actions',
                      itemType: ContextualMenuItemType.Header,
                      name: 'Actions'
                    },
                    items: [
                      {
                        key: 'newItem',
                        name: 'New',
                        iconProps: {
                          iconName: 'Add'
                        },
                        subMenuProps: {
                          items: [
                            {
                              key: 'emailMessage',
                              name: 'Email message',
                              title: 'Create an email'
                            },
                            {
                              key: 'calendarEvent',
                              name: 'Calendar event',
                              title: 'Create a calendar event',
                            }
                          ],
                        }
                      },
                      {
                        key: 'upload',
                        onClick: () => {
                          this.setState({ showCallout: true });
                        },
                        iconProps: {
                          iconName: 'Upload',
                          style: {
                            color: 'salmon'
                          }
                        },
                        name: 'Upload (Custom Color)',
                        title: 'Upload a file'
                      }
                    ]
                  }
                },
                {
                  key: 'section',
                  itemType: ContextualMenuItemType.Section,
                  sectionProps: {
                    title: {
                      key: 'Navigation',
                      itemType: ContextualMenuItemType.Header,
                      name: 'Social'
                    },
                    items: [
                      {
                        key: 'share',
                        iconProps: {
                          iconName: 'Share'
                        },
                        subMenuProps: {
                          items: [
                            {
                              key: 'sharetoemail',
                              name: 'Share to Email',
                              iconProps: {
                                iconName: 'Mail'
                              },
                            },
                            {
                              key: 'sharetofacebook',
                              name: 'Share to Facebook',
                            },
                            {
                              key: 'sharetotwitter',
                              name: 'Share to Twitter',
                              iconProps: {
                                iconName: 'Share'
                              },
                              subMenuProps: {
                                items: [
                                  {
                                    key: 'sharetoemail_1',
                                    name: 'Share to Email',
                                    title: 'Share to Email',
                                    iconProps: {
                                      iconName: 'Mail'
                                    },
                                  },
                                  {
                                    key: 'sharetofacebook_1',
                                    name: 'Share to Facebook',
                                    title: 'Share to Facebook',
                                  },
                                  {
                                    key: 'sharetotwitter_1',
                                    name: 'Share to Twitter',
                                    title: 'Share to Twitter',
                                    iconProps: {
                                      iconName: 'Share'
                                    }
                                  },
                                ],
                              },
                            },
                          ],
                        },
                        name: 'Share'
                      },
                      {
                        key: 'print',
                        iconProps: {
                          iconName: 'Print'
                        },
                        name: 'Print'
                      },
                      {
                        key: 'music',
                        iconProps: {
                          iconName: 'MusicInCollectionFill'
                        },
                        name: 'Music',
                      },

                    ]
                  }
                }
              ]
            }
          />) : (null) }

        { showCallout && (
          <Callout
            setInitialFocus={ true }
            onDismiss={ this._setShowCalloutFalse }
          >
            <DefaultButton
              onClick={ this._setShowCalloutFalse }
              text='Hello world'
            />
          </Callout>
        ) }
      </div>
    );
  }

  private _onClick(event: React.MouseEvent<any>) {
    this.setState({ target: event.currentTarget, isContextMenuVisible: true });
  }

  private _onDismiss(event: any) {
    this.setState({ isContextMenuVisible: false });
  }

  @autobind
  private _setShowCalloutFalse(): void {
    this.setState({ showCallout: false });
  }
}
