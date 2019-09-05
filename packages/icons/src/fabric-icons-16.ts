  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

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
      src: `url('${baseUrl}fabric-icons-16-0d3edeb2.woff') format('woff')`
    },
    icons: {
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
      'SkypeSlash': '\uF826',
      'CustomizeToolbar': '\uF828',
      'DuplicateRow': '\uF82A',
      'RemoveFromTrash': '\uF82B',
      'MailOptions': '\uF82C',
      'Childof': '\uF82D',
      'Footer': '\uF82E',
      'Header': '\uF82F',
      'BarChartVerticalFill': '\uF830',
      'StackedColumnChart2Fill': '\uF831',
      'PlainText': '\uF834',
      'AccessibiltyChecker': '\uF835',
      'DatabaseSync': '\uF842',
      'ReservationOrders': '\uF845',
      'TabOneColumn': '\uF849',
      'TabTwoColumn': '\uF84A',
      'TabThreeColumn': '\uF84B',
      'MicrosoftTranslatorLogoGreen': '\uF852'
    }
  };

  registerIcons(subset, options);
}
