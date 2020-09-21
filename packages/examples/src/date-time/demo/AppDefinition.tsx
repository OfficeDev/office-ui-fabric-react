import { IAppDefinition } from '@uifabric/example-app-base';

export const AppDefinition: IAppDefinition = {
  appTitle: 'Fabric - React',

  testPages: [],
  examplePages: [
    {
      links: [
        {
          component: require('../Calendar/CalendarPage').CalendarPage,
          key: 'Calendar',
          name: 'Calendar',
          url: '#/examples/calendar',
        },
        {
          component: require('../DatePicker/DatePickerPage').DatePickerPage,
          key: 'DatePicker',
          name: 'DatePicker',
          url: '#/examples/datepicker',
        },
        {
          component: require('../WeeklyDayPicker/WeeklyDayPickerPage').WeeklyDayPickerPage,
          key: 'WeeklyDayPicker',
          name: 'WeeklyDayPicker',
          url: '#/examples/weeklydaypicker',
        },
      ],
    },
  ],
  headerLinks: [
    {
      name: 'Getting started',
      url: '#/',
    },
    {
      name: 'Fabric',
      url: 'https://developer.microsoft.com/en-us/fluentui',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/microsoft/fluentui',
    },
  ],
};
