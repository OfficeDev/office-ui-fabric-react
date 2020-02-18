import { IStyle } from './IStyle';
import { IStyleFunctionOrObject, IStyleFunction } from './IStyleFunction';

export type Diff<T extends keyof any, U extends keyof any> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];

/**
 * {@docCategory Omit}
 */
export type Omit<U, K extends keyof U> = Pick<U, Diff<keyof U, K>>;

/**
 * Helper function whose role is supposed to express that regardless if T is a style object or style function,
 * it will always map to a style function.
 */
export type __MapToFunctionType<T> = Extract<T, Function> extends never ? (...args: any[]) => Partial<T> : Extract<T, Function>;

/**
 * A style set is a dictionary of display areas to IStyle objects.
 * It may optionally contain style functions for sub components in the special `subComponentStyles`
 * property.
 */
export type IStyleSet<TStyleSet extends IStyleSet<TStyleSet>> = { [P in keyof Omit<TStyleSet, 'subComponentStyles'>]: IStyle } & {
  subComponentStyles?: { [P in keyof TStyleSet['subComponentStyles']]: IStyleFunctionOrObject<any, IStyleSet<any>> };
};

/**
 * A concatenated style set differs from `IStyleSet` in that subComponentStyles will always be a style function.
 */
export type IConcatenatedStyleSet<TStyleSet extends IStyleSet<TStyleSet>> = {
  [P in keyof Omit<TStyleSet, 'subComponentStyles'>]: IStyle;
} & {
  subComponentStyles?: { [P in keyof TStyleSet['subComponentStyles']]: IStyleFunction<any, IStyleSet<any>> };
};

/**
 * A processed style set is one which the set of styles associated with each area has been converted
 * into a class name. Additionally, all subComponentStyles are style functions.
 */
export type IProcessedStyleSet<TStyleSet extends IStyleSet<TStyleSet>> = { [P in keyof Omit<TStyleSet, 'subComponentStyles'>]: string } & {
  subComponentStyles: {
    [P in keyof TStyleSet['subComponentStyles']]: __MapToFunctionType<
      TStyleSet['subComponentStyles'] extends infer J ? (P extends keyof J ? J[P] : never) : never
    >;
  };
};
