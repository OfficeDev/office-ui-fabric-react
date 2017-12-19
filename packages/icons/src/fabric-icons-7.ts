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
      fontFamily: `"FabricMDL2Icons-7"`,
      src: `url('${baseUrl}fabric-icons-7-1bae3315.woff') format('woff')`,
    },
    icons: {
      'PageCheckedOut': '\uF02C',
      'SaveAndClose': '\uF038',
      'Script': '\uF03A',
      'Archive': '\uF03F',
      'ActivityFeed': '\uF056',
      'EventDate': '\uF059',
      'CaretRight': '\uF06B',
      'SetAction': '\uF071',
      'CaretSolidLeft': '\uF08D',
      'CaretSolidDown': '\uF08E',
      'CaretSolidRight': '\uF08F',
      'CaretSolidUp': '\uF090',
      'PowerAppsLogo': '\uF091',
      'PowerApps2Logo': '\uF092',
      'SearchIssue': '\uF09A',
      'SearchIssueMirrored': '\uF09B',
      'FabricAssetLibrary': '\uF09C',
      'FabricDataConnectionLibrary': '\uF09D',
      'FabricDocLibrary': '\uF09E',
      'FabricFormLibrary': '\uF09F',
      'FabricFormLibraryMirrored': '\uF0A0',
      'FabricReportLibrary': '\uF0A1',
      'FabricReportLibraryMirrored': '\uF0A2',
      'FabricPublicFolder': '\uF0A3',
      'FabricFolderSearch': '\uF0A4',
      'FabricMovetoFolder': '\uF0A5',
      'FabricUnsyncFolder': '\uF0A6',
      'FabricSyncFolder': '\uF0A7',
      'FabricOpenFolderHorizontal': '\uF0A8',
      'FabricFolder': '\uF0A9',
      'FabricFolderFill': '\uF0AA',
      'FabricNewFolder': '\uF0AB',
      'FabricPictureLibrary': '\uF0AC',
      'AddFavorite': '\uF0C8',
      'AddFavoriteFill': '\uF0C9',
      'BufferTimeBefore': '\uF0CF',
      'BufferTimeAfter': '\uF0D0',
      'BufferTimeBoth': '\uF0D1',
      'CannedChat': '\uF0F2',
      'SkypeForBusinessLogo': '\uF0FC',
      'PageCheckedin': '\uF104',
      'CaretBottomLeftSolid8': '\uF121',
      'CaretBottomRightSolid8': '\uF122',
      'FolderHorizontal': '\uF12B',
      'MicrosoftStaffhubLogo': '\uF130',
      'GiftboxOpen': '\uF133',
      'StatusCircleOuter': '\uF136',
      'StatusCircleInner': '\uF137',
      'ExploreContentSingle': '\uF164',
      'CollapseContent': '\uF165',
      'CollapseContentSingle': '\uF166',
      'InfoSolid': '\uF167',
      'ProgressRingDots': '\uF16A',
      'CaloriesAdd': '\uF172',
      'BranchFork': '\uF173',
      'HardDriveGroup': '\uF18F',
      'BucketColor': '\uF1B6',
      'BucketColorFill': '\uF1B7',
      'Taskboard': '\uF1C2',
      'SingleColumn': '\uF1D3',
      'DoubleColumn': '\uF1D4',
      'TripleColumn': '\uF1D5',
      'ColumnLeftTwoThirds': '\uF1D6',
      'ColumnRightTwoThirds': '\uF1D7',
      'AccessLogoFill': '\uF1DB',
      'AnalyticsLogo': '\uF1DE',
      'AnalyticsQuery': '\uF1DF',
      'NewAnalyticsQuery': '\uF1E0',
      'AnalyticsReport': '\uF1E1',
      'WordLogo': '\uF1E3',
      'WordLogoFill': '\uF1E4',
      'ExcelLogo': '\uF1E5',
      'ExcelLogoFill': '\uF1E6',
      'OneNoteLogo': '\uF1E7',
      'OneNoteLogoFill': '\uF1E8',
      'OutlookLogo': '\uF1E9',
      'OutlookLogoFill': '\uF1EA',
      'PowerPointLogo': '\uF1EB',
      'PowerPointLogoFill': '\uF1EC',
      'PublisherLogo': '\uF1ED',
      'PublisherLogoFill': '\uF1EE',
      'ScheduleEventAction': '\uF1EF',
      'FlameSolid': '\uF1F3',
      'ServerProcesses': '\uF1FE',
      'Server': '\uF201',
      'SaveAll': '\uF203',
      'LinkedInLogo': '\uF20A',
      'SidePanelMirrored': '\uF221',
      'ProtectRestrict': '\uF22A',
      'GridViewSmall': '\uF232',
      'GridViewMedium': '\uF233',
      'GridViewLarge': '\uF234',
      'Step': '\uF241',
      'StepInsert': '\uF242',
      'StepShared': '\uF243',
      'StepSharedAdd': '\uF244',
      'StepSharedInsert': '\uF245',
      'ViewDashboard': '\uF246',
      'ViewList': '\uF247',
      'ViewListGroup': '\uF248'
    }
  };

  registerIcons(subset, options);
}
