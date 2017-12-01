// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling/lib/index';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-5"`,
      src: `url('${baseUrl}fabric-icons-5-5bc71068.woff') format('woff')`, 
    },
    icons: {
      'SocialListeningLogo': '\uED7C',
      'VisioLogoInverse': '\uED7D',
      'Balloons': '\uED7E',
      'Cat': '\uED7F',
      'MailAlert': '\uED80',
      'MailCheck': '\uED81',
      'MailLowImportance': '\uED82',
      'MailPause': '\uED83',
      'MailRepeat': '\uED84',
      'SecurityGroup': '\uED85',
      'Table': '\uED86',
      'VoicemailForward': '\uED87',
      'VoicemailReply': '\uED88',
      'Waffle': '\uED89',
      'RemoveEvent': '\uED8A',
      'EventInfo': '\uED8B',
      'ForwardEvent': '\uED8C',
      'WipePhone': '\uED8D',
      'AddOnlineMeeting': '\uED8E',
      'JoinOnlineMeeting': '\uED8F',
      'RemoveLink': '\uED90',
      'PeopleBlock': '\uED91',
      'PeopleRepeat': '\uED92',
      'PeopleAlert': '\uED93',
      'PeoplePause': '\uED94',
      'TransferCall': '\uED95',
      'AddPhone': '\uED96',
      'UnknownCall': '\uED97',
      'NoteReply': '\uED98',
      'NoteForward': '\uED99',
      'NotePinned': '\uED9A',
      'RemoveOccurrence': '\uED9B',
      'Timeline': '\uED9C',
      'EditNote': '\uED9D',
      'CircleHalfFull': '\uED9E',
      'Room': '\uED9F',
      'Unsubscribe': '\uEDA0',
      'Subscribe': '\uEDA1',
      'RecurringTask': '\uEDB2',
      'TaskManager': '\uEDB7',
      'TaskManagerMirrored': '\uEDB8',
      'Combine': '\uEDBB',
      'Split': '\uEDBC',
      'DoubleChevronUp': '\uEDBD',
      'DoubleChevronLeft': '\uEDBE',
      'DoubleChevronRight': '\uEDBF',
      'TextBox': '\uEDC2',
      'TextField': '\uEDC3',
      'NumberField': '\uEDC4',
      'Dropdown': '\uEDC5',
      'BookingsLogo': '\uEDC7',
      'ClassNotebookLogoInverse': '\uEDC8',
      'DelveAnalyticsLogo': '\uEDCA',
      'DocsLogoInverse': '\uEDCB',
      'Dynamics365Logo': '\uEDCC',
      'DynamicSMBLogo': '\uEDCD',
      'OfficeAssistantLogo': '\uEDCE',
      'OfficeStoreLogo': '\uEDCF',
      'OneNoteEduLogoInverse': '\uEDD0',
      'PlannerLogo': '\uEDD1',
      'PowerApps': '\uEDD2',
      'Suitcase': '\uEDD3',
      'ProjectLogoInverse': '\uEDD4',
      'CaretLeft8': '\uEDD5',
      'CaretRight8': '\uEDD6',
      'CaretUp8': '\uEDD7',
      'CaretDown8': '\uEDD8',
      'CaretLeftSolid8': '\uEDD9',
      'CaretRightSolid8': '\uEDDA',
      'CaretUpSolid8': '\uEDDB',
      'CaretDownSolid8': '\uEDDC',
      'ClearFormatting': '\uEDDD',
      'Superscript': '\uEDDE',
      'Subscript': '\uEDDF',
      'Strikethrough': '\uEDE0',
      'Export': '\uEDE1',
      'ExportMirrored': '\uEDE2',
      'SingleBookmark': '\uEDFF',
      'DoubleChevronDown': '\uEE04',
      'ReplyAll': '\uEE0A',
      'Questionnaire': '\uEE19',
      'ReplyMirrored': '\uEE35',
      'ReplyAllMirrored': '\uEE36',
      'AddGroup': '\uEE3D',
      'QuestionnaireMirrored': '\uEE4B',
      'TemporaryUser': '\uEE58',
      'CaretSolid16': '\uEE62',
      'GroupedDescending': '\uEE66',
      'GroupedAscending': '\uEE67',
      'AwayStatus': '\uEE6A',
      'MyMoviesTV': '\uEE6C',
      'AustralianRules': '\uEE70',
      'WifiEthernet': '\uEE77',
      'DateTimeMirrored': '\uEE93',
      'StopSolid': '\uEE95',
      'DoubleChevronUp12': '\uEE96',
      'DoubleChevronDown12': '\uEE97',
      'DoubleChevronLeft12': '\uEE98',
      'DoubleChevronRight12': '\uEE99'
    }
  };

  registerIcons(subset, options);
}
