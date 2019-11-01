import * as React from 'react';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { css, classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

import { choiceGroupCustomExampleStyle, IChoiceGroupCustomExampleStyles } from './ChoiceGroup.Custom.Example.Styles';

const getClassNames = classNamesFunction<{}, IChoiceGroupCustomExampleStyles>();
const styles = getClassNames(choiceGroupCustomExampleStyle, {});

export class ChoiceGroupCustomExample extends React.Component {
  public render() {
    return (
      <div>
        <ChoiceGroup
          defaultSelectedKey="B"
          options={[
            {
              key: 'A',
              text: 'Mark displayed items as read after',
              ariaLabel: 'Mark displayed items as read after - Press tab for further action',
              onRenderField: (props, render) => {
                return (
                  <div className={css(styles.root)}>
                    {render!(props)}
                    <Dropdown
                      className={css(styles.dropdown)}
                      defaultSelectedKey="A"
                      options={[{ key: 'A', text: '5 seconds' }, { key: 'B', text: '10 seconds' }, { key: 'C', text: '20 seconds' }]}
                      disabled={props ? !props.checked : false}
                      ariaLabel="Select a time span"
                    />
                  </div>
                );
              }
            },
            {
              key: 'B',
              text: 'Option B',
              styles: {
                root: {
                  border: '1px solid green'
                }
              }
            },
            {
              key: 'C',
              text: 'Option C',
              disabled: true
            },
            {
              key: 'D',
              text: 'Option D',
              disabled: false
            }
          ]}
          onChange={this._onChange}
          label="Pick one"
          required={true}
        />
      </div>
    );
  }

  private _onChange = (ev: React.FormEvent<HTMLInputElement>, option: any): void => {
    console.dir(option);
  };
}
