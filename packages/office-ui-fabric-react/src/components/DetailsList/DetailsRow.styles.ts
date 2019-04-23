import { IDetailsRowStyleProps, IDetailsRowStyles, ICellStyleProps } from './DetailsRow.types';
import {
  AnimationClassNames,
  FontSizes,
  HighContrastSelector,
  IStyle,
  getFocusStyle,
  getGlobalClassNames,
  FontWeights
} from '../../Styling';
import { CHECK_CELL_WIDTH } from './DetailsRowCheck.styles';
import { IsFocusVisibleClassName } from '../../Utilities';

const GlobalClassNames = {
  root: 'ms-DetailsRow',
  compact: 'ms-DetailsList--Compact', // TODO: in Fabric 7.0 lowercase the 'Compact' for consistency across other components.
  cell: 'ms-DetailsRow-cell',
  cellCheck: 'ms-DetailsRow-cellCheck',
  cellMeasurer: 'ms-DetailsRow-cellMeasurer',
  listCellFirstChild: 'ms-List-cell:first-child',
  isFocusable: "[data-is-focusable='true']",
  isContentUnselectable: 'is-contentUnselectable',
  isSelected: 'is-selected',
  isCheckVisible: 'is-check-visible',
  isRowHeader: 'is-row-header',
  fields: 'ms-DetailsRow-fields'
};

export const DEFAULT_CELL_STYLE_PROPS: ICellStyleProps = {
  cellLeftPadding: 12,
  cellRightPadding: 8,
  cellExtraRightPadding: 24
};

// Source of default row heights to share.
export const DEFAULT_ROW_HEIGHTS = {
  rowHeight: 42,
  compactRowHeight: 32
};

// Constant values
let values = {
  ...DEFAULT_ROW_HEIGHTS,
  rowVerticalPadding: 11,
  compactRowVerticalPadding: 6,
  rowShimmerLineHeight: 7,
  rowShimmerIconPlaceholderHeight: 16,
  rowShimmerVerticalBorder: 0,
  compactRowShimmerVerticalBorder: 0
};

// Computed Values
values = {
  ...values,
  ...{
    rowShimmerVerticalBorder: (values.rowHeight - values.rowShimmerLineHeight) / 2,
    compactRowShimmerVerticalBorder: (values.compactRowHeight - values.rowShimmerLineHeight) / 2
  }
};

export const getStyles = (props: IDetailsRowStyleProps): IDetailsRowStyles => {
  const {
    theme,
    isSelected,
    canSelect,
    droppingClassName,
    anySelected,
    isCheckVisible,
    checkboxCellClassName,
    compact,
    className,
    cellStyleProps = DEFAULT_CELL_STYLE_PROPS
  } = props;

  const { neutralPrimary, white, neutralSecondary, neutralLighter, neutralLight, neutralDark, neutralQuaternaryAlt } = theme.palette;
  const { focusBorder } = theme.semanticColors;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  const colors = {
    // Default
    defaultHeaderText: neutralPrimary,
    defaultMetaText: neutralSecondary,
    defaultBackground: white,

    // Default Hover
    defaultHoverHeaderText: neutralDark,
    defaultHoverMetaText: neutralPrimary,
    defaultHoverBackground: neutralLighter,

    // Selected
    selectedHeaderText: neutralDark,
    selectedMetaText: neutralPrimary,
    selectedBackground: neutralLight,

    // Selected Hover
    selectedHoverHeaderText: neutralDark,
    selectedHoverMetaText: neutralPrimary,
    selectedHoverBackground: neutralQuaternaryAlt,

    // Focus
    focusHeaderText: neutralDark,
    focusMetaText: neutralPrimary,
    focusBackground: neutralLight,
    focusHoverBackground: neutralQuaternaryAlt
  };

  const shimmerRightBorderStyle = `${cellStyleProps.cellRightPadding * 4}px solid ${colors.defaultBackground}`;
  const shimmerLeftBorderStyle = `${cellStyleProps.cellLeftPadding}px solid ${colors.defaultBackground}`;

  // Selected row styles
  const selectedStyles: IStyle = [
    getFocusStyle(theme, { inset: -1, borderColor: focusBorder, outlineColor: white }),
    classNames.isSelected,
    {
      color: colors.selectedMetaText,
      background: colors.selectedBackground,
      borderBottom: `1px solid ${white}`,
      selectors: {
        '&:before': {
          position: 'absolute',
          display: 'block',
          top: -1,
          height: 1,
          bottom: 0,
          left: 0,
          right: 0,
          content: '',
          borderTop: `1px solid ${white}`
        },

        // Selected State hover
        '&:hover': {
          background: colors.selectedHoverBackground,
          color: colors.selectedHoverMetaText,
          selectors: {
            // Selected State hover meta cell
            [`.${classNames.cell}`]: {
              selectors: {
                [HighContrastSelector]: {
                  color: 'HighlightText',
                  selectors: {
                    '> a': {
                      color: 'HighlightText'
                    }
                  }
                }
              }
            },

            // Selected State hover Header cell
            [`.${classNames.isRowHeader}`]: {
              color: colors.selectedHoverHeaderText,
              selectors: {
                [HighContrastSelector]: {
                  color: 'HighlightText'
                }
              }
            }
          }
        },

        // Focus state
        '&:focus': {
          background: colors.focusBackground,
          selectors: {
            // Selected State hover meta cell
            [`.${classNames.cell}`]: {
              color: colors.focusMetaText,
              selectors: {
                [HighContrastSelector]: {
                  color: 'HighlightText',
                  selectors: {
                    '> a': {
                      color: 'HighlightText'
                    }
                  }
                }
              }
            },

            // Row header cell
            [`.${classNames.isRowHeader}`]: {
              color: colors.focusHeaderText,
              selectors: {
                [HighContrastSelector]: {
                  color: 'HighlightText'
                }
              }
            }
          }
        },

        // Focus and hover state
        '&:focus:hover': {
          background: colors.focusHoverBackground
        }
      }
    }
  ];

  const cannotSelectStyles: IStyle = [
    classNames.isContentUnselectable,
    {
      userSelect: 'none',
      cursor: 'default'
    }
  ];

  const rootCompactStyles: IStyle = {
    minHeight: values.compactRowHeight,
    border: 0
  };

  const cellCompactStyles: IStyle = {
    minHeight: values.compactRowHeight,
    paddingTop: values.compactRowVerticalPadding,
    paddingBottom: values.compactRowVerticalPadding,
    paddingLeft: `${cellStyleProps.cellLeftPadding}px`,
    selectors: {
      // Masking the running shimmer background with borders
      [`&$shimmer`]: {
        padding: 0,
        borderLeft: shimmerLeftBorderStyle,
        borderRight: shimmerRightBorderStyle,
        borderTop: `${values.compactRowShimmerVerticalBorder}px solid ${colors.defaultBackground}`,
        borderBottom: `${values.compactRowShimmerVerticalBorder}px solid ${colors.defaultBackground}`
      },

      // Masking the running shimmer background with borders when it's an Icon placeholder
      [`&$shimmerIconPlaceholder`]: {
        borderRight: `${cellStyleProps.cellRightPadding}px solid ${colors.defaultBackground}`,
        borderBottom: `${(values.compactRowHeight - values.rowShimmerIconPlaceholderHeight) / 2}px solid ${colors.defaultBackground}`,
        borderTop: `${(values.compactRowHeight - values.rowShimmerIconPlaceholderHeight) / 2}px solid ${colors.defaultBackground}`
      }
    }
  };

  const defaultCellStyles: IStyle = [
    getFocusStyle(theme, { inset: -1 }),
    classNames.cell,
    {
      display: 'inline-block',
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: values.rowHeight,
      verticalAlign: 'top',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingTop: values.rowVerticalPadding,
      paddingBottom: values.rowVerticalPadding,
      paddingLeft: `${cellStyleProps.cellLeftPadding}px`,
      selectors: {
        '& > button': {
          maxWidth: '100%'
        },

        [classNames.isFocusable!]: getFocusStyle(theme, { inset: -1, borderColor: neutralSecondary, outlineColor: white }),

        '&$shimmer': {
          padding: 0,
          borderLeft: shimmerLeftBorderStyle,
          borderRight: shimmerRightBorderStyle,
          borderTop: `${values.rowShimmerVerticalBorder}px solid ${colors.defaultBackground}`,
          borderBottom: `${values.rowShimmerVerticalBorder}px solid ${colors.defaultBackground}`
        },

        '&$shimmerIconPlaceholder': {
          borderRight: `${cellStyleProps.cellRightPadding}px solid ${colors.defaultBackground}`,
          borderBottom: `${(values.rowHeight - values.rowShimmerIconPlaceholderHeight) / 2}px solid ${colors.defaultBackground}`,
          borderTop: `${(values.rowHeight - values.rowShimmerIconPlaceholderHeight) / 2}px solid ${colors.defaultBackground}`
        }
      }
    },

    isSelected && {
      selectors: {
        [HighContrastSelector]: {
          background: 'Highlight',
          color: 'HighlightText',
          MsHighContrastAdjust: 'none',
          selectors: {
            a: {
              color: 'HighlightText'
            }
          }
        }
      }
    },

    compact && cellCompactStyles
  ];

  return {
    root: [
      classNames.root,
      AnimationClassNames.fadeIn400,
      droppingClassName,
      theme.fonts.xSmall,
      isCheckVisible && classNames.isCheckVisible,
      getFocusStyle(theme, { borderColor: focusBorder, outlineColor: white }),
      {
        borderBottom: `1px solid ${neutralLighter}`,
        background: colors.defaultBackground,
        color: colors.defaultMetaText,
        display: 'inline-flex', // This ensures that the row always tries to consume is minimum width and does not compress.
        minWidth: '100%',
        minHeight: values.rowHeight,
        whiteSpace: 'nowrap',
        padding: 0,
        boxSizing: 'border-box',
        verticalAlign: 'top',
        textAlign: 'left',
        selectors: {
          [`.${classNames.listCellFirstChild} &:before`]: {
            display: 'none'
          },

          '&:hover': {
            background: colors.defaultHoverBackground,
            color: colors.defaultHoverMetaText,
            selectors: {
              [`.${classNames.isRowHeader}`]: {
                color: colors.defaultHoverHeaderText
              }
            }
          },

          '&:hover $check': {
            opacity: 1
          },

          [`.${IsFocusVisibleClassName} &:focus $check`]: {
            opacity: 1
          }
        }
      },
      isSelected && selectedStyles,
      !canSelect && cannotSelectStyles,
      compact && rootCompactStyles,
      className
    ],
    cellUnpadded: [
      {
        paddingRight: `${cellStyleProps.cellRightPadding}px`
      }
    ],
    cellPadded: [
      {
        paddingRight: `${cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding}px`,
        selectors: {
          '&.$checkCell': {
            paddingRight: 0
          }
        }
      }
    ],

    cell: defaultCellStyles,

    cellMeasurer: [
      classNames.cellMeasurer,
      {
        overflow: 'visible',
        whiteSpace: 'nowrap'
      }
    ],
    checkCell: [
      defaultCellStyles,
      classNames.cellCheck,
      checkboxCellClassName,
      {
        padding: 0,
        // Ensure that the check cell covers the top border of the cell.
        // This ensures the click target does not leave a spot which would
        // cause other items to be deselected.
        paddingTop: 1,
        marginTop: -1,
        flexShrink: 0
      }
    ],
    checkCover: [
      {
        position: 'absolute',
        top: -1,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'none'
      },

      anySelected && {
        display: 'block'
      }
    ],
    fields: [
      classNames.fields,
      {
        display: 'flex',
        alignItems: 'stretch'
      }
    ],
    isRowHeader: [
      classNames.isRowHeader,
      {
        color: colors.defaultHeaderText,
        fontSize: FontSizes.small
      },
      isSelected && {
        color: colors.selectedHeaderText,
        fontWeight: FontWeights.semibold,
        selectors: {
          [HighContrastSelector]: {
            color: 'HighlightText'
          }
        }
      }
    ],
    isMultiline: [
      defaultCellStyles,
      {
        whiteSpace: 'normal',
        wordBreak: 'break-word',
        textOverflow: 'clip'
      }
    ],
    shimmer: [],
    shimmerIconPlaceholder: [],
    shimmerLeftBorder: [
      {
        // 48px to take into account the checkbox of items if present.
        borderLeft: `${CHECK_CELL_WIDTH}px solid ${colors.defaultBackground}`
      }
    ],
    shimmerBottomBorder: [
      {
        // 1px to take into account the border-bottom when items replace shimmer lines and in default state.
        borderBottom: `1px solid ${colors.defaultBackground}`
      }
    ],
    check: []
  };
};
