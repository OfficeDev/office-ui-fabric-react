import * as React from 'react';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { IDetailPanelBaseCommonAction, IBaseContainerProps } from './DetailPanel.types';
import { MessageBanner } from './Body/MessageBanner';
import { ActionBar } from './Footer/ActionBar';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Header } from './Header';
import { _isReactComponent } from './Utils';

type BodyContainerType = IBaseContainerProps & IDetailPanelBaseCommonAction;

const baseContainer: React.SFC<BodyContainerType> = (props: BodyContainerType) => {
  const _shouldHideOnLoading = () => {
    const { loadingElement, inlineLoading } = props;
    return loadingElement && !inlineLoading;
  };

  const _renderNav = () => {
    const { onBack, onDismiss } = props;
    return (
      <div>
        {onBack && (
          <div>
            <IconButton iconProps={{ iconName: 'Back' }} onClick={onBack} />
          </div>
        )}
        <div>
          <IconButton iconProps={{ iconName: 'ChromeClose' }} onClick={onDismiss} />
        </div>
      </div>
    );
  };

  const _renderHeader = () => {
    if (_shouldHideOnLoading()) {
      return null;
    }
    const { header } = props;
    if (header) {
      return (
        <div>
          <Header {...header} />
        </div>
      );
    }
    return null;
  };

  const _renderMessageBanner = () => {
    const { messageBanner } = props;
    if (messageBanner) {
      return (
        <div>
          <MessageBanner {...messageBanner} />
        </div>
      );
    }
    return null;
  };

  const _renderFooter = () => {
    if (_shouldHideOnLoading()) {
      return null;
    }

    const { actionBar, onSetMessageBanner, onSetLoadingAnimation, onSetActionBar, onSetConfirmationResult } = props;

    if (actionBar) {
      return (
        <ActionBar
          {...actionBar}
          onSetLoadingAnimation={onSetLoadingAnimation}
          onSetMessageBanner={onSetMessageBanner}
          onSetActionBar={onSetActionBar}
          onSetConfirmationResult={onSetConfirmationResult}
        />
      );
    }
    return null;
  };

  const _renderBody = () => {
    const { mainContent } = props;

    if (_isReactComponent(mainContent)) {
      return mainContent;
    }

    return null;
  };

  const _renderElement = () => {
    const { loadingElement, inlineLoading } = props;

    return (
      <Panel
        isOpen={true}
        type={PanelType.medium}
        onRenderNavigation={_renderNav}
        onRenderHeader={_renderHeader}
        isFooterAtBottom={true}
        onRenderFooterContent={_renderFooter}
      >
        {loadingElement}
        {(!loadingElement || (loadingElement && inlineLoading)) && (
          <>
            {_renderMessageBanner()}
            {_renderBody()}
          </>
        )}
      </Panel>
    );
  };

  return _renderElement();
};

export { baseContainer as BaseContainer };
