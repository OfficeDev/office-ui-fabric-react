// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import { IIconOptions, IIconSubset, registerIcons } from '@uifabric/styling/lib/index';

export function initializeIcons(baseUrl: string = '', options?: IIconOptions): void {
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
      src: `url('${baseUrl}fabric-icons-7-3ac670e6.woff') format('woff')`
    },
    icons: {
      LandscapeOrientation: '\uEF6B',
      DocumentSearch: '\uEF6C',
      PublicCalendar: '\uEF6D',
      PublicContactCard: '\uEF6E',
      PublicEmail: '\uEF6F',
      PublicFolder: '\uEF70',
      WordDocument: '\uEF71',
      PowerPointDocument: '\uEF72',
      ExcelDocument: '\uEF73',
      GroupedList: '\uEF74',
      ClassroomLogo: '\uEF75',
      Sections: '\uEF76',
      EditPhoto: '\uEF77',
      Starburst: '\uEF78',
      ShareiOS: '\uEF79',
      AirTickets: '\uEF7A',
      PencilReply: '\uEF7B',
      Tiles2: '\uEF7C',
      SkypeCircleCheck: '\uEF7D',
      SkypeCircleClock: '\uEF7E',
      SkypeCircleMinus: '\uEF7F',
      SkypeMessage: '\uEF83',
      ClosedCaption: '\uEF84',
      ATPLogo: '\uEF85',
      OfficeFormsLogoInverse: '\uEF86',
      RecycleBin: '\uEF87',
      EmptyRecycleBin: '\uEF88',
      Hide2: '\uEF89',
      Breadcrumb: '\uEF8C',
      BirthdayCake: '\uEF8D',
      TimeEntry: '\uEF95',
      PageEdit: '\uEFB6',
      PageRemove: '\uEFBA',
      Database: '\uEFC7',
      EditContact: '\uEFD3',
      ConnectContacts: '\uEFD4',
      ActivateOrders: '\uEFE0',
      DeactivateOrders: '\uEFE1',
      DocumentManagement: '\uEFFC',
      CRMReport: '\uEFFE',
      ZipFolder: '\uF012',
      SurveyQuestions: '\uF01B',
      TextDocument: '\uF029',
      TextDocumentShared: '\uF02B',
      PageCheckedOut: '\uF02C',
      SaveAndClose: '\uF038',
      Script: '\uF03A',
      Archive: '\uF03F',
      ActivityFeed: '\uF056',
      EventDate: '\uF059',
      ArrowUpRight: '\uF069',
      CaretRight: '\uF06B',
      SetAction: '\uF071',
      CaretSolidLeft: '\uF08D',
      CaretSolidDown: '\uF08E',
      CaretSolidRight: '\uF08F',
      CaretSolidUp: '\uF090',
      PowerAppsLogo: '\uF091',
      PowerApps2Logo: '\uF092',
      SearchIssue: '\uF09A',
      SearchIssueMirrored: '\uF09B',
      FabricAssetLibrary: '\uF09C',
      FabricDataConnectionLibrary: '\uF09D',
      FabricDocLibrary: '\uF09E',
      FabricFormLibrary: '\uF09F',
      FabricFormLibraryMirrored: '\uF0A0',
      FabricReportLibrary: '\uF0A1',
      FabricReportLibraryMirrored: '\uF0A2',
      FabricPublicFolder: '\uF0A3',
      FabricFolderSearch: '\uF0A4',
      FabricMovetoFolder: '\uF0A5',
      FabricUnsyncFolder: '\uF0A6',
      FabricSyncFolder: '\uF0A7',
      FabricOpenFolderHorizontal: '\uF0A8',
      FabricFolder: '\uF0A9',
      FabricFolderFill: '\uF0AA',
      FabricNewFolder: '\uF0AB',
      FabricPictureLibrary: '\uF0AC',
      AddFavorite: '\uF0C8',
      AddFavoriteFill: '\uF0C9',
      BufferTimeBefore: '\uF0CF',
      BufferTimeAfter: '\uF0D0',
      BufferTimeBoth: '\uF0D1',
      CannedChat: '\uF0F2',
      SkypeForBusinessLogo: '\uF0FC',
      PageCheckedin: '\uF104',
      ReadOutLoud: '\uF112',
      CaretBottomLeftSolid8: '\uF121',
      CaretBottomRightSolid8: '\uF122',
      FolderHorizontal: '\uF12B',
      MicrosoftStaffhubLogo: '\uF130',
      GiftboxOpen: '\uF133',
      StatusCircleOuter: '\uF136',
      StatusCircleInner: '\uF137',
      StatusCircleRing: '\uF138',
      StatusTriangleOuter: '\uF139',
      StatusTriangleInner: '\uF13A',
      StatusTriangleExclamation: '\uF13B',
      StatusCircleExclamation: '\uF13C',
      StatusCircleErrorX: '\uF13D'
    }
  };

  registerIcons(subset, options);
}
