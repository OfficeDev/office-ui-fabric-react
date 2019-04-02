import { IStyle } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities';

export interface IComponentPageSection {
  title: string;
  section: JSX.Element;
}

export interface IComponentDemoPageProps {
  isHeaderVisible?: boolean;
}

export interface IComponentPageProps {
  title: string;
  componentName: string;
  /** Component examples **/
  exampleCards?: JSX.Element;
  /** Array of implementation examples, displayed in the order defined */
  implementationExampleCards?: JSX.Element;
  /** Component properties table(s) **/
  propertiesTables?: JSX.Element;
  bestPractices?: JSX.Element;
  dos?: JSX.Element;
  donts?: JSX.Element;
  overview?: JSX.Element;
  /**
   * Related link
   * @deprecated No longer shown
   */
  related?: JSX.Element;
  isHeaderVisible?: boolean;
  areBadgesVisible?: boolean;
  /** className of the component being documented */
  className?: string;
  /** Status of the component; e.g. keyboard accessible */
  componentStatus?: JSX.Element;
  /** Pass through other sections for ComponentPage */
  otherSections?: IComponentPageSection[];
  /** Includes the feedback section **/
  isFeedbackVisible?: boolean;
  /** Feedback section with GitHub issues **/
  feedback?: JSX.Element;

  /** If true, the component accepts all native props from elements specified in `nativePropsElement` */
  allowNativeProps?: boolean;

  /** Override component name to use in the native props message */
  allowNativePropsForComponentName?: string;

  /**
   * Element(s) whose native props this component accepts (default div).
   * Only relevant if `allowNativeProps` is true.
   */
  nativePropsElement?: string | string[];

  /**
   * Link to the Component root folder on GitHub.
   * Enables 'View On GitHub' and all 'Edit' buttons.
   */
  componentUrl?: string;

  /**
   * Link to the BestPractices markdown file on GitHub.
   * Enables the 'Edit Best Practices' button.
   * Overrides URL from componentUrl.
   */
  editBestPracticesUrl?: string;

  /**
   * Link to the Donts markdown file on GitHub.
   * Enables the 'Edit Don'ts' button.
   * Overrides URL from componentUrl.
   */
  editDontsUrl?: string;

  /**
   * Link to the Dos markdown file on GitHub.
   * Enables the 'Edit Dos' button.
   * Overrides URL from componentUrl.
   */
  editDosUrl?: string;

  /**
   * Link to the Overview markdown file on GitHub.
   * Enables the 'Edit Overview' button.
   * Overrides URL from componentUrl.
   */
  editOverviewUrl?: string;

  /** Optional override styles */
  styles?: IStyleFunctionOrObject<IComponentPageStyleProps, IComponentPageStyles>;
}

export type IComponentPageStyleProps = {};

export interface IComponentPageStyles {
  root: IStyle;
  body: IStyle;
  header: IStyle;
  title: IStyle;
  navigation: IStyle;
  navLink: IStyle;
  subHeading: IStyle;
  overviewSection: IStyle;
  overviewText: IStyle;
  overviewHeading: IStyle;
  usageSection: IStyle;
  usageHeading: IStyle;
  variantsSection: IStyle;
  variantsTitle: IStyle;
  variantsList: IStyle;
  implementationSection: IStyle;
  implementationExamplesSection: IStyle;
  feedbackSection: IStyle;
  bestPracticesSection: IStyle;
  /** Used on wrapper for the dos/don'ts sections */
  doSections: IStyle;
  /** Used on each of the dos and don'ts sections */
  dosDontsSection: IStyle;
  dosDontsHeading: IStyle;
  dosDontsLine: IStyle;
  dosLine: IStyle;
  dontsSection: IStyle;
  dontsLine: IStyle;
  statusSection: IStyle;
}
