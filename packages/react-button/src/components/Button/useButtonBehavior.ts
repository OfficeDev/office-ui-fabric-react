import { buttonBehavior } from '@fluentui/accessibility';
import { getCode } from '@fluentui/keyboard-key';
import { ButtonProps, ButtonState } from './Button.types';

export const useButtonBehavior = (props: ButtonProps, ref: React.RefObject<HTMLElement>): Partial<ButtonState> => {
  const { disabled, loading, onClick, onKeyDown } = props;

  const { attributes, keyActions } = buttonBehavior({ as: ref.current?.tagName || 'button', disabled, loading });

  let _onKeyDown = onKeyDown;

  const keyCombinations = keyActions?.root?.performClick?.keyCombinations;
  if (keyCombinations) {
    _onKeyDown = (ev: React.KeyboardEvent<HTMLButtonElement>) => {
      if (onKeyDown) {
        onKeyDown(ev);
      }

      if (onClick) {
        const eventCode = getCode(ev);
        for (const keyCombination of keyCombinations) {
          if (eventCode === keyCombination.keyCode) {
            onClick(ev);
          }
        }
      }
    };
  }

  return { ...attributes?.root, onKeyDown: _onKeyDown };
};
