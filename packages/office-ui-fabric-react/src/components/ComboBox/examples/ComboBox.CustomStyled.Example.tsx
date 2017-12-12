import * as React from 'react';
import {
  ComboBox
} from 'office-ui-fabric-react/lib/ComboBox';
import './ComboBox.Basic.Example.scss';

export class ComboBoxCustomStyledExample extends React.Component<any, any> {

  private _testOptionsWithCustomStyling =
    [{
      key: 'A',
      text: 'Arial Black',
      styles: {
        optionText: {
          fontFamily: '"Arial Black", "Arial Black_MSFontService", sans-serif',
        }
      }
    },
    {
      key: 'B',
      text: 'Times New Roman',
      styles: {
        optionText: {
          fontFamily: '"Times New Roman", "Times New Roman_MSFontService", serif',
        }
      }
    },
    {
      key: 'C',
      text: 'Comic Sans MS',
      styles: {
        optionText: {
          fontFamily: '"Comic Sans MS", "Comic Sans MS_MSFontService", fantasy',
        }
      }
    },
    {
      key: 'D',
      text: 'Calibri',
      styles: {
        optionText: {
          fontFamily: 'Calibri, Calibri_MSFontService, sans-serif',
        }
      }
    },
    ];

  constructor() {
    super();
  }

  public render() {
    return (
      <div className='ms-ComboBoxCustomStyledExample'>
        <ComboBox
          defaultSelectedKey='C'
          label='Custom styled uncontrolled ComboBox (allowFreeform: T, AutoComplete: T):'
          id='Basicdrop6'
          ariaLabel='Custom styled ComboBox example'
          allowFreeform={ true }
          autoComplete='on'
          options={ this._testOptionsWithCustomStyling }
          styles={
            {
              container: {
                maxWidth: '300px'
              },
            }
          }
          getComboBoxOptionStyles={ () => ({
            label: {
              fontFamily: 'initial', // this should be overriden by custom styles for each option
            }
          }) }
        />

      </div>
    );
  }
}