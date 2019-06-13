import * as React from 'react';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TestImages } from '../../../common/TestImages';
import { Stack } from '../../Stack';

const examplePersona: IPersonaSharedProps = {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'AL',
  text: 'Annie Lindqvist',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm'
};

export class PersonaPresenceExample extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <div className="ms-PersonaExample">
        <Stack horizontal>
          <Stack>
            <Label>Online</Label>
            <Stack horizontal>
              <Persona text="" size={PersonaSize.size8} hidePersonaDetails presence={PersonaPresence.online} />
              <Persona {...examplePersona} size={PersonaSize.size24} hidePersonaDetails presence={PersonaPresence.online} />
              <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.online} />
              <Persona {...examplePersona} size={PersonaSize.size72} hidePersonaDetails presence={PersonaPresence.online} />
            </Stack>
          </Stack>

          <Stack>
            <Label>Online + Out of Office</Label>
            <Stack horizontal>
              <Persona text="" size={PersonaSize.size8} hidePersonaDetails presence={PersonaPresence.online} isOutOfOffice />
              <Persona {...examplePersona} size={PersonaSize.size24} hidePersonaDetails presence={PersonaPresence.online} isOutOfOffice />
              <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.online} isOutOfOffice />
              <Persona {...examplePersona} size={PersonaSize.size72} hidePersonaDetails presence={PersonaPresence.online} isOutOfOffice />
            </Stack>
          </Stack>
        </Stack>

        <Stack horizontal>
          <Stack>
            <Label>Away</Label>
            <Stack horizontal>
              <Persona text="" size={PersonaSize.size8} hidePersonaDetails presence={PersonaPresence.away} />
              <Persona {...examplePersona} size={PersonaSize.size24} hidePersonaDetails presence={PersonaPresence.away} />
              <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.away} />
              <Persona {...examplePersona} size={PersonaSize.size72} hidePersonaDetails presence={PersonaPresence.away} />
            </Stack>
          </Stack>

          <Stack>
            <Label>Away + Out of Office</Label>
            <Stack horizontal>
              <Persona text="" size={PersonaSize.size8} hidePersonaDetails presence={PersonaPresence.away} isOutOfOffice />
              <Persona {...examplePersona} size={PersonaSize.size24} hidePersonaDetails presence={PersonaPresence.away} isOutOfOffice />
              <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.away} isOutOfOffice />
              <Persona {...examplePersona} size={PersonaSize.size72} hidePersonaDetails presence={PersonaPresence.away} isOutOfOffice />
            </Stack>
          </Stack>
        </Stack>

        <Stack horizontal>
          <Stack>
            <Label>Busy</Label>
            <Stack horizontal>
              <Persona text="" size={PersonaSize.size8} hidePersonaDetails presence={PersonaPresence.busy} />
              <Persona {...examplePersona} size={PersonaSize.size24} hidePersonaDetails presence={PersonaPresence.busy} />
              <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.busy} />
              <Persona {...examplePersona} size={PersonaSize.size72} hidePersonaDetails presence={PersonaPresence.busy} />
            </Stack>
          </Stack>

          <Stack>
            <Label>Busy + Out of Office</Label>
            <Stack horizontal>
              <Persona text="" size={PersonaSize.size8} hidePersonaDetails presence={PersonaPresence.busy} isOutOfOffice />
              <Persona {...examplePersona} size={PersonaSize.size24} hidePersonaDetails presence={PersonaPresence.busy} isOutOfOffice />
              <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.busy} isOutOfOffice />
              <Persona {...examplePersona} size={PersonaSize.size72} hidePersonaDetails presence={PersonaPresence.busy} isOutOfOffice />
            </Stack>
          </Stack>
        </Stack>

        <Stack horizontal>
          <Stack>
            <Label>Do not Disturb</Label>
            <Stack horizontal>
              <Persona text="" size={PersonaSize.size8} hidePersonaDetails presence={PersonaPresence.dnd} />
              <Persona {...examplePersona} size={PersonaSize.size24} hidePersonaDetails presence={PersonaPresence.dnd} />
              <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.dnd} />
              <Persona {...examplePersona} size={PersonaSize.size72} hidePersonaDetails presence={PersonaPresence.dnd} />
            </Stack>
          </Stack>

          <Stack>
            <Label>Do not Disturb + Out of Office</Label>
            <Stack horizontal>
              <Persona text="" size={PersonaSize.size8} hidePersonaDetails presence={PersonaPresence.dnd} isOutOfOffice />
              <Persona {...examplePersona} size={PersonaSize.size24} hidePersonaDetails presence={PersonaPresence.dnd} isOutOfOffice />
              <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.dnd} isOutOfOffice />
              <Persona {...examplePersona} size={PersonaSize.size72} hidePersonaDetails presence={PersonaPresence.dnd} isOutOfOffice />
            </Stack>
          </Stack>
        </Stack>

        <Label>Blocked</Label>
        <Stack horizontal>
          <Persona text="" size={PersonaSize.size8} hidePersonaDetails presence={PersonaPresence.blocked} />
          <Persona {...examplePersona} size={PersonaSize.size24} hidePersonaDetails presence={PersonaPresence.blocked} />
          <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.blocked} />
          <Persona {...examplePersona} size={PersonaSize.size72} hidePersonaDetails presence={PersonaPresence.blocked} />
        </Stack>

        <Stack horizontal>
          <Stack>
            <Label>Offline</Label>
            <Stack horizontal>
              <Persona text="" size={PersonaSize.size8} hidePersonaDetails presence={PersonaPresence.offline} />
              <Persona {...examplePersona} size={PersonaSize.size24} hidePersonaDetails presence={PersonaPresence.offline} />
              <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.offline} />
              <Persona {...examplePersona} size={PersonaSize.size72} hidePersonaDetails presence={PersonaPresence.offline} />
            </Stack>
          </Stack>

          <Stack>
            <Label>Offline + Out of Office</Label>
            <Stack horizontal>
              <Persona text="" size={PersonaSize.size8} hidePersonaDetails presence={PersonaPresence.offline} isOutOfOffice />
              <Persona {...examplePersona} size={PersonaSize.size24} hidePersonaDetails presence={PersonaPresence.offline} isOutOfOffice />
              <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.offline} isOutOfOffice />
              <Persona {...examplePersona} size={PersonaSize.size72} hidePersonaDetails presence={PersonaPresence.offline} isOutOfOffice />
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  }
}
