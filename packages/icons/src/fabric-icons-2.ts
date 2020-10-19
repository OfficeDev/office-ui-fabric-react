  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@fluentui/style-utilities';

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
      fontFamily: `"FabricMDL2Icons-2"`,
      src: `url('${baseUrl}fabric-icons-2-63c99abf.woff') format('woff')`
    },
    icons: {
      'Picture': '\uE8B9',
      'ChromeClose': '\uE8BB',
      'ShowResults': '\uE8BC',
      'Message': '\uE8BD',
      'CalendarDay': '\uE8BF',
      'CalendarWeek': '\uE8C0',
      'MailReplyAll': '\uE8C2',
      'Read': '\uE8C3',
      'Cut': '\uE8C6',
      'PaymentCard': '\uE8C7',
      'Copy': '\uE8C8',
      'Important': '\uE8C9',
      'MailReply': '\uE8CA',
      'GotoToday': '\uE8D1',
      'Font': '\uE8D2',
      'FontColor': '\uE8D3',
      'FolderFill': '\uE8D5',
      'Permissions': '\uE8D7',
      'DisableUpdates': '\uE8D8',
      'Unfavorite': '\uE8D9',
      'Italic': '\uE8DB',
      'Underline': '\uE8DC',
      'Bold': '\uE8DD',
      'MoveToFolder': '\uE8DE',
      'Dislike': '\uE8E0',
      'Like': '\uE8E1',
      'AlignCenter': '\uE8E3',
      'OpenFile': '\uE8E5',
      'ClearSelection': '\uE8E6',
      'FontDecrease': '\uE8E7',
      'FontIncrease': '\uE8E8',
      'FontSize': '\uE8E9',
      'CellPhone': '\uE8EA',
      'RepeatOne': '\uE8ED',
      'RepeatAll': '\uE8EE',
      'Calculator': '\uE8EF',
      'Library': '\uE8F1',
      'PostUpdate': '\uE8F3',
      'NewFolder': '\uE8F4',
      'CalendarReply': '\uE8F5',
      'UnsyncFolder': '\uE8F6',
      'SyncFolder': '\uE8F7',
      'BlockContact': '\uE8F8',
      'Accept': '\uE8FB',
      'BulletedList': '\uE8FD',
      'Preview': '\uE8FF',
      'News': '\uE900',
      'Chat': '\uE901',
      'Group': '\uE902',
      'World': '\uE909',
      'Comment': '\uE90A',
      'DockLeft': '\uE90C',
      'DockRight': '\uE90D',
      'Repair': '\uE90F',
      'Accounts': '\uE910',
      'Street': '\uE913',
      'RadioBullet': '\uE915',
      'Stopwatch': '\uE916',
      'Clock': '\uE917',
      'WorldClock': '\uE918',
      'AlarmClock': '\uE919',
      'Photo': '\uE91B',
      'ActionCenter': '\uE91C',
      'Hospital': '\uE91D',
      'Timer': '\uE91E',
      'FullCircleMask': '\uE91F',
      'LocationFill': '\uE920',
      'ChromeMinimize': '\uE921',
      'ChromeRestore': '\uE923',
      'Annotation': '\uE924',
      'Fingerprint': '\uE928',
      'Handwriting': '\uE929',
      'ChromeFullScreen': '\uE92D',
      'Completed': '\uE930',
      'Label': '\uE932',
      'FlickDown': '\uE935',
      'FlickUp': '\uE936',
      'FlickLeft': '\uE937',
      'FlickRight': '\uE938',
      'MiniExpand': '\uE93A',
      'MiniContract': '\uE93B',
      'Streaming': '\uE93E',
      'MusicInCollection': '\uE940',
      'OneDriveLogo': '\uE941',
      'CompassNW': '\uE942',
      'Code': '\uE943',
      'LightningBolt': '\uE945',
      'CalculatorMultiply': '\uE947',
      'CalculatorAddition': '\uE948',
      'CalculatorSubtract': '\uE949',
      'CalculatorPercentage': '\uE94C',
      'CalculatorEqualTo': '\uE94E',
      'PrintfaxPrinterFile': '\uE956',
      'StorageOptical': '\uE958',
      'Communications': '\uE95A',
      'Headset': '\uE95B',
      'Health': '\uE95E',
      'Webcam2': '\uE960',
      'FrontCamera': '\uE96B',
      'ChevronUpSmall': '\uE96D'
    }
  };

  registerIcons(subset, options);
}
