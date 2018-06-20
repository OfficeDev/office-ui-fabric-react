import * as React from 'react';
import { ICardProps, CardSize, Priority, CardContentType } from '../Card.types';
import { Card } from '../Card';
import { ICompoundAction, ButtonSize } from '../CompoundButtonStack/CompoundButtonStack.types';

export class MediumTallCardBasicExample extends React.Component<{}, {}> {
  constructor(props: ICardProps) {
    super(props);
  }

  public render(): JSX.Element {
    const cardFrameContent = {
      cardTitle: 'Medium Tall Card',
      cardDropDownOptions: [
        {
          key: 'Remove',
          name: 'Remove',
          icon: 'PageRemove',
          ariaLabel: 'Remove card',
          title: 'Remove card',
          onClick: () => {
            alert('Remove clicked');
          }
        }
      ]
    };

    const compoundButtonStack: ICompoundAction[] = [
      {
        title: 'Compound Button 1',
        action: () => {
          alert('Compound Button 1 clicked');
        },
        description: 'Compund Button 1 description'
      },
      {
        title: 'Compound Button 2',
        action: () => {
          alert('Compound Button 2 clicked');
        },
        description: 'Compund Button 2 description'
      }
    ];

    const contentAreaList = [
      {
        priority: Priority.Priority1,
        cardContentType: CardContentType.BodyText,
        content: {
          subHeaderText: 'Subheader Text',
          bodyText: 'Body Text'
        }
      },
      {
        priority: Priority.Priority2,
        cardContentType: CardContentType.CompoundButtonStack,
        content: {
          actions: compoundButtonStack,
          buttonSize: ButtonSize.small
        }
      }
    ];

    const header = {
      headerText: 'Header Text ',
      annotationText: 'Annotation Text ',
      fontSize: 1
    };
    return (
      <Card
        cardFrameContent={cardFrameContent}
        header={header}
        cardContentList={contentAreaList}
        cardSize={CardSize.mediumTall}
      />
    );
  }
}
