import { css } from '@microsoft/fast-element';

export const styles = css`
  :host {
    align-items: center;
    box-sizing: border-box;
    cursor: default;
    display: inline-flex;
    flex-direction: row;
    font-size: 0;
    line-height: 0;
    min-height: 6px;
    min-width: 6px;
    position: relative;
    transition: opacity 0.5s linear;
    --presence-size: 16px;
    --presence-mask-width: 2px;
    --presence-mask-color: #eee;
    --presence-color-available: #92c353;
    --presence-color-away: #eaa300;
    --presence-color-busy: #d13438;
    --presence-color-dnd: #d13438;
    --presence-color-offline: #929292;
    --presence-color-out-of-office: #c239b3;
    --presence-color-unknown: #adc0cf;
    --presence-color-blocked: #d13438;
  }

  .fluent-presence {
    background: #fff;
    box-sizing: border-box;
    border-radius: 9999px;
    display: inline-block;
    height: var(--presence-size);
    width: var(--presence-size);
    background-repeat: no-repeat;
    z-index: 1;
    color: var(--presence-color-unknown);
  }

  .fluent-presence svg,
  ::slotted(svg) {
    fill: currentColor;
    height: var(--presence-size);
    width: var(--presence-size);
  }

  .presence-mask {
    cursor: default;
    display: inline-block;
    position: absolute;
    height: calc(var(--presence-size) + (var(--presence-mask-width) * 2));
    width: calc(var(--presence-size) + (var(--presence-mask-width) * 2));
    top: calc(var(--presence-mask-width) * -1);
    left: calc(var(--presence-mask-width) * -1);
    background-color: var(--presence-mask-color);
    border-radius: 9999px;
  }

  .outofoffice,
  .away.outofoffice,
  .offline.outofoffice {
    color: var(--presence-color-out-of-office);
  }

  .busy {
    color: var(--presence-color-busy);
  }

  .dnd {
    color: var(--presence-color-dnd);
  }

  .on-the-phone {
    color: var(--presence-color-dnd);
  }

  .away {
    color: var(--presence-color-away);
  }

  .available {
    color: var(--presence-color-available);
  }
  .available.out-of-office {
    color: var(--presence-color-available);
  }

  .offline {
    color: var(--presence-color-offline);
  }

  .unknown,
  .unknown.outofoffice {
    color: var(--presence-color-unknown);
  }

  .blocked {
    color: var(--presence-color-blocked);
  }

  fluent-presence-badge {
    position: absolute;
    min-height: 6px;
    min-width: 6px;
  }
`;
