import { MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

export type FlatOrPromise<T> = T | Promise<T>;
export type FunctionCallback<T> = () => FlatOrPromise<T>;

export enum LoadingTheme {
  General,
  OnPageLoad,
  OnL2ContentLoad,
  OnPrimaryButtonClick,
  OnSecondaryButtonClick,
  OnPivotItemLoad
}

export enum LoadingType {
  None,
  Page,
  Workflow,
  Inline,
  Content
}

export enum ConfirmationStatus {
  None,
  Success,
  Warning,
  Failed
}

export interface IQuickAction {
  /**
   * Hide the quick action
   */
  hide?: boolean;

  /**
   * Fabric icon name
   */
  icon: string;

  /**
   * Name of the action
   */
  actionName: string;

  /**
   * Callback on click
   */
  onClick: () => void;
}

export interface IDetailPanelHeaderProps {
  /**
   * Title of the header
   */
  title: string;

  /**
   * Set weather its a Persona type header
   */
  personaHeader?: boolean;

  /**
   * Show status indicator
   */
  statusIndicator?: boolean;

  /**
   * Quick action configuration
   */
  quickActions?: IQuickAction[];

  /**
   * Status string
   */
  status?: string;
}

export interface IDetailPanelLoadingProps {
  /**
   * Loading animation type
   */
  loadingType?: LoadingType;

  /**
   * Message to display under load spiner(only)
   */
  message?: string;
}

export interface IDetailPanelMessageBannerProps {
  /**
   * Type of message bar
   */
  messageType?: MessageBarType;

  /**
   * Message to display
   */
  message?: string;

  /**
   * On dismiss action callback
   */
  onDismissAction?: () => FunctionCallback<void>;
}

export interface IDetailPanelBaseProps {
  /**
   * Callback on detail panel page load before render the header and content
   * Reject with @type {IDetailPanelErrorResult} to set the error state message bar
   */
  onPageLoad?: FunctionCallback<void>;

  /**
   * Call back on getting the customized loading animation to override the default
   * spinner or shimmer
   * if the return vaule is @type {null} or @type {undefined}, a default load animation will be applied
   */
  onGetLoadingAnimation?: (loadingTheme: LoadingTheme, themeId?: string | number) => JSX.Element | null;

  /**
   * Main content header props
   */
  mainHeader: IDetailPanelHeaderProps;

  /**
   * Content to display in the main area
   * @returns {JSX.Element} for general render
   * @returns {IDetailPanelPivotBodyProps} for Pivot detail panel
   */
  mainContent: JSX.Element | IDetailPanelPivotBodyProps;

  /**
   * Main action bar of the detail panel
   */
  mainActionBar?: IDetailPanelActionBarProps;

  /**
   * Current selected L2 Id
   */
  currentL2Id?: string | number;

  /**
   * On Get the L2 header props
   */
  onGetL2Header?: (l2Id: string | number) => IDetailPanelHeaderProps;

  /**
   * On Get the L2 content element call back
   * Reject with @type {IDetailPanelErrorResult} to set the error state message bar
   */
  onGetL2Content?: (l2Id: string | number) => FlatOrPromise<JSX.Element>;

  /**
   * Get the current action bar props
   */
  onGetL2ActionBar?: (l2Id: string | number) => IDetailPanelActionBarProps;

  /**
   * On click the back on current L2
   */
  onL2BackClick?: (l2Id: string | number) => void;

  /**
   * Callback on close the detail panel
   */
  onDetailPanelDimiss?: () => void;
}

export interface IBaseContainerProps {
  /**
   * Main content header props
   */
  header: IDetailPanelHeaderProps;

  /**
   * Message banner settings
   */
  messageBanner?: IDetailPanelMessageBannerProps;

  /**
   * Loading element
   */
  loadingElement?: JSX.Element;

  /**
   * Set the loading element inline
   */
  inlineLoading?: boolean;

  /**
   * Content to display in the main area
   */
  mainContent?: JSX.Element;

  /**
   * Footer to display if any
   */
  actionBar?: IDetailPanelActionBarProps;

  /**
   * On dismiss the detail panel
   */
  onDismiss: () => void;

  /**
   * On back action click
   */
  onBack?: () => void;
}

export interface IBodyContainerBaseProps {}

export interface IDetailPanelBaseCommonAction {
  /**
   * Set loading animation on detail panel
   */
  onSetLoadingAnimation?: (loadingTheme?: LoadingTheme, message?: string, forceInline?: boolean) => void;

  /**
   * Set the message banner display on detail panel
   */
  onSetMessageBanner?: (messageBanner?: IDetailPanelMessageBannerProps) => void;

  /**
   * Set the action bar props
   */
  onSetActionBar?: (actionBar: IDetailPanelActionBarProps) => void;

  /**
   * Call back on getting the customized loading animation to override the default
   * spinner or shimmer
   * if the return vaule is @type {null} or @type {undefined}, a default load animation will be applied
   */
  onGetLoadingAnimation?: (loadingTheme: LoadingTheme, themeId?: string | number) => JSX.Element | null;
}

export interface IDetailPanelErrorResult {
  /**
   * Override page title on initial load or L2 content load fail
   */
  pageTitle?: string;

  /**
   * Message bar display setting
   */
  messageBannerSetting: IDetailPanelMessageBannerProps;
}

export interface IDetailPanelActionResult {
  messageBanner?: IDetailPanelMessageBannerProps;
  confirmationPage?: any;
}

export interface IDetailPanelActionBarProps {
  submittingMessage?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  linkHref?: string;
  linkText?: string;
  onSecondaryAction?: () => FlatOrPromise<IDetailPanelActionResult | void>;
  onPrimaryAction?: () => FlatOrPromise<IDetailPanelActionResult | void>;
  onLinkAction?: () => void;
  primaryActionInlineSpinner?: boolean;
  secondaryActionInlineSpinner?: boolean;
  onPrimaryActionMessage?: string;
  onSecondaryActionMessage?: string;
}

export interface IDetailInfoTileProps {
  tileId?: string | number;
  title: string;
  message?: string;
  actionText?: string;
  onAction?: (tileId?: string | number) => void;
}

export interface IDetailPanelPivotItemProps {
  onContentLoad?: FunctionCallback<JSX.Element | IDetailInfoTileProps[]>;
  content?: JSX.Element | IDetailInfoTileProps[];
}

export interface IDetailPanelPivotBodyItem extends IDetailPanelPivotItemProps {
  headerText: string;
  itemKey?: string;
}

export interface IDetailPanelPivotBodyProps {
  selectedPivotKey?: string;
  onPivotLinkClick?: (key: string) => void;
  items: IDetailPanelPivotBodyItem[];
}

export interface IDetailPanelProps extends IDetailPanelBaseProps {}
