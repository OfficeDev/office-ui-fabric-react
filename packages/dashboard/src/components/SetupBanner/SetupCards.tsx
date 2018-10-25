import * as React from 'react';
import { mergeStyles } from 'office-ui-fabric-react';
import { IStyle } from 'office-ui-fabric-react/lib/Styling';
import { SetupCard } from './SetupCard';
import { ISetupCardProps } from './SetupCard.types';
import { ISetupCardsProps } from './SetupCards.types';

export class SetupCards extends React.PureComponent<ISetupCardsProps> {
  public static defaultProps = {
    cardWidth: 158,
    cardHeight: 201,
    cardsHeight: 276,
    cardHorizontalSpacing: 96,
    cardDualVerticalSpacing: 37,
    cardAnimationDelay: 0.167,
    cardVerticalOffset: -7,
    cardHoritonztalOffset: -7
  };

  public render(): JSX.Element {
    const containerStyle: IStyle = {
      width: this.props.cardWidth + this.props.cardHorizontalSpacing * (this.props.cardData.length - 1)
    };
    return (
      <div className={mergeStyles(containerStyle)}>
        {this.props.cardData.map((item: ISetupCardProps, index: number) => {
          const reverseIndex = this.props.cardData.length - 1 - index;

          const vertSpacing = (this.props.cardsHeight - this.props.cardHeight) / (this.props.cardData.length - 1);

          let newTop;
          if (this.props.cardData.length === 1) {
            newTop = this.props.cardsHeight / 2 - this.props.cardHeight / 2;
          } else if (this.props.cardData.length === 2) {
            newTop =
              (this.props.cardsHeight - this.props.cardDualVerticalSpacing - this.props.cardHeight) / 2 +
              this.props.cardDualVerticalSpacing * reverseIndex;
          } else {
            newTop = vertSpacing * reverseIndex;
          }

          const cardStyle: IStyle = {
            zIndex: reverseIndex,
            animationDelay: reverseIndex * this.props.cardAnimationDelay + 's',
            left: index * this.props.cardHorizontalSpacing + this.props.cardHoritonztalOffset,
            top: newTop + this.props.cardVerticalOffset
          };
          return (
            <SetupCard
              key={item.id}
              title={item.title}
              customStyle={cardStyle}
              selected={item.selected}
              checked={item.checked}
              transitionEnd={item.transitionEnd}
            />
          );
        })}
      </div>
    );
  }
}
