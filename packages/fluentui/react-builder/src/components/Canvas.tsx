import * as React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

import { DebugSelector, FiberNavigator, Provider, themes } from '@fluentui/react-northstar';
import { JSONTreeElement } from './types';
import { EventListener } from '@fluentui/react-component-event-listener';
import { fiberNavFindOwnerInJSONTree, fiberNavToJSONTreeElement, renderJSONTreeToJSXElement } from '../config';
import { DebugFrame } from './DebugFrame';

const Canvas = ({
  renderJSONTreeElement,
  style,
  isExpanding,
  isSelecting,
  jsonTree,
  onMouseMove,
  onMouseUp,
  onSelectComponent,
  onSelectorHover,
  selectedComponent,
  onDeleteComponent,
  onGoToParentComponent,
}: {
  renderJSONTreeElement?: (jsonTreeElement: JSONTreeElement) => JSONTreeElement;
  style?: React.CSSProperties;
  jsonTree: JSONTreeElement;
  isExpanding?: boolean;
  isSelecting?: boolean;
  onMouseMove?: ({ clientX, clientY }: { clientX: number; clientY: number }) => void;
  onMouseUp?: () => void;
  onSelectComponent?: (jsonTreeElement: JSONTreeElement) => void;
  onSelectorHover?: (jsonTreeElement: JSONTreeElement) => void;
  selectedComponent?: JSONTreeElement;
  onDeleteComponent?: () => void;
  onGoToParentComponent?: () => void;
}) => {
  const iframeId = React.useMemo(
    () =>
      `frame-${Math.random()
        .toString(36)
        .slice(2)}`,
    [],
  );

  const handleMouseMove = React.useCallback(
    (e: MouseEvent) => {
      const window = (e.target as HTMLElement).ownerDocument.defaultView;
      const $iframe = window.parent.document.getElementById(iframeId);

      onMouseMove({
        clientX: $iframe.offsetLeft + e.clientX,
        clientY: $iframe.offsetTop + e.clientY,
      });
    },
    [onMouseMove],
  );

  const handleMouseUp = React.useCallback(
    (e: MouseEvent) => {
      if (!onMouseUp) return;

      e.preventDefault();
      e.stopPropagation();

      onMouseUp();
    },
    [onMouseUp],
  );

  const handleSelectComponent = React.useCallback(
    (fiberNav: FiberNavigator) => {
      onSelectComponent?.(fiberNavToJSONTreeElement(fiberNav));
    },
    [onSelectComponent],
  );

  const handleSelectorHover = React.useCallback(
    (fiberNav: FiberNavigator) => {
      onSelectorHover?.(fiberNavToJSONTreeElement(fiberNav));
    },
    [onSelectorHover],
  );

  const debugSize = '8px';

  React.useEffect(() => {
    const iframe = document.getElementById(iframeId) as HTMLIFrameElement;

    if (!iframe) {
      // console.log('Canvas:effect !iframe, stop');
      return () => null;
    }

    // We need to wait one frame in the iframe in order to find the DOM nodes we're looking for
    const animationFrame = iframe.contentWindow.setTimeout(() => {
      // console.log('Canvas:effect');

      const iframeDocument = iframe.contentDocument;
      const iframeWindow = iframe.contentWindow;

      let style = iframeDocument.getElementById('builder-style');

      if (!style) {
        style = iframeDocument.createElement('style');
        style.id = 'builder-style';
        // console.log('Canvas:effect created style', style);

        iframeDocument.body.appendChild(style);
        // console.log('Canvas:effect appended style to body', iframeDocument.body);
      }

      // style.innerHTML = ``;

      // console.log('Canvas:effect calc styles');
      const elements = iframe.contentDocument.querySelectorAll(
        '[data-builder-id]:not([data-builder-id="builder-root"])',
      );

      // console.log('Canvas:effect elements', elements);

      const elementStyles = !isExpanding
        ? ''
        : Array.from(elements)
            .map((element: HTMLElement) => {
              const builderId = element.getAttribute('data-builder-id');

              // We need to measure nodes without our style overrides applied.
              // Remove our attribute used in our debug style selector.
              element.removeAttribute('data-builder-id');
              const { width, height } = element.getBoundingClientRect();
              const { marginTop, marginRight, marginBottom, marginLeft } = iframeWindow.getComputedStyle(element);
              element.setAttribute('data-builder-id', builderId);

              const hasNoWidth = width === 0;
              const hasNoHeight = height === 0;
              const hasNoChildren = element.childElementCount === 0;
              const hasManyChildren = element.childElementCount > 1;

              const properties = [
                hasNoChildren &&
                  hasNoWidth &&
                  `padding-left: calc(${debugSize} * 2);\n  padding-right: calc(${debugSize} * 2);`,
                hasNoChildren &&
                  hasNoHeight &&
                  `padding-top: calc(${debugSize} * 2);\n  padding-bottom: calc(${debugSize} * 2);`,
                hasManyChildren && `padding: ${debugSize};`,
                marginTop === '0px' && `margin-top: ${debugSize};`,
                marginRight === '0px' && `margin-right: ${debugSize};`,
                marginBottom === '0px' && `margin-bottom: ${debugSize};`,
                marginLeft === '0px' && `margin-left: ${debugSize};`,
              ]
                .filter(Boolean)
                .join('\n');

              // console.log(
              //   element,
              //   '\nHAS\n',
              //   { width, height, marginTop, marginRight, marginBottom, marginLeft },
              //   '\nGETS\n',
              //   properties,
              // );

              return properties.length === 0 ? '' : `[data-builder-id="${builderId}"] {\n${properties}\n}`;
            })
            .filter(Boolean)
            .join('\n');

      style.innerHTML = isExpanding
        ? `
        [data-builder-id="builder-root"] {
          padding: ${debugSize};
          min-height: 100vh;
        }

        [data-builder-id]:not([data-builder-id="builder-root"]) {
          outline: 1px dotted cornflowerblue;
          outline-offset: -1px;
        }
        
        ${elementStyles}
        `
        : elementStyles;

      // console.log('Canvas:effect style element:', style.innerHTML);
    });

    return () => {
      const iframe = document.getElementById(iframeId) as HTMLIFrameElement;

      // console.log('Canvas:effect clean up');

      iframe.contentWindow.clearTimeout(animationFrame);
    };
  }, [isExpanding, /"uuid":"/gm.exec(JSON.stringify(jsonTree))]);

  return (
    <Frame
      title="Designer Canvas"
      frameBorder="0"
      width="100%"
      height="100%"
      initialContent='<!DOCTYPE html><html><head><style>html {font-size: 14px;}</style></head><body><div class="frame-root"></div></body></html>'
      style={style}
      id={iframeId}
    >
      <FrameContextConsumer>
        {({ document, window }) => (
          <>
            {(!jsonTree.props?.children || jsonTree.props.children.length === 0) && (
              <div
                style={{
                  padding: '8rem',
                  textAlign: 'center',
                  position: 'absolute',
                  pointerEvents: 'none',
                  width: '100%',
                }}
              >
                <span style={{ fontSize: '4rem' }} role="img" aria-label="Finger pointing left">
                  👈
                </span>
                <div style={{ fontSize: '1.2rem', opacity: 0.5 }}>Drag n' Drop some components</div>
              </div>
            )}

            <DebugSelector
              active={isSelecting}
              filter={fiberNav => {
                const owner = fiberNavFindOwnerInJSONTree(fiberNav, jsonTree);
                if (owner?.props?.['data-builder-id'] === selectedComponent?.uuid) {
                  return null;
                }
                return owner;
              }}
              mountDocument={document}
              renderLabel={fiberNav => fiberNav.name}
              showBackground={false}
              showClassName={false}
              showElement={false}
              showCropMarks={false}
              onSelect={handleSelectComponent}
              onHover={handleSelectorHover}
            />
            {selectedComponent && (
              <DebugFrame
                target={document}
                selector={`[data-builder-id="${selectedComponent.uuid}"]`}
                componentName={selectedComponent.displayName}
                onDelete={onDeleteComponent}
                onGoToParent={onGoToParentComponent}
              />
            )}

            <Provider theme={themes.teams} target={document}>
              {onMouseMove && <EventListener type="mousemove" listener={handleMouseMove} target={document} />}
              {onMouseUp && <EventListener type="mouseup" listener={handleMouseUp} target={document} />}
              {renderJSONTreeToJSXElement(jsonTree, renderJSONTreeElement)}
            </Provider>
          </>
        )}
      </FrameContextConsumer>
    </Frame>
  );
};

export default Canvas;
