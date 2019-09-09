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
      fontFamily: `"FabricMDL2Icons-5"`,
      src: `url('${baseUrl}fabric-icons-5-03ad3f64.woff') format('woff')`
    },
    icons: {
      'F12DevTools': '\uEBEE',
      'CSS': '\uEBEF',
      'JS': '\uEBF0',
      'DeliveryTruck': '\uEBF4',
      'ReminderPerson': '\uEBF7',
      'ReminderGroup': '\uEBF8',
      'TabletMode': '\uEBFC',
      'Umbrella': '\uEC04',
      'NetworkTower': '\uEC05',
      'CityNext': '\uEC06',
      'CityNext2': '\uEC07',
      'Section': '\uEC0C',
      'OneNoteLogoInverse': '\uEC0D',
      'ToggleFilled': '\uEC11',
      'ToggleBorder': '\uEC12',
      'SliderThumb': '\uEC13',
      'ToggleThumb': '\uEC14',
      'Documentation': '\uEC17',
      'Badge': '\uEC1B',
      'Giftbox': '\uEC1F',
      'VisualStudioLogo': '\uEC22',
      'HomeGroup': '\uEC26',
      'ExcelLogoInverse': '\uEC28',
      'WordLogoInverse': '\uEC29',
      'PowerPointLogoInverse': '\uEC2A',
      'Cafe': '\uEC32',
      'SpeedHigh': '\uEC4A',
      'Commitments': '\uEC4D',
      'ThisPC': '\uEC4E',
      'MusicNote': '\uEC4F',
      'MicOff': '\uEC54',
      'PlaybackRate1x': '\uEC57',
      'EdgeLogo': '\uEC60',
      'CompletedSolid': '\uEC61',
      'AlbumRemove': '\uEC62',
      'MessageFill': '\uEC70',
      'TabletSelected': '\uEC74',
      'MobileSelected': '\uEC75',
      'LaptopSelected': '\uEC76',
      'TVMonitorSelected': '\uEC77',
      'DeveloperTools': '\uEC7A',
      'Shapes': '\uEC7C',
      'InsertTextBox': '\uEC7D',
      'LowerBrightness': '\uEC8A',
      'WebComponents': '\uEC8B',
      'OfflineStorage': '\uEC8C',
      'DOM': '\uEC8D',
      'CloudUpload': '\uEC8E',
      'ScrollUpDown': '\uEC8F',
      'DateTime': '\uEC92',
      'Event': '\uECA3',
      'Cake': '\uECA4',
      'Org': '\uECA6',
      'PartyLeader': '\uECA7',
      'DRM': '\uECA8',
      'CloudAdd': '\uECA9',
      'AppIconDefault': '\uECAA',
      'Photo2Add': '\uECAB',
      'Photo2Remove': '\uECAC',
      'Calories': '\uECAD',
      'POI': '\uECAF',
      'AddTo': '\uECC8',
      'RadioBtnOff': '\uECCA',
      'RadioBtnOn': '\uECCB',
      'ExploreContent': '\uECCD',
      'Product': '\uECDC',
      'ProgressLoopInner': '\uECDE',
      'ProgressLoopOuter': '\uECDF',
      'Blocked2': '\uECE4',
      'FangBody': '\uECEB',
      'Toolbox': '\uECED',
      'PageHeader': '\uECEE',
      'ChatInviteFriend': '\uECFE',
      'Brush': '\uECFF',
      'Shirt': '\uED00',
      'Crown': '\uED01',
      'Diamond': '\uED02',
      'ScaleUp': '\uED09',
      'QRCode': '\uED14',
      'Feedback': '\uED15',
      'SharepointLogoInverse': '\uED18',
      'YammerLogo': '\uED19',
      'Hide': '\uED1A',
      'Uneditable': '\uED1D',
      'ReturnToSession': '\uED24',
      'OpenFolderHorizontal': '\uED25',
      'CalendarMirrored': '\uED28',
      'SwayLogoInverse': '\uED29',
      'OutOfOffice': '\uED34',
      'Trophy': '\uED3F',
      'ReopenPages': '\uED50',
      'EmojiTabSymbols': '\uED58',
      'AADLogo': '\uED68',
      'AccessLogo': '\uED69',
      'AdminALogoInverse32': '\uED6A',
      'AdminCLogoInverse32': '\uED6B',
      'AdminDLogoInverse32': '\uED6C',
      'AdminELogoInverse32': '\uED6D',
      'AdminLLogoInverse32': '\uED6E',
      'AdminMLogoInverse32': '\uED6F'
    }
  };

  registerIcons(subset, options);
}
