import * as React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import { PersonaTestImages } from '@uifabric/experiments/lib/common/TestImages';
import { Persona } from '@uifabric/experiments';

const tokens = {
  sectionStack: {
    childrenGap: 32
  },
  headingStack: {
    childrenGap: 16
  },
  personaCoinStack: {
    childrenGap: 12
  }
};

export class PersonaExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Stack tokens={tokens.sectionStack}>
        <Stack tokens={tokens.headingStack} padding={8}>
          <Stack tokens={tokens.personaCoinStack}>
            <Text>Basic Usage</Text>
            <Stack tokens={tokens.personaCoinStack}>
              <Persona text="Sukhnam Chander" secondaryText="Principal Program manager" />
              <Persona text="Kevin Jameson" secondaryText="Professional traveller" />
              <Persona text="王力" secondaryText="Principal Program manager" />
            </Stack>
          </Stack>
          <Stack tokens={tokens.personaCoinStack}>
            <Text>When passing coinProps</Text>
            <Stack tokens={tokens.personaCoinStack}>
              <Persona text="Eline Page" secondaryText="eSports commentator" coin={{ presence: 4 }} />
              <Persona text="赵丽颖" coin={{ imageUrl: PersonaTestImages.personFemale }} />
              <Persona text="Kevin Jameson" coin={{ imageUrl: PersonaTestImages.personMale }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  }
}
