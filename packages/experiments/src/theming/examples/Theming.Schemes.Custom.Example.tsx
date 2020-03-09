import * as React from 'react';

import {
  ChoiceGroup,
  CommandBar,
  ICommandBarItemProps,
  createTheme,
  Customizer,
  DefaultButton,
  Dialog,
  DialogFooter,
  DialogType,
  getTheme,
  IPalette,
  IStackComponent,
  IStackStylesReturnType,
  IStackTokens,
  ITheme,
  PrimaryButton,
  Stack,
  Toggle,
  Text
} from 'office-ui-fabric-react';

// tslint:disable:max-line-length
import { CollapsibleSectionRecursiveExample } from '@uifabric/experiments/lib/components/CollapsibleSection/examples/CollapsibleSection.Recursive.Example';

import { ThemeProvider } from '@uifabric/foundation';

const regionStyles: IStackComponent['styles'] = (props, theme): IStackStylesReturnType => ({
  root: {
    backgroundColor: theme.semanticColors.bodyBackground,
    color: theme.semanticColors.bodyText
  }
});

const invertedPrimaryPalette: IPalette = {
  themePrimary: '#ffffff',
  themeLighterAlt: '#767676',
  themeLighter: '#a6a6a6',
  themeLight: '#c8c8c8',
  themeTertiary: '#d0d0d0',
  themeSecondary: '#dadada',
  themeDarkAlt: '#eaeaea',
  themeDark: '#f4f4f4',
  themeDarker: '#f8f8f8',
  neutralLighterAlt: '#097dd6',
  neutralLighter: '#1282d7',
  neutralLight: '#2089da',
  neutralQuaternaryAlt: '#288edc',
  neutralQuaternary: '#3092dd',
  neutralTertiaryAlt: '#4fa3e3',
  neutralTertiary: '#c8c8c8',
  neutralSecondary: '#d0d0d0',
  neutralPrimaryAlt: '#dadada',
  neutralPrimary: '#ffffff',
  neutralDark: '#f4f4f4',
  black: '#f8f8f8',
  white: '#0078d4',

  // TODO: not generated by ThemeGeneratorPage:
  blackTranslucent40: 'rgba(0,0,0,.4)',
  neutralSecondaryAlt: '#767676',
  accent: '#0078d4',
  whiteTranslucent40: 'rgba(255,255,255,.4)',
  yellowDark: '#d29200',
  yellow: '#ffb900',
  yellowLight: '#fff100',
  orange: '#d83b01',
  orangeLight: '#ea4300',
  orangeLighter: '#ff8c00',
  redDark: '#a80000',
  red: '#e81123',
  magentaDark: '#5c005c',
  magenta: '#b4009e',
  magentaLight: '#e3008c',
  purpleDark: '#32145a',
  purple: '#5c2d91',
  purpleLight: '#b4a0ff',
  blueDark: '#002050',
  blueMid: '#00188f',
  blue: '#0078d4',
  blueLight: '#00bcf2',
  tealDark: '#004b50',
  teal: '#008272',
  tealLight: '#00b294',
  greenDark: '#004b1c',
  green: '#107c10',
  greenLight: '#bad80a'
};

const invertedDefaultPalette: IPalette = {
  themePrimary: '#ffffff',
  themeLighterAlt: '#767676',
  themeLighter: '#a6a6a6',
  themeLight: '#c8c8c8',
  themeTertiary: '#d0d0d0',
  themeSecondary: '#dadada',
  themeDarkAlt: '#eaeaea',
  themeDark: '#f4f4f4',
  themeDarker: '#f8f8f8',
  neutralLighterAlt: '#0b0b0b',
  neutralLighter: '#151515',
  neutralLight: '#252525',
  neutralQuaternaryAlt: '#2f2f2f',
  neutralQuaternary: '#373737',
  neutralTertiaryAlt: '#595959',
  neutralTertiary: '#c8c8c8',
  neutralSecondary: '#d0d0d0',
  neutralPrimaryAlt: '#dadada',
  neutralPrimary: '#ffffff',
  neutralDark: '#f4f4f4',
  black: '#f8f8f8',
  white: '#000000',
  blackTranslucent40: 'rgba(0,0,0,.4)',
  neutralSecondaryAlt: '#767676',
  accent: '#0078d4',
  whiteTranslucent40: 'rgba(255,255,255,.4)',
  yellowDark: '#d29200',
  yellow: '#ffb900',
  yellowLight: '#fff100',
  orange: '#d83b01',
  orangeLight: '#ea4300',
  orangeLighter: '#ff8c00',
  redDark: '#a80000',
  red: '#e81123',
  magentaDark: '#5c005c',
  magenta: '#b4009e',
  magentaLight: '#e3008c',
  purpleDark: '#32145a',
  purple: '#5c2d91',
  purpleLight: '#b4a0ff',
  blueDark: '#002050',
  blueMid: '#00188f',
  blue: '#0078d4',
  blueLight: '#00bcf2',
  tealDark: '#004b50',
  teal: '#008272',
  tealLight: '#00b294',
  greenDark: '#004b1c',
  green: '#107c10',
  greenLight: '#bad80a'
};

const defaultTheme: ITheme = getTheme(true);

const invertedDefaultTheme: ITheme = createTheme({
  palette: invertedDefaultPalette,
  semanticColors: {
    bodyText: defaultTheme.palette.white,
    bodyBackground: defaultTheme.palette.neutralPrimary
  }
});

const invertedPrimaryTheme: ITheme = createTheme({
  palette: invertedPrimaryPalette,
  semanticColors: {
    bodyText: defaultTheme.palette.white,
    bodyBackground: defaultTheme.palette.themePrimary
  }
});

const schemeThemeCustom: ITheme = {
  ...defaultTheme,
  schemes: {
    default: defaultTheme,
    neutral: defaultTheme,
    soft: invertedPrimaryTheme,
    strong: invertedDefaultTheme
  }
};

export interface IThemingExampleState {
  bodyToggle: boolean;
  sideToggle: boolean;
  topToggle: boolean;
}

export class ThemingSchemesCustomExample extends React.Component<{}, IThemingExampleState> {
  public state: IThemingExampleState = {
    bodyToggle: false,
    sideToggle: false,
    topToggle: false
  };

  public render(): JSX.Element {
    return <Customizer settings={{ theme: schemeThemeCustom }}>{this._renderSchemedComponents()}</Customizer>;
  }

  /**
   * Render various components only using scheme names (no Customizers.)
   */
  private _renderSchemedComponents(): JSX.Element {
    const bodyScheme = this.state.bodyToggle ? 'soft' : 'neutral';
    const sideScheme = this.state.sideToggle ? 'neutral' : 'strong';
    const topScheme = this.state.topToggle ? 'strong' : 'soft';
    const bodyCaption = 'Scheme: ' + bodyScheme;
    const sideCaption = 'Scheme: ' + sideScheme;
    const topCaption = 'Scheme: ' + topScheme;

    const stackTokens: IStackTokens = { childrenGap: 10 };

    // TODO: Even though this styles function is the same for all regions, it has to be provided whenever the scheme
    //        is changed to apply the new semanticColors. Is this the best way we can do this?
    return (
      <Stack horizontal tokens={stackTokens}>
        <Stack.Item grow={true} styles={{ root: { width: '33%', maxWidth: '33%' } }}>
          <ThemeProvider scheme={sideScheme}>
            <Stack styles={regionStyles} tokens={stackTokens} padding={5}>
              <Text>{sideCaption}</Text>
              <Toggle offText={sideCaption} onText={sideCaption} onChange={this.toggleSide} />
              <CollapsibleSectionRecursiveExample />
            </Stack>
          </ThemeProvider>
        </Stack.Item>
        <Stack.Item grow={true} styles={{ root: { height: 'auto' } }}>
          <Stack grow={true} verticalFill={true}>
            <ThemeProvider scheme={topScheme}>
              <Stack styles={regionStyles} tokens={stackTokens} padding={5}>
                <Stack horizontal horizontalAlign="space-between">
                  <Text>{topCaption}</Text>
                  <Toggle offText={topCaption} onText={topCaption} onChange={this.toggleTop} />
                </Stack>
                <CommandBar items={items} overflowItems={overflowItems} farItems={farItems} />
              </Stack>
            </ThemeProvider>
            <ThemeProvider scheme={bodyScheme}>
              <Stack styles={regionStyles} verticalFill={true} padding={5}>
                <Stack horizontal horizontalAlign="space-between">
                  <Text>{bodyCaption}</Text>
                  <Toggle offText={bodyCaption} onText={bodyCaption} onChange={this.toggleBody} />
                </Stack>
                <ThemeProvider scheme="default">
                  <Stack.Item>
                    <DialogExample buttonText="Default Theme" />
                  </Stack.Item>
                </ThemeProvider>
                <ThemeProvider scheme="strong">
                  <Stack.Item>
                    <DialogExample buttonText="Strong Scheme" />
                  </Stack.Item>
                </ThemeProvider>
                <ThemeProvider scheme="soft">
                  <Stack.Item>
                    <DialogExample buttonText="Soft Scheme" />
                  </Stack.Item>
                </ThemeProvider>
                <DialogExample buttonText="Inherited Scheme" />
              </Stack>
            </ThemeProvider>
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }

  private toggleBody = () => {
    this.setState((state: IThemingExampleState) => this.setState({ bodyToggle: !state.bodyToggle }));
  };

  private toggleSide = () => {
    this.setState((state: IThemingExampleState) => this.setState({ sideToggle: !state.sideToggle }));
  };

  private toggleTop = () => {
    this.setState((state: IThemingExampleState) => this.setState({ topToggle: !state.topToggle }));
  };
}

// tslint:disable-next-line:deprecation
const onCommandClick = (ev: any, item?: ICommandBarItemProps) => console.log(item && (item.text || item.name));
const items: ICommandBarItemProps[] = [
  {
    key: 'newItem',
    name: 'New',
    iconProps: { iconName: 'Add' },
    ariaLabel: 'New. Use left and right arrow keys to navigate',
    subMenuProps: {
      items: [
        { key: 'emailMessage', name: 'Email message', iconProps: { iconName: 'Mail' } },
        { key: 'calendarEvent', name: 'Calendar event', iconProps: { iconName: 'Calendar' } }
      ]
    }
  },
  { key: 'upload', name: 'Upload', iconProps: { iconName: 'Upload' }, href: 'https://dev.office.com/fabric', target: '_blank' },
  { key: 'share', name: 'Share', iconProps: { iconName: 'Share' }, onClick: onCommandClick },
  { key: 'download', name: 'Download', iconProps: { iconName: 'Download' }, onClick: onCommandClick }
];

const overflowItems: ICommandBarItemProps[] = [
  { key: 'move', name: 'Move to...', iconProps: { iconName: 'MoveToFolder' } },
  { key: 'copy', name: 'Copy to...', iconProps: { iconName: 'Copy' } },
  { key: 'rename', name: 'Rename...', iconProps: { iconName: 'Edit' } }
];

const farItems: ICommandBarItemProps[] = [
  { key: 'sort', name: 'Sort', ariaLabel: 'Sort', iconProps: { iconName: 'SortLines' }, onClick: onCommandClick },
  { key: 'tile', name: 'Grid view', ariaLabel: 'Grid view', iconProps: { iconName: 'Tiles' }, iconOnly: true, onClick: onCommandClick },
  { key: 'info', name: 'Info', ariaLabel: 'Info', iconProps: { iconName: 'Info' }, iconOnly: true, onClick: onCommandClick }
];

interface IDialogExampleProps {
  buttonText: string;
}

interface IDialogExampleState {
  hideDialog: boolean;
}

class DialogExample extends React.Component<IDialogExampleProps, IDialogExampleState> {
  public state: IDialogExampleState = {
    hideDialog: true
  };

  public render(): JSX.Element {
    return (
      <div>
        <br />
        <DefaultButton secondaryText="Opens the Sample Dialog" onClick={this._showDialog} text={this.props.buttonText} />
        <Dialog
          hidden={this.state.hideDialog}
          onDismiss={this._closeDialog}
          dialogContentProps={{
            type: DialogType.largeHeader,
            title: 'All emails together',
            subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } }
          }}
        >
          <ChoiceGroup
            options={[
              { key: 'A', text: 'Option A' },
              { key: 'B', text: 'Option B', checked: true },
              { key: 'C', text: 'Option C', disabled: true }
            ]}
          />
          <DialogFooter>
            <PrimaryButton onClick={this._closeDialog} text="Save" />
            <DefaultButton onClick={this._closeDialog} text="Cancel" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }

  private _showDialog = (): void => this.setState({ hideDialog: false });
  private _closeDialog = (): void => this.setState({ hideDialog: true });
}
