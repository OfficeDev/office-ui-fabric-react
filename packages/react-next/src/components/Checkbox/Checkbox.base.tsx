import * as React from 'react';
import { useId, useControllableValue, useMergedRefs } from '@uifabric/react-hooks';
import { mergeAriaAttributeValues, warnMutuallyExclusive, useFocusRects } from '../../Utilities';
import { Icon } from '../../Icon';
import { ICheckboxProps, ICheckboxStyles } from './Checkbox.types';
import { KeytipData } from '../../KeytipData';
import { useCheckboxClasses } from './useCheckboxClasses';

export const CheckboxBase = React.forwardRef((props: ICheckboxProps, forwardedRef: React.Ref<HTMLDivElement>) => {
  const {
    disabled,
    inputProps,
    name,
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    checkmarkIconProps,
    ariaPositionInSet,
    ariaSetSize,
    keytipProps,
    title,
    label,
    onChange,
  } = props;

  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const mergedRootRefs = useMergedRefs(rootRef, forwardedRef);
  const checkBox = React.useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useControllableValue(props.checked, props.defaultChecked, onChange);
  const [isIndeterminate, setIsIndeterminate] = useControllableValue(props.indeterminate, props.defaultIndeterminate);

  useFocusRects(rootRef);
  useDebugWarning(props);
  useComponentRef(props, isChecked, isIndeterminate, checkBox);

  const id = useId('checkbox-', props.id);

  // TODO: this should be called during `compose`
  const classNames: { [key in keyof ICheckboxStyles]: string } = useCheckboxClasses({
    ...props,
    indeterminate: isIndeterminate,
    checked: isChecked,
  });

  const onRenderLabel = (): JSX.Element | null => {
    return label ? (
      <span aria-hidden="true" className={classNames.text} title={title}>
        {label}
      </span>
    ) : null;
  };

  const _onChange = (ev: React.ChangeEvent<HTMLElement>): void => {
    if (!isIndeterminate) {
      setIsChecked(!isChecked, ev);
    } else {
      // If indeterminate, clicking the checkbox *only* removes the indeterminate state (or if
      // controlled, lets the consumer know to change it by calling onChange). It doesn't
      // change the checked state.
      setIsChecked(!!isChecked, ev);
      setIsIndeterminate(false);
    }
  };

  return (
    <KeytipData keytipProps={keytipProps} disabled={disabled}>
      {(keytipAttributes: any): JSX.Element => (
        <div className={classNames.root} title={title} ref={mergedRootRefs}>
          <input
            type="checkbox"
            {...inputProps}
            data-ktp-execute-target={keytipAttributes['data-ktp-execute-target']}
            checked={!!isChecked}
            disabled={disabled}
            className={classNames.input}
            ref={checkBox}
            name={name}
            id={id}
            title={title}
            onChange={_onChange}
            onFocus={inputProps?.onFocus}
            onBlur={inputProps?.onBlur}
            aria-disabled={disabled}
            aria-label={ariaLabel || label}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={mergeAriaAttributeValues(ariaDescribedBy, keytipAttributes['aria-describedby'])}
            aria-posinset={ariaPositionInSet}
            aria-setsize={ariaSetSize}
            aria-checked={isIndeterminate ? 'mixed' : isChecked ? 'true' : 'false'}
          />
          <label className={classNames.label} htmlFor={id}>
            <div className={classNames.checkbox} data-ktp-target={keytipAttributes['data-ktp-target']}>
              <Icon iconName="CheckMark" {...checkmarkIconProps} className={classNames.checkmark} />
            </div>
            {(props.onRenderLabel || onRenderLabel)(props, onRenderLabel)}
          </label>
        </div>
      )}
    </KeytipData>
  );
});

CheckboxBase.displayName = 'CheckboxBase';
CheckboxBase.defaultProps = {
  boxSide: 'start',
};

function useDebugWarning(props: ICheckboxProps) {
  if (process.env.NODE_ENV !== 'production') {
    // This is a build-time conditional that will be constant at runtime
    // tslint:disable-next-line:react-hooks-nesting
    React.useEffect(() => {
      warnMutuallyExclusive('Checkbox', props, {
        checked: 'defaultChecked',
        indeterminate: 'defaultIndeterminate',
      });
    }, []);
  }
}

function useComponentRef(
  props: ICheckboxProps,
  isChecked: boolean | undefined,
  isIndeterminate: boolean | undefined,
  checkBox: React.RefObject<HTMLInputElement>,
) {
  React.useImperativeHandle(
    props.componentRef,
    () => ({
      get checked() {
        return !!isChecked;
      },
      get indeterminate() {
        return !!isIndeterminate;
      },
      focus() {
        if (checkBox.current) {
          checkBox.current.focus();
        }
      },
    }),
    [isChecked, isIndeterminate],
  );
}
