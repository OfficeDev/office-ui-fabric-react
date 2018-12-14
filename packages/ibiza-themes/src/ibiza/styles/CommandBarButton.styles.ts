import { getFocusStyle } from 'office-ui-fabric-react/lib/Styling';
import { IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { IExtendedTheme } from '../IExtendedTheme';

// TODO: "any" is used here to get around "is using xxx but cannot be named" TS error. Should be able to remove
//        this 'any' once we upgrade to TS3.1+
// tslint:disable-next-line:no-any
export const CommandBarButtonStyles = (extendedTheme: IExtendedTheme): Partial<IButtonStyles> => {
  return {
    root: {
      ...getFocusStyle(extendedTheme.theme, 2)
    }
  };
};
