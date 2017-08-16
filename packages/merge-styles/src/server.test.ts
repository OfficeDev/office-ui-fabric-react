import { renderStatic } from './server';
import {
  Stylesheet,
  InjectionMode
} from './Stylesheet';
import {
  mergeStyleSets
} from './mergeStyleSets';

let { expect } = chai;

describe('staticRender', () => {
  it('can render content', () => {

    let { html, css } = renderStatic(() => {
      let classNames = mergeStyleSets({
        root: {
          background: 'red'
        }
      });

      return `<div class="${classNames.root}">Hello!</div>`;
    });

    expect(html).equals(`<div class="css-0">Hello!</div>`);
    expect(css).equals(`.css-0{background:red;}`);
  });
});