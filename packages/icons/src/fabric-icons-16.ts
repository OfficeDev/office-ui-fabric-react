  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling';

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
      fontFamily: `"FabricMDL2Icons-16"`,
      src: `url('${baseUrl}fabric-icons-16-9cf93f3b.woff') format('woff')`
    },
    icons: {
      'OfficeChatSolid': '\uF710',
      'MailSchedule': '\uF72E',
      'WarningSolid': '\uF736',
      'Blocked2Solid': '\uF737',
      'SkypeCircleArrow': '\uF747',
      'SkypeArrow': '\uF748',
      'SyncStatus': '\uF751',
      'SyncStatusSolid': '\uF752',
      'ProjectDocument': '\uF759',
      'ToDoLogoOutline': '\uF75B',
      'VisioOnlineLogoFill32': '\uF75F',
      'VisioOnlineLogo32': '\uF760',
      'VisioOnlineLogoCloud32': '\uF761',
      'VisioDiagramSync': '\uF762',
      'Event12': '\uF763',
      'EventDateMissed12': '\uF764',
      'UserOptional': '\uF767',
      'ResponsesMenu': '\uF768',
      'DoubleDownArrow': '\uF769',
      'DistributeDown': '\uF76A',
      'BookmarkReport': '\uF76B',
      'FilterSettings': '\uF76C',
      'GripperDotsVertical': '\uF772',
      'MailAttached': '\uF774',
      'AddIn': '\uF775',
      'LinkedDatabase': '\uF779',
      'TableLink': '\uF77A',
      'PromotedDatabase': '\uF77D',
      'BarChartVerticalFilter': '\uF77E',
      'BarChartVerticalFilterSolid': '\uF77F',
      'MicOff2': '\uF781',
      'MicrosoftTranslatorLogo': '\uF782',
      'ShowTimeAs': '\uF787',
      'FileRequest': '\uF789',
      'WorkItemAlert': '\uF78F',
      'PowerBILogo16': '\uF790',
      'PowerBILogoBackplate16': '\uF791',
      'BulletedListText': '\uF792',
      'BulletedListBullet': '\uF793',
      'BulletedListTextMirrored': '\uF794',
      'BulletedListBulletMirrored': '\uF795',
      'NumberedListText': '\uF796',
      'NumberedListNumber': '\uF797',
      'NumberedListTextMirrored': '\uF798',
      'NumberedListNumberMirrored': '\uF799',
      'RemoveLinkChain': '\uF79A',
      'RemoveLinkX': '\uF79B',
      'FabricTextHighlight': '\uF79C',
      'ClearFormattingA': '\uF79D',
      'ClearFormattingEraser': '\uF79E',
      'Photo2Fill': '\uF79F',
      'IncreaseIndentText': '\uF7A0',
      'IncreaseIndentArrow': '\uF7A1',
      'DecreaseIndentText': '\uF7A2',
      'DecreaseIndentArrow': '\uF7A3',
      'IncreaseIndentTextMirrored': '\uF7A4',
      'IncreaseIndentArrowMirrored': '\uF7A5',
      'DecreaseIndentTextMirrored': '\uF7A6',
      'DecreaseIndentArrowMirrored': '\uF7A7',
      'CheckListText': '\uF7A8',
      'CheckListCheck': '\uF7A9',
      'CheckListTextMirrored': '\uF7AA',
      'CheckListCheckMirrored': '\uF7AB',
      'NumberSymbol': '\uF7AC',
      'Coupon': '\uF7BC',
      'VerifiedBrand': '\uF7BD',
      'ReleaseGate': '\uF7BE',
      'ReleaseGateCheck': '\uF7BF',
      'ReleaseGateError': '\uF7C0',
      'M365InvoicingLogo': '\uF7C1',
      'RemoveFromShoppingList': '\uF7D5',
      'ShieldAlert': '\uF7D7',
      'FabricTextHighlightComposite': '\uF7DA',
      'Dataflows': '\uF7DD',
      'GenericScanFilled': '\uF7DE',
      'DiagnosticDataBarTooltip': '\uF7DF',
      'SaveToMobile': '\uF7E0',
      'Orientation2': '\uF7E1',
      'ScreenCast': '\uF7E2',
      'ShowGrid': '\uF7E3',
      'SnapToGrid': '\uF7E4',
      'ContactList': '\uF7E5',
      'NewMail': '\uF7EA',
      'EyeShadow': '\uF7EB',
      'FabricFolderConfirm': '\uF7FF',
      'InformationBarriers': '\uF803',
      'CommentActive': '\uF804',
      'ColumnVerticalSectionEdit': '\uF806',
      'WavingHand': '\uF807',
      'ShakeDevice': '\uF80A',
      'SmartGlassRemote': '\uF80B',
      'Rotate90Clockwise': '\uF80D',
      'Rotate90CounterClockwise': '\uF80E',
      'CampaignTemplate': '\uF811',
      'ChartTemplate': '\uF812',
      'PageListFilter': '\uF813',
      'SecondaryNav': '\uF814',
      'ColumnVerticalSection': '\uF81E',
      'SkypeCircleSlash': '\uF825',
      'SkypeSlash': '\uF826'
    }
  };

  registerIcons(subset, options);
}
