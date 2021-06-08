import { css } from '@microsoft/fast-element';
import { elevation } from '../styles';
import { surfaceCornerRadius, fillColor, strokeWidth } from '../design-tokens';

export const dialogStyles = (context, definition) => css`
  :host([hidden]) {
    display: none;
  }

  :host {
    --elevation: 14;
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    ${elevation}
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${surfaceCornerRadius} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${fillColor};
    z-index: 1;
    border: calc(${strokeWidth} * 1px) solid transparent;
  }
`;
