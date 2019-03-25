import * as React from 'react';
import * as stylesImport from './app.scss';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Card } from '@uifabric/react-cards';
// import { Dropdown } from '../../../../packages/office-ui-fabric-react/lib/Dropdown';
import { ThemeDesignerColorPicker } from './ThemeDesignerColorPicker';

const styles: any = stylesImport;

interface IColorPanelProps {
  primaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
}

interface IColorPanelState {
  primaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
}

export class ColorPanel extends React.Component<IColorPanelProps, IColorPanelState> {
  constructor(props: any) {
    super(props);

    this.state = {
      primaryColor: '#ffa500',
      textColor: '#0078d4',
      backgroundColor: '#323130'
    };
  }
  public handlePrimaryColorChange = (event: any, newVal: string | undefined) => {
    this.setState({ primaryColor: newVal });
  };
  public handleTextColorChange = (event: any, newVal: string | undefined) => {
    this.setState({ textColor: newVal });
  };
  public handleBackgroundColorChange = (event: any, newVal: string | undefined) => {
    this.setState({ backgroundColor: newVal });
  };
  public render(): JSX.Element {
    return (
      <Card styles={{ root: { width: '300px', height: 'auto' } }}>
        <h1>Color</h1>
        <span>Presets</span>
        <Stack gap={30}>
          {/* This Dropdown will allow the user to switch from light to dark theme on the whole app. */}
          {/* <Dropdown
            placeholder="Select an Option"
            label="Theme dropdown"
            ariaLabel="Theme dropdown"
            options={[{ key: 'light', text: 'Light theme' }, { key: 'dark', text: 'Dark theme' }]}
          /> */}
          <ThemeDesignerColorPicker label={'Primary Color'} value={this.state.primaryColor} onChange={this.handlePrimaryColorChange} />
          <ThemeDesignerColorPicker label={'Text Color'} value={this.state.textColor} onChange={this.handleTextColorChange} />
          <ThemeDesignerColorPicker
            label={'Background Color'}
            value={this.state.backgroundColor}
            onChange={this.handleBackgroundColorChange}
          />
        </Stack>
      </Card>
    );
  }
}
