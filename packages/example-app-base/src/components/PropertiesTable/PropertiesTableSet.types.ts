export interface IPropertiesTableSetProps {
  /**
   * Component name. Assumes component resides in `components/[name]` folder
   * and properties are at `components/[name]/[name].types.ts`.
   */
  componentName?: string;

  /**
   * If provided, overrides componentName usage to derive the path to the props.
   * Example: `utilities/focus/`
   */
  componentPath?: string;

  /**
   * If specified, will only render interfaces and enums specified here.
   */
  renderOnly?: string[];

  /**
   * A set of pre-resolved source code.
   */
  sources?: string[];
}
