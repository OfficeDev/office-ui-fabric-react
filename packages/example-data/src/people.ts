import { TestImages } from './testImages';

/**
 * For use in this package only.
 * Partial mirror of IExtendedPersonaProps avoid a circular dependency.
 * If the real interface changes and this one starts causing compiler errors, update it.
 * @internal
 */
export interface IExampleExtendedPersonaProps {
  imageUrl?: string;
  imageInitials?: string;
  text?: string;
  secondaryText?: string;
  tertiaryText?: string;
  optionalText?: string;
  presence?: number;
  isValid: boolean;
  canExpand?: boolean;
}

/**
 * For use in this package only.
 * Mirror of PersonaPresence avoid a circular dependency.
 * If the real enum changes and this one starts causing compiler errors, update it.
 * @internal
 */
enum PersonaPresence {
  none = 0,
  offline = 1,
  online = 2,
  away = 3,
  dnd = 4,
  blocked = 5,
  busy = 6
}

/** Sample people and groups @internal */
export const people: (IExampleExtendedPersonaProps & { key: string | number })[] = [
  {
    key: 1,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'PV',
    text: 'Annie Lindqvist',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 2,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AR',
    text: 'Aaron Reid',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 3,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AL',
    text: 'Alex Lundberg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.dnd
  },
  {
    key: 4,
    imageUrl: TestImages.personaMale,
    imageInitials: 'RK',
    text: 'Roko Kolar',
    secondaryText: 'Financial Analyst',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 5,
    imageUrl: TestImages.personaMale,
    imageInitials: 'CB',
    text: 'Christian Bergqvist',
    secondaryText: 'Sr. Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 6,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valentina Lovric',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 7,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharett',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.away
  },
  {
    key: 8,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'PV',
    text: 'Anny Lindqvist',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 9,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AR',
    text: 'Aron Reid',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.dnd
  },
  {
    key: 10,
    imageUrl: TestImages.personaMale,
    imageInitials: 'AL',
    text: 'Alix Lundberg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 11,
    imageUrl: TestImages.personaMale,
    imageInitials: 'RK',
    text: 'Roko Kular',
    secondaryText: 'Financial Analyst',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.none
  },
  {
    key: 12,
    imageUrl: TestImages.personaMale,
    imageInitials: 'CB',
    text: 'Christian Bergqvest',
    secondaryText: 'Sr. Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 13,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valintina Lovric',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 14,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharet',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.blocked
  },
  {
    key: 15,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Anny Lindqvest',
    secondaryText: 'SDE',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.blocked
  },
  {
    key: 16,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Alix Lunberg',
    secondaryText: 'SE',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.away
  },
  {
    key: 17,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Annie Lindqvest',
    secondaryText: 'SDET',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 18,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Alixander Lundberg',
    secondaryText: 'Senior Manager of SDET',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 19,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Anny Lundqvist',
    secondaryText: 'Junior Manager of Software',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.away
  },
  {
    key: 20,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Shorett',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.blocked
  },
  {
    key: 21,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valentina Lovrics',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 22,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharet',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 23,
    imageUrl: TestImages.personaFemale,
    imageInitials: 'VL',
    text: 'Valentina Lovrecs',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.blocked
  },
  {
    key: 24,
    imageUrl: TestImages.personaMale,
    imageInitials: 'MS',
    text: 'Maor Sharitt',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 25,
    imageUrl: './images/persona-male.png',
    imageInitials: 'MS',
    text: 'Maor Shariett',
    secondaryText: 'Design Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 3:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 26,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Alix Lundburg',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 3:00pm',
    isValid: true,
    presence: PersonaPresence.away
  },
  {
    key: 27,
    imageUrl: './images/persona-female.png',
    imageInitials: 'VL',
    text: 'Valantena Lovric',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 28,
    imageUrl: './images/persona-female.png',
    imageInitials: 'VL',
    text: 'Velatine Lourvric',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 29,
    imageUrl: './images/persona-female.png',
    imageInitials: 'VL',
    text: 'Valentyna Lovrique',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 30,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Annie Lindquest',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.dnd
  },
  {
    key: 31,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Anne Lindquist',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.blocked
  },
  {
    key: 32,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Ann Lindqiest',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 33,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AR',
    text: 'Aron Reid',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.away
  },
  {
    key: 34,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AR',
    text: 'Aaron Reed',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 35,
    imageUrl: './images/persona-female.png',
    imageInitials: 'AL',
    text: 'Alix Lindberg',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 36,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AL',
    text: 'Alan Lindberg',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.busy
  },
  {
    key: 37,
    imageUrl: './images/persona-male.png',
    imageInitials: 'MS',
    text: 'Maor Sharit',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.offline
  },
  {
    key: 38,
    imageUrl: './images/persona-male.png',
    imageInitials: 'MS',
    text: 'Maorr Sherit',
    secondaryText: 'UX Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 39,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AL',
    text: 'Alex Lindbirg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.dnd
  },
  {
    key: 40,
    imageUrl: './images/persona-male.png',
    imageInitials: 'AL',
    text: 'Alex Lindbarg',
    secondaryText: 'Software Developer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    isValid: true,
    presence: PersonaPresence.online
  },
  {
    key: 41,
    imageInitials: 'GO',
    text: 'Group One',
    canExpand: true,
    isValid: true
  },
  {
    key: 42,
    imageInitials: 'GT',
    text: 'Group Two',
    canExpand: true,
    isValid: true
  }
];

/** @internal */
export const mru = people.slice(0, 5);

/** @internal */
export const groupOne = people.slice(6, 10);

/** @internal */
export const groupTwo = people.slice(11, 16);
