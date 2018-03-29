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
      fontFamily: `"FabricMDL2Icons-9"`,
      src: `url('${baseUrl}fabric-icons-9-938d7113.woff') format('woff')`,
    },
    icons: {
      'BranchMerge': '\uF295',
      'BranchPullRequest': '\uF296',
      'BranchSearch': '\uF297',
      'BranchShelveset': '\uF298',
      'RawSource': '\uF299',
      'MergeDuplicate': '\uF29A',
      'RowsGroup': '\uF29B',
      'RowsChild': '\uF29C',
      'Deploy': '\uF29D',
      'Redeploy': '\uF29E',
      'ServerEnviroment': '\uF29F',
      'VisioDiagram': '\uF2A0',
      'HighlightMappedShapes': '\uF2A1',
      'TextCallout': '\uF2A2',
      'IconSetsFlag': '\uF2A4',
      'VisioLogo': '\uF2A7',
      'VisioLogoFill': '\uF2A8',
      'VisioDocument': '\uF2A9',
      'TimelineProgress': '\uF2AA',
      'TimelineDelivery': '\uF2AB',
      'Backlog': '\uF2AC',
      'TeamFavorite': '\uF2AD',
      'TaskGroup': '\uF2AE',
      'TaskGroupMirrored': '\uF2AF',
      'ScopeTemplate': '\uF2B0',
      'AssessmentGroupTemplate': '\uF2B1',
      'NewTeamProject': '\uF2B2',
      'CommentAdd': '\uF2B3',
      'CommentNext': '\uF2B4',
      'CommentPrevious': '\uF2B5',
      'ShopServer': '\uF2B6',
      'LocaleLanguage': '\uF2B7',
      'QueryList': '\uF2B8',
      'UserSync': '\uF2B9',
      'UserPause': '\uF2BA',
      'StreamingOff': '\uF2BB',
      'ArrowTallUpLeft': '\uF2BD',
      'ArrowTallUpRight': '\uF2BE',
      'ArrowTallDownLeft': '\uF2BF',
      'ArrowTallDownRight': '\uF2C0',
      'FieldEmpty': '\uF2C1',
      'FieldFilled': '\uF2C2',
      'FieldChanged': '\uF2C3',
      'FieldNotChanged': '\uF2C4',
      'RingerOff': '\uF2C5',
      'PlayResume': '\uF2C6',
      'BulletedList2': '\uF2C7',
      'BulletedList2Mirrored': '\uF2C8',
      'ImageCrosshair': '\uF2C9',
      'GitGraph': '\uF2CA',
      'Repo': '\uF2CB',
      'RepoSolid': '\uF2CC',
      'FolderQuery': '\uF2CD',
      'FolderList': '\uF2CE',
      'FolderListMirrored': '\uF2CF',
      'LocationOutline': '\uF2D0',
      'POISolid': '\uF2D1',
      'CalculatorNotEqualTo': '\uF2D2',
      'BoxSubtractSolid': '\uF2D3',
      'BoxAdditionSolid': '\uF2D4',
      'BoxMultiplySolid': '\uF2D5',
      'BoxPlaySolid': '\uF2D6',
      'BoxCheckmarkSolid': '\uF2D7',
      'CirclePauseSolid': '\uF2D8',
      'CirclePause': '\uF2D9',
      'MSNVideosSolid': '\uF2DA',
      'CircleStopSolid': '\uF2DB',
      'CircleStop': '\uF2DC',
      'NavigateBack': '\uF2DD',
      'NavigateBackMirrored': '\uF2DE',
      'NavigateForward': '\uF2DF',
      'NavigateForwardMirrored': '\uF2E0',
      'UnknownSolid': '\uF2E1',
      'UnknownMirroredSolid': '\uF2E2',
      'CircleAddition': '\uF2E3',
      'CircleAdditionSolid': '\uF2E4',
      'FilePDB': '\uF2E5',
      'FileTemplate': '\uF2E6',
      'FileSQL': '\uF2E7',
      'FileJAVA': '\uF2E8',
      'FileASPX': '\uF2E9',
      'FileCSS': '\uF2EA',
      'FileSass': '\uF2EB',
      'FileLess': '\uF2EC',
      'FileHTML': '\uF2ED',
      'JavaScriptLanguage': '\uF2EE',
      'CSharpLanguage': '\uF2EF',
      'CSharp': '\uF2F0',
      'VisualBasicLanguage': '\uF2F1',
      'VB': '\uF2F2',
      'CPlusPlusLanguage': '\uF2F3',
      'CPlusPlus': '\uF2F4',
      'FSharpLanguage': '\uF2F5',
      'FSharp': '\uF2F6',
      'TypeScriptLanguage': '\uF2F7',
      'PythonLanguage': '\uF2F8',
      'PY': '\uF2F9',
      'CoffeeScript': '\uF2FA',
      'MarkDownLanguage': '\uF2FB',
      'FullWidth': '\uF2FE'
    }
  };

  registerIcons(subset, options);
}
