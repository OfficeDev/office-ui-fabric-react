import { AnimationVariables, IRawStyle, getTheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunction } from 'office-ui-fabric-react/lib/Utilities';
import { IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { IExampleCardStyles, IExampleCardStyleProps } from './ExampleCard.types';

const globalClassNames = {
  root: 'ExampleCard',
  header: 'ExampleCard-header',
  title: 'ExampleCard-title',
  toggleButtons: 'ExampleCard-toggleButtons',
  themeDropdown: 'ExampleCard-themeDropdown',
  example: 'ExampleCard-example',
  code: 'ExampleCard-code',
  codeButton: 'ExampleCard-codeButton',
  dosAndDonts: 'ExampleCard-dosAndDonts',
  dos: 'ExampleCard-dos',
  donts: 'ExampleCard-donts',
  isActive: 'is-active',
  isCodeVisible: 'is-codeVisible',
  isRightAligned: 'is-right-aligned',
  isScrollable: 'is-scrollable'
};

export const getStyles: IStyleFunction<IExampleCardStyleProps, IExampleCardStyles> = props => {
  const { isRightAligned, isScrollable, isCodeVisible, theme = getTheme() } = props;

  const sharedToggleButtonStyles = {
    marginRight: 0,
    background: 'none',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.neutralTertiary}`,
    borderBottom: 0,
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    padding: '4px 12px',
    minWidth: 100,
    transition: `border ${AnimationVariables.durationValue3} ${AnimationVariables.easeFunction1}`
  };

  const codeButtonActiveStyles: IRawStyle = {
    backgroundColor: theme.palette.neutralDark,
    borderColor: theme.palette.neutralDark,
    selectors: {
      '.ms-Button-icon, .ms-Button-label': {
        color: theme.palette.white
      }
    }
  };

  const dropdownStyles: Partial<IDropdownStyles> = {
    caretDownWrapper: {
      top: '6px'
    },
    title: [
      sharedToggleButtonStyles,
      {
        alignItems: 'center',
        display: 'flex',
        height: 40,
        width: 150,
        selectors: {
          [`&.${globalClassNames.themeDropdown}:focus`]: {
            borderColor: theme.palette.neutralDark,
            outlineColor: theme.palette.neutralDark
          }
        }
      },
      globalClassNames.themeDropdown
    ]
  };

  const buttonStyles: Partial<IButtonStyles> = {
    root: [
      sharedToggleButtonStyles,
      { lineHeight: '1' }, // quotes prevent interpretation as px
      globalClassNames.codeButton
    ],
    label: {
      color: theme.palette.neutralDark,
      borderColor: theme.palette.neutralDark
    },
    rootHovered: codeButtonActiveStyles,
    rootChecked: [codeButtonActiveStyles, globalClassNames.isActive]
  };

  return {
    root: [
      {
        margin: '20px 0'
      },
      globalClassNames.root,
      isCodeVisible && globalClassNames.isCodeVisible
    ],
    header: [
      {
        borderBottom: `1px solid ${theme.palette.neutralTertiary}`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        position: 'relative'
      },
      isCodeVisible && {
        borderColor: theme.palette.neutralDark
      },
      globalClassNames.header
    ],
    title: [
      theme.fonts.medium,
      {
        marginBottom: 10,
        display: 'inline-block'
      },
      globalClassNames.title
    ],
    toggleButtons: [
      theme.fonts.medium,
      {
        display: 'flex',
        float: 'right'
      },
      globalClassNames.toggleButtons
    ],
    example: [
      globalClassNames.example,
      isScrollable && [
        {
          WebkitOverflowScrolling: 'touch',
          maxHeight: '80vh',
          overflowX: 'hidden',
          overflowY: 'auto',
          padding: '20px 4px',
          position: 'relative'
        },
        globalClassNames.isScrollable
      ],
      isRightAligned && [{ textAlign: 'right' }, globalClassNames.isRightAligned]
    ],
    code: [
      {
        backgroundColor: theme.palette.neutralDark,
        overflow: 'hidden',
        selectors: {
          pre: [
            {
              margin: 0,
              overflow: 'auto',
              transition: `all ${AnimationVariables.durationValue3} ${AnimationVariables.easeFunction1}`
            },
            // Collapse code blocks by default
            isCodeVisible ? { maxHeight: 480, minHeight: 120 } : { maxHeight: 0 }
          ],
          code: {
            display: 'block',
            margin: 12,
            fontSize: '14px'
          }
        }
      },
      isCodeVisible && {
        display: 'block',
        marginBottom: 20
      },
      globalClassNames.code
    ],
    dosAndDonts: [
      {
        width: '100%'
      },
      globalClassNames.dosAndDonts
    ],
    dos: [
      {
        width: 'calc(50% - 50px)',
        display: 'inline-block',
        marginRight: 50,
        selectors: {
          h4: [theme.fonts.medium, { color: '#177d3e' }]
        }
      },
      globalClassNames.dos
    ],
    donts: [
      {
        width: 'calc(50%)',
        display: 'inline-block',
        selectors: {
          h4: [theme.fonts.medium, { color: '#a61e22' }]
        }
      },
      globalClassNames.donts
    ],
    subComponentStyles: {
      dropdowns: dropdownStyles,
      codeButtons: buttonStyles
    }
  };
};
