import * as React from 'react';
import {
  LoadingType,
  LoadingTheme,
  IDetailPanelMessageBannerProps,
  IDetailPanelActionBarProps,
  IDetailPanelBaseProps,
  IDetailPanelHeaderProps,
  IDetailPanelErrorResult
} from './DetailPanel.types';
import { Loading } from './Body/Loading';
import { BaseContainer } from './BaseContainer';
import { MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { _isReactComponent } from './Utils';
import { DetailPanelPivotBody } from './Body/DetailPanelPivotBody';

interface IMainBodyStates {
  pageReady: boolean;
  messageBanner?: IDetailPanelMessageBannerProps;
  loadingElement?: JSX.Element;
  inlineLoading?: boolean;
  contentElement?: JSX.Element;
  actionBar?: IDetailPanelActionBarProps;
  currentL2Id?: string | number;
}

interface IMainBodySnapshot {
  nextL2Id?: string | number;
}

type MainBodyProps = IDetailPanelBaseProps;

class DetailPanelBase extends React.PureComponent<MainBodyProps, IMainBodyStates> {
  constructor(props: MainBodyProps) {
    super(props);
    this.state = {
      pageReady: false,
      messageBanner: undefined,
      loadingElement: undefined,
      inlineLoading: undefined,
      contentElement: this._getMainContent(),
      actionBar: props.mainActionBar,
      currentL2Id: undefined
    };
  }

  public getSnapshotBeforeUpdate(prevProps: Readonly<MainBodyProps>, _prevStates: Readonly<IMainBodyStates>): IMainBodySnapshot | null {
    let snapshotUpdated = false;
    const snapshot = {} as IMainBodySnapshot;

    if (this.props.currentL2Id !== prevProps.currentL2Id) {
      // L2Id is changed
      snapshot.nextL2Id = this.props.currentL2Id;
      snapshotUpdated = true;
    }

    if (snapshotUpdated) {
      return snapshot;
    }

    return null;
  }

  public render(): JSX.Element | null {
    const { pageReady, messageBanner, loadingElement, contentElement, currentL2Id, inlineLoading, actionBar } = this.state;

    // Render loading element
    if (!pageReady && !loadingElement) {
      return null;
    }

    return (
      <BaseContainer
        onBack={currentL2Id ? this._onBackAction : undefined}
        onDismiss={this._onDismissAction}
        onSetLoadingAnimation={this._setLoadingAnimation}
        onSetMessageBanner={this._setMessageBanner}
        header={this._getCurrentHeader(false)}
        messageBanner={messageBanner}
        mainContent={contentElement}
        actionBar={actionBar}
        loadingElement={loadingElement}
        inlineLoading={inlineLoading}
      />
    );
  }

  public componentDidUpdate(
    _prevProps: Readonly<MainBodyProps>,
    _prevStates: Readonly<IMainBodyStates>,
    snapshot: IMainBodySnapshot | null
  ) {
    if (snapshot) {
      const { onGetL2Content, onGetL2ActionBar, mainActionBar } = this.props;
      if (snapshot.nextL2Id && onGetL2Content) {
        // Set loading animation
        this._setLoadingAnimation(LoadingTheme.OnL2ContentLoad);
        Promise.resolve(onGetL2Content(snapshot.nextL2Id))
          .then((element: JSX.Element) => {

            this.setState({
              contentElement: element,
              currentL2Id: snapshot.nextL2Id,
              messageBanner: undefined,
              actionBar: onGetL2ActionBar ? onGetL2ActionBar(snapshot.nextL2Id!) : undefined
            });
            this._setLoadingAnimation();
          })
          .catch((err: IDetailPanelErrorResult) => {
            // set message bar
            if (err && err.messageBannerSetting) {
              const messageBannerSetting = Object.assign({}, err.messageBannerSetting);
              if (messageBannerSetting.messageType === undefined) {
                messageBannerSetting.messageType = MessageBarType.error;
              }
              this.setState({
                messageBanner: messageBannerSetting,
                contentElement: undefined,
                currentL2Id: snapshot.nextL2Id,
                actionBar: undefined
              });
            }

            // stop loading animation
            this._setLoadingAnimation();
          });
      } else {
        this.setState({
          contentElement: this._getMainContent(),
          currentL2Id: undefined,
          messageBanner: undefined,
          actionBar: mainActionBar
        });
      }
    }
  }

  public componentDidMount(): void {
    const { onPageLoad } = this.props;
    if (onPageLoad) {
      this.setState({ loadingElement: this._getPageLoadingAnimation(LoadingTheme.OnPageLoad) });
      Promise.resolve(onPageLoad())
        .then(() => {
          this.setState({ loadingElement: undefined, pageReady: true });
        })
        .catch((err: IDetailPanelMessageBannerProps) => {
          this.setState({ loadingElement: undefined, messageBanner: err });
        });
    } else {
      this.setState({ loadingElement: undefined, pageReady: true });
    }
  }

  private _getMainContent = () => {
    const { mainContent } = this.props;
    if (mainContent) {
      if (_isReactComponent(mainContent)) {
        return mainContent;
      }

      return (
        <DetailPanelPivotBody
          {...mainContent}
          onGetLoadingElement={this._getPageLoadingAnimation}
          onSetActionBar={this._setActionBar}
        />);
    }

    return undefined;
  };

  private _getCurrentHeader = (titleTextOnly?: boolean) => {
    const { mainHeader, onGetL2Header } = this.props;
    const { currentL2Id: currentL2Key } = this.state;

    let header: IDetailPanelHeaderProps;
    if (currentL2Key && onGetL2Header) {
      header = onGetL2Header(currentL2Key);
    } else {
      header = mainHeader;
    }

    if (titleTextOnly) {
      return { title: header.title };
    }

    return header;
  };

  private _getCurrentActionBar = () => {
    const { mainActionBar, onGetL2ActionBar } = this.props;
    const { currentL2Id: currentL2Key } = this.state;

    if (currentL2Key && onGetL2ActionBar) {
      return onGetL2ActionBar(currentL2Key);
    }

    return mainActionBar;
  };

  private _getPageLoadingAnimation = (loadingTheme: LoadingTheme, themeId?: string | number, message?: string, forceInline?: boolean) => {
    const { onGetLoadingAnimation } = this.props;
    let loadingElement;
    if (onGetLoadingAnimation) {
      try {
        loadingElement = onGetLoadingAnimation(loadingTheme, themeId);
      } catch (err) {
        console.error('Fail on onGetLoadingAnimation', loadingTheme, err);
      }
    }

    if (!loadingElement) {
      // apply the default loading element
      switch (loadingTheme) {
        case LoadingTheme.OnPageLoad:
          {
            loadingElement = <Loading loadingType={LoadingType.Page} />;
          }

          break;

        case LoadingTheme.OnL2ContentLoad:
          {
            loadingElement = <Loading loadingType={LoadingType.Content} message={message} />;
          }

          break;

        case LoadingTheme.OnSecondaryButtonClick:
        case LoadingTheme.OnPrimaryButtonClick:
          {
            loadingElement = <Loading loadingType={forceInline ? LoadingType.Inline : LoadingType.Workflow} message={message} />;
          }

          break;

        case LoadingTheme.OnPivotItemLoad:
          {
            loadingElement = <Loading loadingType={LoadingType.Content} message={message} />;
            break;
          }

        default: {
          loadingElement = <Loading loadingType={LoadingType.None} message={message} />;
        }
      }
    }

    return loadingElement;
  };

  private _setLoadingAnimation = (loadingTheme?: LoadingTheme, message?: string, forceInline?: boolean) => {
    if (loadingTheme) {
      const { currentL2Id } = this.props;
      const element = this._getPageLoadingAnimation(loadingTheme, currentL2Id, message, forceInline);
      this.setState({ loadingElement: element, inlineLoading: !!forceInline });
    } else {
      this.setState({ loadingElement: undefined, inlineLoading: undefined });
    }
  };

  private _setMessageBanner = (messageBanner?: IDetailPanelMessageBannerProps) => {
    if (messageBanner) {
      this.setState({ messageBanner: messageBanner });
    } else {
      this.setState({ messageBanner: undefined });
    }
  };

  private _setActionBar = (actionBar?: IDetailPanelActionBarProps) => {
    if (actionBar) {
      this.setState({ actionBar: actionBar });
    } else {
      this.setState({ actionBar: undefined });
    }
  };

  private _onBackAction = () => {
    const { onL2BackClick } = this.props;
    const { currentL2Id } = this.state;
    if (currentL2Id && onL2BackClick) {
      onL2BackClick(currentL2Id);
      this._setMessageBanner();
      this._setLoadingAnimation();
    }
  };

  private _onDismissAction = () => {
    const { onDetailPanelDimiss } = this.props;
    if (onDetailPanelDimiss) {
      onDetailPanelDimiss();
    }
  };
}

export { DetailPanelBase };
