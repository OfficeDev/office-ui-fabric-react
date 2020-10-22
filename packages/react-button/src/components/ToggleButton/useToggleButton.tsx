import * as React from 'react';
import { useButton } from '../Button/useButton';
import { ToggleButtonProps } from './ToggleButton.types';
import { useChecked } from './useChecked';

export const useToggleButton = (props: ToggleButtonProps, ref: React.Ref<HTMLElement>) => {
  const buttonDefinition = useButton(props, ref);

  useChecked(buttonDefinition.state as ToggleButtonProps);

  return buttonDefinition;
};
