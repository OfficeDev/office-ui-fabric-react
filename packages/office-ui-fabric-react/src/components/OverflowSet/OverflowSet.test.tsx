import * as React from 'react';
import { shallow } from 'enzyme';

import { OverflowSet } from './OverflowSet';
import * as sinon from 'sinon';
import { IOverflowSetItemProps } from './OverflowSet.types';
import { CommandBarButton } from '../../Button';
import { mount, ReactWrapper } from 'enzyme';
import { arraysEqual, find, createRef } from '../../Utilities';
import { IKeytipProps } from '../../Keytip';
import { KeytipLayer, KeytipLayerBase } from '../../KeytipLayer';
import { KeytipManager, IUniqueKeytip, ktpTargetFromId } from '../../utilities/keytips';

function getKeytip(keytipManager: KeytipManager, keySequences: string[]): IKeytipProps | undefined {
  const ktp = find(keytipManager.keytips, (uniqueKeytip: IUniqueKeytip) => {
    return arraysEqual(uniqueKeytip.keytip.keySequences, keySequences);
  });
  return ktp ? ktp.keytip : undefined;
}

function getPersistedKeytip(keytipManager: KeytipManager, keySequences: string[]): IKeytipProps | undefined {
  const ktp = find(keytipManager.persistedKeytips, (uniqueKeytip: IUniqueKeytip) => {
    return arraysEqual(uniqueKeytip.keytip.keySequences, keySequences);
  });
  return ktp ? ktp.keytip : undefined;
}

describe('OverflowSet', () => {
  it('does not render overflow when there are no overflow items', () => {
    const onRenderItem = sinon.spy();
    const onRenderOverflowButton = sinon.spy();
    shallow(<OverflowSet onRenderItem={ onRenderItem } onRenderOverflowButton={ onRenderOverflowButton } />);

    expect(onRenderOverflowButton.called).toEqual(false);
  });

  it('does not render overflow when overflow items is an empty array', () => {
    const onRenderItem = sinon.spy();
    const onRenderOverflowButton = sinon.spy();
    shallow(<OverflowSet onRenderItem={ onRenderItem } onRenderOverflowButton={ onRenderOverflowButton } overflowItems={ [] } />);

    expect(onRenderOverflowButton.called).toEqual(false);
  });

  function delay(millisecond: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, millisecond));
  }

  describe('keytip tests', () => {
    let overflowSet: ReactWrapper;
    let overflowKeytips: any;
    let items: IOverflowSetItemProps[];
    let overflowItems: IOverflowSetItemProps[];
    const layerRef = createRef<KeytipLayerBase>();

    const onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
      return (
        <CommandBarButton
          { ...item }
          menuProps={ item.subMenuProps }
        >{ item.name }
        </CommandBarButton>
      );
    };

    const onRenderOverflowButton = (overflowElements: any[] | undefined): JSX.Element => {
      return (
        <CommandBarButton
          menuIconProps={ { iconName: 'More' } }
          menuProps={ { items: overflowElements! } }
          keytipProps={ overflowKeytips.overflowButtonKeytip }
        />
      );
    };

    const keytipManager = KeytipManager.getInstance();

    beforeEach(() => {
      overflowKeytips = {
        overflowItemKeytip1: {
          content: 'A',
          keySequences: ['a'],
          onExecute: jest.fn()
        },
        overflowItemKeytip2: {
          content: 'B',
          keySequences: ['b'],
          onExecute: jest.fn()
        },
        overflowItemKeytip3: {
          content: 'C',
          keySequences: ['c'],
          onExecute: jest.fn()
        },
        overflowItemKeytip4: {
          content: 'D',
          keySequences: ['d'],
          onExecute: jest.fn()
        },
        overflowItemKeytip5: {
          content: 'E',
          keySequences: ['d', 'e'],
          onExecute: jest.fn()
        },
        overflowItemKeytip6: {
          content: 'F',
          keySequences: ['d', 'f'],
          onExecute: jest.fn()
        },
        overflowButtonKeytip: {
          // Overflow button
          content: 'X',
          keySequences: ['x'],
          onExecute: (el: HTMLElement) => {
            // Find the overflow button and manually click it to open the overflow menu
            overflowSet.find(ktpTargetFromId('ktp-x')).simulate('click');
          }
        }
      };

      items = [
        {
          key: 'item1',
          name: 'Item 1',
          keytipProps: overflowKeytips.overflowItemKeytip1
        },
        {
          key: 'item2',
          name: 'Item 2',
          keytipProps: overflowKeytips.overflowItemKeytip2
        },
      ];

      overflowItems = [
        {
          key: 'item3',
          name: 'Item 3',
          keytipProps: overflowKeytips.overflowItemKeytip3
        },
        {
          key: 'item4',
          name: 'Item 4',
          keytipProps: overflowKeytips.overflowItemKeytip4
        },
      ];
    });

    afterEach(() => {
      // Clean up the keytip items
      keytipManager.keytips = [];
      keytipManager.persistedKeytips = [];

      // Manually unmount to clean up listeners
      if (overflowSet) {
        overflowSet.unmount();
      }

      // Cleanup ContextualMenus that were created
      for (let i = 0; i < document.body.children.length; i++) {
        if (document.body.children[i].tagName === 'DIV') {
          document.body.removeChild(document.body.children[i]);
          i--;
        }
      }
    });

    describe('without submenus', () => {
      it('should register regular and persisted keytips', () => {
        overflowSet = mount(
          (
            <OverflowSet
              onRenderItem={ onRenderItem }
              onRenderOverflowButton={ onRenderOverflowButton }
              items={ items }
              overflowItems={ overflowItems }
              keytipSequences={ overflowKeytips.overflowButtonKeytip.keySequences }
            />
          ));
        // Persisted keytips will have the original key sequence of the items in the overflow
        // Regular keytips
        expect(getKeytip(keytipManager, overflowKeytips.overflowItemKeytip1.keySequences)).toBeDefined();
        expect(getKeytip(keytipManager, overflowKeytips.overflowItemKeytip2.keySequences)).toBeDefined();
        // Persisted keytips
        expect(getPersistedKeytip(keytipManager, overflowKeytips.overflowItemKeytip3.keySequences)).toBeDefined();
        expect(getPersistedKeytip(keytipManager, overflowKeytips.overflowItemKeytip4.keySequences)).toBeDefined();
        // Overflow button keytip
        expect(getKeytip(keytipManager, overflowKeytips.overflowButtonKeytip.keySequences)).toBeDefined();
      });

      it('should properly register and unregister keytips when items are moved to the overflow and back', () => {
        overflowSet = mount(
          (
            <OverflowSet
              onRenderItem={ onRenderItem }
              onRenderOverflowButton={ onRenderOverflowButton }
              items={ items }
              overflowItems={ overflowItems }
              keytipSequences={ overflowKeytips.overflowButtonKeytip.keySequences }
            />
          ));

        // Add the first overflow item to 'items'
        overflowSet.setProps({
          items: items.concat(overflowItems.slice(0, 1)),
          overflowItems: overflowItems.slice(1, 2)
        });

        // Regular keytips
        expect(getKeytip(keytipManager, overflowKeytips.overflowItemKeytip1.keySequences)).toBeDefined();
        expect(getKeytip(keytipManager, overflowKeytips.overflowItemKeytip2.keySequences)).toBeDefined();
        expect(getKeytip(keytipManager, overflowKeytips.overflowItemKeytip3.keySequences)).toBeDefined();
        // Persisted keytips
        expect(getPersistedKeytip(keytipManager, overflowKeytips.overflowItemKeytip4.keySequences)).toBeDefined();
        // Overflow button keytip
        expect(getKeytip(keytipManager, overflowKeytips.overflowButtonKeytip.keySequences)).toBeDefined();
      });

      it('triggering the overflow button keytip should register the menu item keytips with their modified sequence', () => {
        overflowSet = mount(
          (
            <div>
              <OverflowSet
                onRenderItem={ onRenderItem }
                onRenderOverflowButton={ onRenderOverflowButton }
                items={ items }
                overflowItems={ overflowItems }
                keytipSequences={ overflowKeytips.overflowButtonKeytip.keySequences }
              />
              <KeytipLayer
                content={ 'Alt Windows' }
                componentRef={ layerRef }
              />
            </div>
          ));

        // Set current keytip at root, like we've entered keytip mode
        const keytipTree = layerRef.value!.getKeytipTree();
        keytipTree.currentKeytip = keytipTree.root;
        // Open the overflow menu
        layerRef.value!.processInput('x');

        delay(750).then(() => {
          // Opening the submenu should register the two keytips for those items
          const modifiedKeytip3Sequence = ['x', 'c'];
          const modifiedKeytip4Sequence = ['x', 'd'];
          expect(getKeytip(keytipManager, modifiedKeytip3Sequence)).toBeDefined();
          expect(getKeytip(keytipManager, modifiedKeytip4Sequence)).toBeDefined();

          // Those two keytips should now be visible in the Layer
          layerRef.value!.state.keytips;
          const visibleKeytips = layerRef.value!.state.visibleKeytips;
          expect(visibleKeytips).toHaveLength(2);
        });
      });

      it('overflowSetSequence gets set correctly on overflowItems keytipProps when the overflow menu is opened', () => {
        // Set current keytip at root, like we've entered keytip mode
        overflowSet = mount(
          (
            <div>
              <OverflowSet
                onRenderItem={ onRenderItem }
                onRenderOverflowButton={ onRenderOverflowButton }
                items={ items }
                overflowItems={ overflowItems }
                keytipSequences={ overflowKeytips.overflowButtonKeytip.keySequences }
              />
              <KeytipLayer
                content={ 'Alt Windows' }
                componentRef={ layerRef }
              />
            </div>
          ));

        // Set current keytip at root, like we've entered keytip mode
        const keytipTree = layerRef.value!.getKeytipTree();
        keytipTree.currentKeytip = keytipTree.root;
        // Open the overflow menu
        layerRef.value!.processInput('x');

        delay(750).then(() => {
          // item3
          const item3Keytip = getKeytip(keytipManager, overflowKeytips.overflowItemKeytip3.keySequences);
          expect(arraysEqual(item3Keytip!.overflowSetSequence!, overflowKeytips.overflowButtonKeytip.keySequences)).toEqual(true);
          // item4
          const item4Keytip = getKeytip(keytipManager, overflowKeytips.overflowItemKeytip4.keySequences);
          expect(arraysEqual(item4Keytip!.overflowSetSequence!, overflowKeytips.overflowButtonKeytip.keySequences)).toEqual(true);
        });
      });

      it('correctly picks up a disabled keytip and doesn`t call it', () => {
        overflowItems = [
          {
            key: 'item3',
            name: 'Item 3',
            disabled: true,
            keytipProps: overflowKeytips.overflowItemKeytip3
          },
          {
            key: 'item4',
            name: 'Item 4',
            keytipProps: overflowKeytips.overflowItemKeytip4
          },
        ];
        overflowSet = mount(
          (
            <div>
              <OverflowSet
                onRenderItem={ onRenderItem }
                onRenderOverflowButton={ onRenderOverflowButton }
                items={ items }
                overflowItems={ overflowItems }
                keytipSequences={ overflowKeytips.overflowButtonKeytip.keySequences }
              />
              <KeytipLayer
                content={ 'Alt Windows' }
                componentRef={ layerRef }
              />
            </div>
          ));

        // Set current keytip at root, like we've entered keytip mode
        const keytipTree = layerRef.value!.getKeytipTree();
        keytipTree.currentKeytip = keytipTree.root;
        // Open the overflow menu
        layerRef.value!.processInput('c');
        // Nothing should happen, the current keytip should still be the root
        expect(keytipTree.currentKeytip).toEqual(keytipTree.root);
        expect(overflowKeytips.overflowItemKeytip3.onExecute).not.toBeCalled();
      });
    });

    describe('with submenus', () => {
      let item3: any;
      beforeEach(() => {
        item3 = { ...overflowItems[0] };
      });

      describe('without children keytips', () => {
        it('should not exit keytip mode after being triggered', () => {
          // Insert a submenu into one of the overflow items
          const overflowItemsWithSubMenu = [
            item3,
            {
              key: 'item4',
              name: 'Item 4',
              keytipProps: {
                ...overflowKeytips.overflowItemKeytip4,
                onExecute: (el: HTMLElement) => {
                  el.click();
                }
              },
              subMenuProps: {
                items: [
                  {
                    key: 'item5',
                    name: 'Item 5'
                  },
                  {
                    key: 'item6',
                    name: 'Item 6'
                  },
                ]
              }
            },
          ];

          overflowSet = mount(
            (
              <div>
                <OverflowSet
                  onRenderItem={ onRenderItem }
                  onRenderOverflowButton={ onRenderOverflowButton }
                  items={ items }
                  overflowItems={ overflowItemsWithSubMenu }
                  keytipSequences={ overflowKeytips.overflowButtonKeytip.keySequences }
                />
                <KeytipLayer
                  content={ 'Alt Windows' }
                  componentRef={ layerRef }
                />
              </div>
            ));

          // Set current keytip at root, like we've entered keytip mode
          const keytipTree = layerRef.value!.getKeytipTree();
          keytipTree.currentKeytip = keytipTree.root;
          // Open d's submenu
          layerRef.value!.processInput('d');

          expect(keytipTree.currentKeytip).toBeDefined();
        });
      });

      describe('with children keytips', () => {
        it('should open the overflow and submenu when the persisted keytip is triggered', () => {
          const overflowItemsWithSubMenuAndKeytips = [
            item3,
            {
              key: 'item4',
              name: 'Item 4',
              keytipProps: {
                ...overflowKeytips.overflowItemKeytip4,
                onExecute: (el: HTMLElement) => {
                  el.click();
                }
              },
              subMenuProps: {
                items: [
                  {
                    key: 'item5',
                    name: 'Item 5',
                    keytipProps: overflowKeytips.overflowItemKeytip5
                  },
                  {
                    key: 'item6',
                    name: 'Item 6',
                    keytipProps: overflowKeytips.overflowItemKeytip6,
                    subMenuProps: {
                      items: [
                        {
                          key: 'item7',
                          name: 'Item 7',
                          keytipProps: {
                            content: 'X',
                            keySequences: ['d', 'f', 'x']
                          }
                        }
                      ]
                    }
                  },
                ]
              }
            },
          ];

          overflowSet = mount(
            (
              <div>
                <OverflowSet
                  onRenderItem={ onRenderItem }
                  onRenderOverflowButton={ onRenderOverflowButton }
                  items={ items }
                  overflowItems={ overflowItemsWithSubMenuAndKeytips }
                  keytipSequences={ overflowKeytips.overflowButtonKeytip.keySequences }
                />
                <KeytipLayer
                  content={ 'Alt Windows' }
                  componentRef={ layerRef }
                />
              </div>
            ));

          // Set current keytip at root, like we've entered keytip mode
          const keytipTree = layerRef.value!.getKeytipTree();
          keytipTree.currentKeytip = keytipTree.root;
          layerRef.value!.processInput('d');

          // The two submenu keytips should be registered with their modified sequence in the manager
          const modifiedKeytip5Sequence = ['d', 'e'];
          const modifiedKeytip6Sequence = ['d', 'f'];
          const subMenu5Keytip = getKeytip(keytipManager, modifiedKeytip5Sequence);
          expect(subMenu5Keytip).toBeDefined();
          expect(subMenu5Keytip!.overflowSetSequence![0]).toEqual('x');
          const subMenu6Keytip = getKeytip(keytipManager, modifiedKeytip6Sequence);
          expect(subMenu6Keytip).toBeDefined();
          expect(subMenu6Keytip!.overflowSetSequence![0]).toEqual('x');

          delay(750).then(() => {
            // Those two keytips should now be visible in the Layer and have overflowSetSequence set
            const submenuKeytips = layerRef.value!.state.visibleKeytips;
            submenuKeytips.forEach((submenuKeytip: IKeytipProps) => {
              expect(submenuKeytip.visible).toEqual(true);
              expect(arraysEqual(submenuKeytip.overflowSetSequence!, overflowKeytips.overflowButtonKeytip.keySequences)).toEqual(true);
            });
          });
        });
      });

      describe('with non-standard children keytips', () => {
        it('should respect itemSubMenuProvider when setting overflowSetSequence', () => {
          const overflowItemsWithSubMenuAndKeytips = [
            item3,
            {
              key: 'item4',
              name: 'Item 4',
              keytipProps: {
                ...overflowKeytips.overflowItemKeytip4,
                onExecute: (el: HTMLElement) => {
                  el.click();
                }
              },
              customSubMenu: {
                items: [
                  {
                    key: 'item5',
                    name: 'Item 5',
                    keytipProps: overflowKeytips.overflowItemKeytip5
                  },
                  {
                    key: 'item6',
                    name: 'Item 6',
                    keytipProps: overflowKeytips.overflowItemKeytip6,
                    customSubMenu: {
                      items: [
                        {
                          key: 'item7',
                          name: 'Item 7',
                          keytipProps: {
                            content: 'X',
                            keySequences: ['d', 'f', 'x']
                          }
                        }
                      ]
                    }
                  },
                ]
              }
            },
          ];

          const itemSubMenuProvider = (item: IOverflowSetItemProps) => {
            if (item.customSubMenu) {
              return item.customSubMenu.items;
            }
            return undefined;
          };

          overflowSet = mount(
            (
              <div>
                <OverflowSet
                  onRenderItem={ onRenderItem }
                  onRenderOverflowButton={ onRenderOverflowButton }
                  items={ items }
                  overflowItems={ overflowItemsWithSubMenuAndKeytips }
                  keytipSequences={ overflowKeytips.overflowButtonKeytip.keySequences }
                  itemSubMenuProvider={ itemSubMenuProvider }
                />
                <KeytipLayer
                  content={ 'Alt Windows' }
                  componentRef={ layerRef }
                />
              </div>
            ));

          // Set current keytip at root, like we've entered keytip mode
          const keytipTree = layerRef.value!.getKeytipTree();
          keytipTree.currentKeytip = keytipTree.root;

          layerRef.value!.processInput('d');

          delay(750).then(() => {
            // Those two keytips should now be visible in the Layer and have overflowSetSequence set
            const submenuKeytips = layerRef.value!.state.visibleKeytips;
            submenuKeytips.forEach((submenuKeytip: IKeytipProps) => {
              expect(submenuKeytip.visible).toEqual(true);
              expect(arraysEqual(submenuKeytip.overflowSetSequence!, overflowKeytips.overflowButtonKeytip.keySequences)).toEqual(true);
            });
          });
        });
      });
    });
  });
});