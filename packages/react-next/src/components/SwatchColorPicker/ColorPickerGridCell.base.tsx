import * as React from 'react';
import { ITheme, mergeStyleSets } from '../../Styling';
import { classNamesFunction, memoizeFunction } from '../../Utilities';
import { getColorFromString } from 'office-ui-fabric-react/lib/utilities/color/getColorFromString';
import { GridCell } from 'office-ui-fabric-react/lib/utilities/grid/GridCell';
import { IGridCellProps } from 'office-ui-fabric-react/lib/utilities/grid/GridCell.types';
import { getStyles as getActionButtonStyles } from 'office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.styles';
import { IButtonClassNames } from 'office-ui-fabric-react/lib/components/Button/BaseButton.classNames';
import {
  IColorCellProps,
  IColorPickerGridCellProps,
  IColorPickerGridCellStyleProps,
  IColorPickerGridCellStyles,
} from './ColorPickerGridCell.types';

const getColorPickerGridCellButtonClassNames = memoizeFunction(
  (
    theme: ITheme,
    className: string,
    variantClassName: string,
    iconClassName: string | undefined,
    menuIconClassName: string | undefined,
    disabled: boolean,
    checked: boolean,
    expanded: boolean,
    isSplit: boolean | undefined,
  ): IButtonClassNames => {
    const styles = getActionButtonStyles(theme);
    return mergeStyleSets({
      root: [
        'ms-Button',
        styles.root,
        variantClassName,
        className,
        checked && ['is-checked', styles.rootChecked],
        disabled && ['is-disabled', styles.rootDisabled],
        !disabled &&
          !checked && {
            selectors: {
              ':hover': styles.rootHovered,
              ':focus': styles.rootFocused,
              ':active': styles.rootPressed,
            },
          },
        disabled && checked && [styles.rootCheckedDisabled],
        !disabled &&
          checked && {
            selectors: {
              ':hover': styles.rootCheckedHovered,
              ':active': styles.rootCheckedPressed,
            },
          },
      ],
      flexContainer: ['ms-Button-flexContainer', styles.flexContainer],
    });
  },
);

const getClassNames = classNamesFunction<IColorPickerGridCellStyleProps, IColorPickerGridCellStyles>();

class ColorCell extends GridCell<IColorCellProps, IGridCellProps<IColorCellProps>> {}

export const ColorPickerGridCellBase = (props: IColorPickerGridCellProps) => {
  const {
    item,
    // tslint:disable-next-line:deprecation
    idPrefix = props.id,
    selected = false,
    disabled = false,
    styles,
    theme,
    circle = true,
    color,
    onClick,
    onHover,
    onFocus,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onWheel,
    onKeyDown,
    height,
    width,
    borderWidth,
  } = props;

  // Validate if the cell's color is white or not to apply whiteCell style
  const isWhiteCell = (inputColor: string | undefined): boolean => {
    const currentColor = getColorFromString(inputColor!);
    return currentColor!.hex === 'ffffff';
  };

  const classNames: { [key in keyof IColorPickerGridCellStyles]: string } = getClassNames(styles!, {
    theme: theme!,
    disabled,
    selected,
    circle,
    isWhite: isWhiteCell(color),
    height,
    width,
    borderWidth,
  });

  // Render the core of a color cell
  const onRenderColorOption = (colorOption: IColorCellProps): JSX.Element => {
    // Build an SVG for the cell with the given shape and color properties
    return (
      <svg className={classNames.svg} viewBox="0 0 20 20" fill={getColorFromString(colorOption.color as string)!.str}>
        {props.circle ? <circle cx="50%" cy="50%" r="50%" /> : <rect width="100%" height="100%" />}
      </svg>
    );
  };

  return (
    <ColorCell
      item={item}
      id={`${idPrefix}-${item.id}-${item.index}`}
      key={item.id}
      disabled={disabled}
      role={'gridcell'}
      onRenderItem={onRenderColorOption}
      selected={selected}
      onClick={onClick}
      onHover={onHover}
      onFocus={onFocus}
      label={item.label}
      className={classNames.colorCell}
      getClassNames={getColorPickerGridCellButtonClassNames}
      index={item.index}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onWheel={onWheel}
      onKeyDown={onKeyDown}
    />
  );
};
