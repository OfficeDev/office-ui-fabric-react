import { attr, Notifier, Observable } from '@microsoft/fast-element';
import { parseColorHexRGB } from '@microsoft/fast-colors';
import { designSystemProperty, designSystemProvider, CardTemplate as template } from '@microsoft/fast-foundation';
import { createColorPalette, DesignSystem, neutralFillCard } from '@microsoft/fast-components-styles-msft';
import { FluentDesignSystemProvider } from '../design-system-provider';
import { CardStyles as styles } from './card.styles';

/**
 * The Fluent Card Element. Implements {@link @microsoft/fast-foundation#Card},
 * {@link @microsoft/fast-foundation#CardTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-card\>
 */
@designSystemProvider({
  name: 'fluent-card',
  template,
  styles,
  shadowOptions: {
    mode: 'closed',
  },
})
export class FluentCard extends FluentDesignSystemProvider
  implements Pick<DesignSystem, 'backgroundColor' | 'neutralPalette'> {
  /**
   * Background color for the banner component. Sets context for the design system.
   * @public
   * @remarks
   * HTML Attribute: background-color
   */
  @designSystemProperty({
    attribute: 'background-color',
    default: '#FFFFFF',
  })
  public backgroundColor: string;
  protected backgroundColorChanged(): void {
    const parsedColor = parseColorHexRGB(this.backgroundColor);

    if (parsedColor !== null) {
      this.neutralPalette = createColorPalette(parsedColor);
    }
  }

  /**
   * Background color for the banner component. Sets context for the design system.
   * @public
   * @remarks
   * HTML Attribute: background-color
   */
  @attr({
    attribute: 'card-background-color',
  })
  public cardBackgroundColor: string;
  private cardBackgroundColorChanged(): void {
    const parsedColor = parseColorHexRGB(this.cardBackgroundColor);

    if (parsedColor !== null) {
      this.neutralPalette = createColorPalette(parsedColor);
      this.backgroundColor = this.cardBackgroundColor;
    }
  }

  /**
   * Neutral pallette for the the design system provider.
   * @internal
   */
  @designSystemProperty({
    attribute: false,
    default: createColorPalette(parseColorHexRGB('#FFFFFF')!),
    cssCustomProperty: false,
  })
  public neutralPalette: string[];

  /**
   * @internal
   */
  public handleChange(source: DesignSystem, name: string): void {
    if (!this.cardBackgroundColor) {
      this.backgroundColor = neutralFillCard(source);
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    const designSystemNotifier: Notifier = Observable.getNotifier(this.provider?.designSystem);
    designSystemNotifier.subscribe(this, 'backgroundColor');
    designSystemNotifier.subscribe(this, 'neutralPalette');
    this.handleChange(this.provider?.designSystem as DesignSystem, 'backgroundColor');
  }
}

/**
 * Styles for Card
 * @public
 */
export const CardStyles = styles;
