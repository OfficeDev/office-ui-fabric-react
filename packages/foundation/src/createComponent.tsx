import * as React from 'react';

export interface IThemeProps<TTheme> {
  theme: TTheme;
}

// Impose minimal structure and functional shape required for createComponent while allowing
//  consumers to define the shape of theming and styling.
export type IStyleFunction<TTheme, TStylesProps extends IThemeProps<TTheme>, TStyles> = (
  props: TStylesProps
) => TStyles;
export type TStateProps<TProps> = TProps & { view: (props: TProps) => JSX.Element };
export type TStylesProp<TTheme, TProps extends IThemeProps<TTheme>, TStyles> =
  | IStyleFunction<TTheme, TProps, TStyles>
  | TStyles;
export type TViewProps<TProps, TStylesSet> = TProps & { styles: TStylesSet };

export interface IAugmentations<TUserProps extends IThemeProps<TTheme>, TStyles, TStyleSet, TTheme> {
  [scope: string]: IComponentOptions<TUserProps, TStyles, TStyleSet, TTheme>;
}

export interface IComponentOptions<TUserProps, TStyles, TStyleSet, TTheme> {
  scope: string;
  state?: React.ComponentType<TStateProps<TUserProps>>;
  styles: TStylesProp<TTheme, TUserProps & IThemeProps<TTheme>, TStyles>;
  view: React.ComponentType<TViewProps<TUserProps, TStyleSet>>;
}

export interface IStylingProviders<TTheme, TStyles, TStyleSet> {
  getTheme: () => TTheme;
  mergeStyleSets: (styles: TStyles) => TStyleSet;
}

// TODO: what is our augmentation story and uses cases?
// TODO: if merged, figure out typing. could maybe provide a template accessor to prevent 'any' type arg
// tslint:disable-next-line:no-any
const _augmentations: IAugmentations<any, any, any, any> = {};

// Helper function to tie them together.
export function createComponentWithProviders<TProps, TStyles, TStyleSet, TTheme>(
  options: IComponentOptions<TProps, TStyles, TStyleSet, TTheme>,
  providers: IStylingProviders<TTheme, TStyles, TStyleSet>
): React.StatelessComponent<TProps> {
  const result: React.StatelessComponent<TProps> = (userProps: TProps) => {
    const augmented: IComponentOptions<TProps, TStyles, TStyleSet, TTheme> = _augmentations[options.scope] || {};
    const StateComponent = augmented.state || options.state;
    const ViewComponent = augmented.view || options.view;
    const getStyles: TStylesProp<TTheme, TProps & IThemeProps<TTheme>, TStyles> = augmented.styles || options.styles;
    const theme = providers.getTheme();

    ViewComponent.displayName = ViewComponent.displayName || options.scope + 'View';
    const content = (processedProps: TProps) => {
      let styles: TStyles | undefined = undefined;

      if (typeof getStyles === 'function') {
        // TODO: TS issues with spreading generic (even if that generic extends object)
        //       https://github.com/Microsoft/TypeScript/issues/13557
        //       workaround: Object.assign usage
        // styles = (getStyles as IStyleFunction<TTheme, TProps & IThemeProps<TTheme>, TStyles>)({ theme, ...(processedProps as {}) });
        const mergedProps: TProps & IThemeProps<TTheme> = Object.assign({}, { theme }, userProps);
        styles = (getStyles as IStyleFunction<TTheme, TProps & IThemeProps<TTheme>, TStyles>)(mergedProps);
      } else {
        styles = getStyles as TStyles;
      }

      return <ViewComponent {...processedProps} styles={providers.mergeStyleSets(styles)} />;
    };

    return !!StateComponent ? <StateComponent {...userProps} view={content} /> : content(userProps);
  };

  result.displayName = options.scope;

  return result;
}

// Helper function to augment existing components that have been created.
export function augmentComponent<TProps, TStyles, TStyleSet, TTheme>(
  options: IComponentOptions<TProps, TStyles, TStyleSet, TTheme>
): void {
  _augmentations[options.scope] = {
    ..._augmentations[options.scope],
    ...options
  };
}
