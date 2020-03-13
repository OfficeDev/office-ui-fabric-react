import { Accessibility } from '@fluentui/react-experimental';
import * as keyboardKey from 'keyboard-key';

const repliesButtonBehavior: Accessibility = () => ({
  keyActions: {
    root: {
      performClick: {
        keyCombinations: [{ keyCode: keyboardKey.Enter }, { keyCode: keyboardKey.Spacebar }]
      }
    }
  }
});
export default repliesButtonBehavior;
