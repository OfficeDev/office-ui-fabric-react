// If you are adding a new tile into this site, place make sure it is also being copied from `just.config.ts`

const siteInfo = [
  {
    package: '@fluentui/public-docsite-resources',
    link: './public-docsite-resources/demo/index.html',
    icon: 'FavoriteStar',
    title: '@fluentui/react demo',
  },
  {
    package: '@fluentui/react',
    link: './react/storybook/index.html',
    icon: 'FavoriteStar',
    title: '@fluentui/react storybook',
  },
  {
    package: '@fluentui/public-docsite',
    link: './public-docsite/index.html?devhost',
    icon: 'Website',
    title: 'Website',
  },
  {
    package: '@fluentui/docs',
    link: './react-northstar',
    icon: 'FavoriteStar',
    title: 'react-northstar',
  },
  {
    package: '@fluentui/react-avatar',
    link: './react-avatar/storybook/index.html',
    icon: 'Contact',
    title: 'Avatar',
  },
  {
    package: '@fluentui/react-button',
    link: './react-button/storybook/index.html',
    icon: 'LikeSolid',
    title: 'Button',
  },
  {
    package: '@fluentui/react-checkbox',
    link: './react-checkbox/storybook/index.html',
    icon: 'CheckboxComposite',
    title: 'Checkbox',
  },
  {
    package: '@fluentui/react-image',
    link: './react-image/storybook/index.html',
    icon: 'FileImage',
    title: 'Image',
  },
  {
    package: '@fluentui/react-link',
    link: './react-link/storybook/index.html',
    icon: 'Link',
    title: 'Link',
  },
  {
    package: '@fluentui/react-slider',
    link: './react-slider/storybook/index.html',
    icon: 'Slider',
    title: 'Slider',
  },
  {
    package: '@fluentui/react-tabs',
    link: './react-tabs/storybook/index.html',
    icon: 'BrowserTab',
    title: 'Tabs (Pivot)',
  },
  {
    package: '@fluentui/react-text',
    link: './react-text/storybook/index.html',
    icon: 'TextOverflow',
    title: 'Text',
  },
  {
    package: '@fluentui/react-toggle',
    link: './react-toggle/storybook/index.html',
    icon: 'ToggleLeft',
    title: 'Toggle',
  },
  {
    package: '@uifabric/experiments',
    link: './experiments/demo/index.html',
    icon: 'TestBeaker',
    title: 'Experiments',
  },
  {
    package: '@uifabric/charting',
    link: './charting/demo/index.html',
    icon: 'BarChart4',
    title: 'Charting',
  },
  {
    package: '@uifabric/date-time',
    link: './date-time/storybook/index.html',
    icon: 'PrimaryCalendar',
    title: 'Date/Time',
  },
  {
    package: 'todo-app',
    link: './todo-app/index.html',
    icon: 'CheckMark',
    title: 'Todo Example',
  },
  {
    package: 'theming-designer',
    link: './theming-designer/index.html',
    icon: 'CheckMark',
    title: 'Theme Designer Example',
  },
  {
    package: 'perf-test',
    link: './perf-test/index.html',
    icon: 'SpeedHigh',
    title: 'Perf Tests',
  },
];

var siteLink = document.getElementById('site-list');

window.renderSiteLinks = function(packages) {
  siteInfo.forEach(function(info) {
    if (packages.indexOf(info.package) > -1) {
      var li = document.createElement('LI');
      li.className = 'Tile';
      li.innerHTML = `<a href="${info.link}" class="Tile-link">
        <i class="ms-Icon ms-Icon--${info.icon}"></i>${info.title}
      </a>`;

      siteLink.appendChild(li);
    }
  });
};
