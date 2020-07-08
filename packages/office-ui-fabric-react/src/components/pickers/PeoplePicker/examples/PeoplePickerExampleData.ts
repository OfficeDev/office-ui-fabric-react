import { IPersonaProps, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TestImages } from '@uifabric/example-data';

/* eslint-disable deprecation/deprecation */

/** @deprecated Use the version from `@uifabric/example-data` instead. */
export const people: (IPersonaProps & { key: string | number })[] = [
  {
    key: 1,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'PV',
    text: 'Annie Lindqvist',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.online,
  },
  {
    key: 2,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AR',
    text: 'Aaron Reid',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.busy,
  },
  {
    key: 3,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AL',
    text: 'Alex Lundberg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.dnd,
  },
  {
    key: 4,
    imageUrl: TestImages.personaMale,
    imageInitials: 'RK',
    text: 'Roko Kolar',
    secondaryText: 'Financial Analyst',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.offline,
  },
  {
    key: 5,
    imageUrl: TestImages.personaMale,
    imageInitials: 'CB',
    text: 'Christian Bergqvist',
    secondaryText: 'Sr. Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.online,
  },
  {
    key: 6,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valentina Lovric',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.online,
  },
  {
    key: 7,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharett',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.away,
  },
  {
    key: 8,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'PV',
    text: 'Anny Lindqvist',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.busy,
  },
  {
    key: 9,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AR',
    text: 'Aron Reid',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.dnd,
  },
  {
    key: 10,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AL',
    text: 'Alix Lundberg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.offline,
  },
  {
    key: 11,
    imageUrl: TestImages.personaMale,
    imageInitials: 'RK',
    text: 'Roko Kular',
    secondaryText: 'Financial Analyst',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.none,
  },
  {
    key: 12,
    imageUrl: TestImages.personaMale,
    imageInitials: 'CB',
    text: 'Christian Bergqvest',
    secondaryText: 'Sr. Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.busy,
  },
  {
    key: 13,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valintina Lovric',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.busy,
  },
  {
    key: 14,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharet',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.blocked,
  },
  {
    key: 15,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Anny Lindqvest',
    secondaryText: 'SDE',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.blocked,
  },
  {
    key: 16,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Alix Lunberg',
    secondaryText: 'SE',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.away,
  },
  {
    key: 17,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Annie Lindqvest',
    secondaryText: 'SDET',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.online,
  },
  {
    key: 18,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Alixander Lundberg',
    secondaryText: 'Senior Manager of SDET',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.offline,
  },
  {
    key: 19,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Anny Lundqvist',
    secondaryText: 'Junior Manager of Software',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.away,
  },
  {
    key: 20,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Shorett',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.blocked,
  },
  {
    key: 21,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valentina Lovrics',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.online,
  },
  {
    key: 22,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharet',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.online,
  },
  {
    key: 23,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valentina Lovrecs',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.blocked,
  },
  {
    key: 24,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharitt',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.offline,
  },
  {
    key: 25,
    imageUrl: './images/persona-male.png',
    imageInitials: 'MS',
    text: 'Maor Shariett',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 3:00pm',
    presence: PersonaPresence.online,
  },
  {
    key: 26,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Alix Lundburg',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 3:00pm',
    presence: PersonaPresence.away,
  },
  {
    key: 27,
    imageUrl: './images/persona-female.png',
    imageInitials: 'VL',
    text: 'Valantena Lovric',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.busy,
  },
  {
    key: 28,
    imageUrl: './images/persona-female.png',
    imageInitials: 'VL',
    text: 'Velatine Lourvric',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.online,
  },
  {
    key: 29,
    imageUrl: './images/persona-female.png',
    imageInitials: 'VL',
    text: 'Valentyna Lovrique',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.busy,
  },
  {
    key: 30,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Annie Lindquest',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.dnd,
  },
  {
    key: 31,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Anne Lindquist',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.blocked,
  },
  {
    key: 32,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Ann Lindqiest',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.online,
  },
  {
    key: 33,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AR',
    text: 'Aron Reid',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.away,
  },
  {
    key: 34,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AR',
    text: 'Aaron Reed',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.offline,
  },
  {
    key: 35,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Alix Lindberg',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.busy,
  },
  {
    key: 36,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AL',
    text: 'Alan Lindberg',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.busy,
  },
  {
    key: 37,
    imageUrl: './images/persona-male.png',
    imageInitials: 'MS',
    text: 'Maor Sharit',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.offline,
  },
  {
    key: 38,
    imageUrl: './images/persona-male.png',
    imageInitials: 'MS',
    text: 'Maorr Sherit',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.online,
  },
  {
    key: 39,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AL',
    text: 'Alex Lindbirg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.dnd,
  },
  {
    key: 40,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AL',
    text: 'Alex Lindbarg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presence: PersonaPresence.online,
  },
];

/** @deprecated Use the version from `@uifabric/example-data` instead. */
export const mru: IPersonaProps[] = people.slice(0, 5);
