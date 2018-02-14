import * as React from 'react';
import { convertSequencesToKeytipID, IKeytipTransitionKey } from '../../../utilities/keysequence';
import { KeytipLayer } from '../KeytipLayer';
import { registerKeytip } from '../../../utilities/keytip/KeytipUtils';
import { IKeytipProps } from '../../Keytip';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { addKeytipSequence } from '../../../utilities/keytip';
import { ModifierKeyCodes } from '../../../utilities/keytip/ModifierKeyCodes';

export interface IKeytipLayerBasicExampleState {
}

export interface IKeytipMap {
  [componentKeytipId: string]: IKeytipProps;
}

export class KeytipLayerBasicExample extends React.Component<{}, IKeytipLayerBasicExampleState> {

  private startingKeySequence: IKeytipTransitionKey = { key: 'Meta', modifierKeys: [ModifierKeyCodes.alt] };
  private keytipMap: IKeytipMap = {};

  constructor(props: {}) {
    super(props);

    // Setup keytips
    this.keytipMap.Pivot1Keytip = {
      content: 'A',
      keySequences: [{ keys: ['a'] }]
    } as IKeytipProps;

    this.keytipMap.Pivot2Keytip = {
      content: 'B',
      keySequences: [{ keys: ['b'] }]
    } as IKeytipProps;

    this.keytipMap.Pivot3Keytip = {
      content: 'C',
      keySequences: [{ keys: ['c'] }]
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

    this.keytipMap.Button1Pivot2Keytip = {
      content: '2',
      keySequences: addKeytipSequence(this.keytipMap.Pivot2Keytip.keySequences, { keys: ['2'] })
    } as IKeytipProps;

    this.keytipMap.Button1Pivot3Keytip = {
      content: '3',
      keySequences: addKeytipSequence(this.keytipMap.Pivot3Keytip.keySequences, { keys: ['3'] })
    } as IKeytipProps;
  }

  public render(): JSX.Element {
    return (
      <div>
        <Pivot>
          <PivotItem
            linkText='Pivot 1'
            data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Pivot1Keytip.keySequences) }
          >
            <DefaultButton
              data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Button1Pivot1Keytip.keySequences) }
              text='Test Button 1'
            // onClick={ () => { alert('Clicked Button 1'); } }
            />
            <DefaultButton
              data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Button2Pivot1Keytip.keySequences) }
              text='Test Button 2'
            />
            <DefaultButton
              data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Button3Pivot1Keytip.keySequences) }
              text='Test Button 3'
            />
          </PivotItem>
          <PivotItem
            linkText='Pivot 2'
            data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Pivot2Keytip.keySequences) }
          >
            <DefaultButton
              data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Button1Pivot2Keytip.keySequences) }
              text='Test Button 2'
            />
          </PivotItem>
          <PivotItem
            linkText='Pivot 3'
            data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Pivot3Keytip.keySequences) }
          >
            <DefaultButton
              data-ktp-id={ convertSequencesToKeytipID(this.keytipMap.Button1Pivot3Keytip.keySequences) }
              text='Test Button 3'
            />
          </PivotItem>
        </Pivot>
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

  // TODO use this to getExecute of buttons
  // private _getExecute(id: string): () => void {
  //   let element = document.querySelector(id) as HTMLElement;
  //   return element.click;
  // }
}