/** @jsx withSlots */
import * as React from 'react';
import { withSlots, getSlots } from '@uifabric/foundation';
import { getNativeProps, htmlElementProperties, warn } from '@uifabric/utilities';
import { Stack, IStackComponent } from 'office-ui-fabric-react';

import { ICardComponent, ICardProps, ICardSlots, ICardTokens } from './Card.types';
import { CardItem } from './CardItem/CardItem';
import { ICardItemProps } from './CardItem/CardItem.types';
import { CardSection } from './CardSection/CardSection';
import { ICardSectionProps } from './CardSection/CardSection.types';

const CardItemType = (<CardItem /> as React.ReactElement<ICardItemProps>).type;
const CardSectionType = (<CardSection /> as React.ReactElement<ICardSectionProps>).type;

export const CardView: ICardComponent['view'] = props => {
  const Slots = getSlots<ICardProps, ICardSlots>(props, {
    root: Stack
  });

  const { children, styles, tokens, horizontal, ...rest } = props;

  const nativeProps = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(rest, htmlElementProperties);

  // Get childrenGap and childrenMargin token values.
  const childrenGap = tokens && (tokens as ICardTokens).childrenGap;
  const childrenMargin = tokens && (tokens as ICardTokens).childrenMargin;
  const childrenCount = React.Children.count(children);

  /* The map function below takes the Card children and applies the correct margin and gap tokens to them, ensuring at the same time that
   * they are of type CardItem or CardSection. */
  const cardChildren: (React.ReactChild | null)[] = React.Children.map(
    children,
    (child: React.ReactElement<ICardItemProps | ICardSectionProps>, index: number) => {
      if (!child) {
        return null;
      }

      // Ensure that we're dealing with CardItems and CardSections and throw a warning otherwise.
      const isItem = _isCardItem(child);
      const isSection = _isCardSection(child);
      if (isItem || isSection) {
        // Only compute and clone if childrenGap and/or childrenMargin were provided.
        if (!childrenGap && !childrenMargin) {
          return child;
        }

        const { fill, tokens: childTokens, ...childRest } = child.props;

        let margin: number | string = 0;

        /* If childrenMargin has been specified and the fill property is not present, make the appropriate calculations to get the resolved
         * margin for this specific child depending on the type of Card (vertical vs horizontal) and the child position in the card (first
         * child, in-between child or last child). */
        if (childrenMargin && !fill) {
          const firstMargin: number = index === 0 ? childrenMargin : 0;
          const lastMargin: number = index === childrenCount - 1 ? childrenMargin : 0;

          const verticalMargin: string = `${firstMargin}px ${childrenMargin}px ${lastMargin}px`;
          const horizontalMargin: string = `${childrenMargin}px ${lastMargin}px ${childrenMargin}px ${firstMargin}px`;

          margin = horizontal ? horizontalMargin : verticalMargin;
        }

        /* Resolve tokens, sending childrenGap only if the child type is CardSection as CardItem doesn't have a childrenGap token in its
         * type specification. We're sending childrenGap to CardSection so that elements inside a CardSection maintain the overall gap
         * provided to the Card. */
        const resolvedTokens = {
          margin,
          childrenGap: isSection ? childrenGap : undefined,
          ...childTokens
        };

        // Clone the child with the correct tokens.
        return React.cloneElement(child, {
          tokens: resolvedTokens,
          ...childRest
        });
      }

      warn('The children of a Card component should be of type CardItem or CardSection.');

      return child;
    }
  );

  return (
    <Slots.root
      {...nativeProps}
      horizontal={horizontal}
      tokens={tokens as IStackComponent['tokens']}
      verticalFill
      verticalAlign="start"
      horizontalAlign={horizontal ? 'start' : 'stretch'}
    >
      {cardChildren}
    </Slots.root>
  );
};

function _isReactElement(item: React.ReactNode): item is React.ReactElement {
  return !!item && typeof item === 'object' && !!(item as React.ReactElement).type;
}

function _isCardItem(item: React.ReactNode): item is typeof CardItem {
  // In theory, we should be able to just check item.type === CardItemType.
  // However, under certain unclear circumstances (see https://github.com/OfficeDev/office-ui-fabric-react/issues/10785),
  // the object identity is different despite the function body being the same.
  return _isReactElement(item) && item.type.toString() === CardItemType.toString();
}

function _isCardSection(item: React.ReactNode): item is typeof CardSection {
  return _isReactElement(item) && item.type.toString() === CardSectionType.toString();
}
