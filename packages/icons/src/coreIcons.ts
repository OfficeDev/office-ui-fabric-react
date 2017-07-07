import { registerIcons } from '@uifabric/styling';

const icons = {
    'Cancel': '\uE711',

    // Various scenarios.
    'ChevronDown': '\uE70D',
    'ChevronLeft': '\uE76B',
    'ChevronRight': '\uE76C',
    'ChevronUp': '\uE70E',

    // Persona
    'SkypeCheck': '\uEF80',
    'SkypeClock': '\uEF81',
    'SkypeMinus': '\uEF82',

    // Search box
    'Clear': '\uE894',
    'Search': '\uE721',

    // Rating
    'FavoriteStar': '\uE734',
    'FavoriteStarFill': '\uE735',

    // Facepile
    'AddFriend': '\uE8FA',

    // GroupHeader
    'Tag': '\uE8EC',

    // Facepile, OverflowSet
    'More': '\uE712',

    // DetailsList
    'Ascending': '\uEDC0',
    'Descending': '\uEDC1',
    'Filter': '\uE71C',
    'Sort': '\uE8CB',
    'SortDown': '\uEE69',
    'SortLines': '\uE9D0',
    'SortUp': '\uEE68',

    // Views
    'LargeGrid': '\uEECB',
    'List': '\uEA37',
    'View': '\uE890',

    // Common commands
    'Add': '\uE710',
    'Download': '\uE896',
    'Calendar': '\uE787',
    'Edit': '\uE70F',
    'Embed': '\uECCE',
    'GlobalNavButton': '\uE700',
    'Info': '\uE946',
    'Mail': '\uE715',
    'Settings': '\uE713',
    'Share': '\uE72D',
    'Tiles': '\uECA5',
    'Upload': '\uE898',

    // Check
    'CircleRing': '\uEA3A',
    'CheckMark': '\uE73E',

};

export function registerCoreIcons() {
    registerIcons({
        fontFamily: `"FabricMDL2Icons-core"`,
        // tslint:disable-next-line:max-line-length
        src: `
url('data:application/octet-stream;base64,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') format('truetype')
`,
        icons
    });
}