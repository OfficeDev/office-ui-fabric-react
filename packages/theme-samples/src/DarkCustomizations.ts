import {
  createTheme,
  ICustomizations,
  IPalette,
  ITheme,
  IPeoplePickerItemSelectedStyleProps,
  IPeoplePickerItemSelectedStyles,
  IPersonaCoinStyleProps,
  IPersonaCoinStyles,
} from 'office-ui-fabric-react';
import { addVariants } from '@uifabric/variants';

const DarkDefaultPalette: Partial<IPalette> = {
  themeDarker: '#82c7ff',
  themeDark: '#6cb8f6',
  themeDarkAlt: '#3aa0f3',
  themePrimary: '#2899f5',
  themeSecondary: '#0078d4',
  themeTertiary: '#235a85',
  themeLight: '#004c87',
  themeLighter: '#043862',
  themeLighterAlt: '#092c47',
  black: '#ffffff',
  neutralDark: '#faf9f8',
  neutralPrimary: '#f3f2f1',
  neutralPrimaryAlt: '#c8c6c4',
  neutralSecondary: '#a19f9d',
  neutralSecondaryAlt: '#979693',
  neutralTertiary: '#797775',
  neutralTertiaryAlt: '#484644',
  neutralQuaternary: '#3b3a39',
  neutralQuaternaryAlt: '#323130',
  neutralLight: '#292827',
  neutralLighter: '#252423',
  neutralLighterAlt: '#201f1e',
  white: '#1b1a19',
  redDark: '#F1707B',
};

const DarkTheme: ITheme = createTheme({
  palette: DarkDefaultPalette,
  semanticColors: {
    buttonText: DarkDefaultPalette.black,
    buttonTextPressed: DarkDefaultPalette.neutralDark,
    buttonTextHovered: DarkDefaultPalette.neutralPrimary,
    disabledBackground: DarkDefaultPalette.neutralQuaternaryAlt,
    inputBackgroundChecked: DarkDefaultPalette.themePrimary,
    menuBackground: DarkDefaultPalette.neutralLighter,
    menuItemBackgroundHovered: DarkDefaultPalette.neutralQuaternaryAlt,
    menuItemBackgroundPressed: DarkDefaultPalette.neutralQuaternary,
    menuDivider: DarkDefaultPalette.neutralTertiaryAlt,
    menuIcon: DarkDefaultPalette.themeDarkAlt,
    menuHeader: DarkDefaultPalette.black,
    menuItemText: DarkDefaultPalette.neutralPrimary,
    menuItemTextHovered: DarkDefaultPalette.neutralDark,
  },
});

export const PersonaCoinStyles = (props: IPersonaCoinStyleProps): Partial<IPersonaCoinStyles> => {
  return {
    initials: {
      color: props.showUnknownPersonaCoin ? DarkTheme.palette.redDark : DarkTheme.palette.black,
    },
  };
};

export const PeoplePickerItemStyles = (
  props: IPeoplePickerItemSelectedStyleProps,
): Partial<IPeoplePickerItemSelectedStyles> => {
  const { selected } = props;

  return {
    root: [
      {
        background: DarkTheme.palette.neutralQuaternaryAlt,
        selectors: {
          ':hover': {
            background: DarkTheme.palette.neutralQuaternary,
          },
        },
      },
      selected && {
        backgroundColor: DarkTheme.palette.themeSecondary,
        selectors: {
          ':hover': {
            background: DarkTheme.palette.themeSecondary,
          },
        },
      },
    ],
    removeButton: [
      {
        background: DarkTheme.palette.neutralQuaternaryAlt,
        color: DarkTheme.palette.neutralDark,
        selectors: {
          ':hover': {
            background: DarkTheme.palette.neutralQuaternary,
            color: DarkTheme.palette.black,
          },
        },
      },
      selected && {
        background: DarkTheme.palette.themeSecondary,
        selectors: {
          ':hover': {
            background: DarkTheme.palette.themeDark,
          },
          ':active': {
            color: DarkTheme.palette.black,
          },
        },
      },
    ],
    subComponentStyles: {
      persona: {
        primaryText: [
          {
            color: DarkTheme.palette.neutralPrimary,
          },
          selected && {
            color: DarkTheme.palette.black,
            selectors: {
              ':hover': {
                color: DarkTheme.palette.black,
              },
            },
          },
        ],
      },
    },
  };
};

export const DarkCustomizations: ICustomizations = {
  settings: {
    theme: DarkTheme,
  },
  scopedSettings: {
    DetailsList: {
      styles: {
        headerWrapper: {
          selectors: {
            '.ms-DetailsHeader': {
              borderColor: DarkTheme.palette.neutralQuaternary,
            },
          },
        },
      },
    },
    DetailsRow: {
      styles: {
        root: {
          borderColor: DarkTheme.palette.neutralQuaternaryAlt,
        },
      },
    },
    VerticalDivider: {
      styles: {
        divider: {
          backgroundColor: DarkTheme.palette.neutralQuaternaryAlt,
        },
        wrapper: {
          Backgroundcolor: DarkTheme.palette.green,
        },
      },
    },
    DocumentCard: {
      styles: {
        root: {
          border: `1px solid ${DarkTheme.palette.neutralQuaternaryAlt}`,
          selectors: {
            '.ms-DocumentCardPreview': {
              borderRight: `1px solid ${DarkTheme.palette.neutralQuaternaryAlt}`,
            },
          },
        },
      },
    },
    DocumentCardPreview: {
      styles: {
        root: {
          borderBottom: `1px solid ${DarkTheme.palette.neutralQuaternaryAlt}`,
          borderRight: `1px solid ${DarkTheme.palette.neutralQuaternaryAlt}`,
        },
      },
    },
    Panel: {
      styles: {
        main: {
          backgroundColor: DarkTheme.palette.neutralLighter,
        },
        closeButton: {
          color: DarkTheme.palette.neutralSecondary,
          selectors: {
            ':hover': {
              color: DarkTheme.palette.neutralPrimary,
            },
          },
        },
      },
    },
    PeoplePickerItem: {
      styles: PeoplePickerItemStyles,
    },
    PersonaCoin: {
      styles: PersonaCoinStyles,
    },
    SpinButton: {
      styles: {
        inputTextSelected: {
          color: DarkTheme.palette.black,
          background: DarkTheme.palette.themePrimary,
        },
      },
    },
  },
};

addVariants(DarkCustomizations.settings.theme);
