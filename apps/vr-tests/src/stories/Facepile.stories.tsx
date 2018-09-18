/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { FabricDecorator, TestWrapperDecorator, runStories } from '../utilities';
import { Facepile, PersonaInitialsColor, PersonaSize, OverflowButtonType } from 'office-ui-fabric-react';

import { TestImages } from '../common/TestImages';

const facepilePersonas = [
  {
    imageUrl: TestImages.personaFemale,
    personaName: 'Annie Lindqvist',
    data: '50%'
  },
  {
    imageUrl: TestImages.personaFemale,
    personaName: 'Aaron Reid',
    data: '$1,000'
  },
  {
    personaName: 'Alex Lundberg',
    data: '75%'
  },
  {
    personaName: 'Roko Kolar',
    data: '4 hrs'
  },
  {
    imageInitials: 'CB',
    personaName: 'Christian Bergqvist',
    initialsColor: PersonaInitialsColor.green,
    data: '25%'
  },
  {
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    personaName: 'Valentina Lovric',
    initialsColor: PersonaInitialsColor.lightBlue,
    data: 'Emp1234'
  }
];

const facepileProps = {
  personas: facepilePersonas,
  ariaDescription: 'To move through the items use left and right arrow keys.'
};

const facepileStories = {
  decorators: [FabricDecorator, TestWrapperDecorator],
  stories: {
    'Root': () => <Facepile {...facepileProps} />,
    'Extra extra small': () => <Facepile {...facepileProps} personaSize={PersonaSize.size24} />,
    'Overflow': () => (
      <Facepile
        {...facepileProps}
        maxDisplayablePersonas={3}
        overflowButtonType={OverflowButtonType.downArrow}
        overflowButtonProps={{
          ariaLabel: 'More users',
        }
        }
      />
    ),
    'Add face': () => <Facepile {...facepileProps} showAddButton={true} />
  }
};

runStories('Facepile', facepileStories);