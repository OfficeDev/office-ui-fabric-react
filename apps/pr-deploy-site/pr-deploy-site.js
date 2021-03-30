// @ts-check
// If you are adding a new tile into this site, place make sure it is also being copied from `just.config.ts`

// A build step will replace this with the list of actual built packages
/** @type {string[]} */
var packages;

var siteInfo = [
  {
    package: '@uifabric/fabric-website-resources',
    link: './fabric-website-resources/dist/index.html',
    icon: 'FavoriteStar',
    title: 'Demo Site',
  },
  {
    package: '@uifabric/fabric-website-resources',
    link: './office-ui-fabric-react/dist-storybook/index.html',
    icon: 'FavoriteStar',
    title: 'Fabric Storybook Site',
  },
  {
    package: '@uifabric/fabric-website',
    link: './fabric-website/dist/index.html?devhost',
    icon: 'Website',
    title: 'Website',
  },
  {
    package: '@fluentui/react-button',
    link: './react-button/dist-storybook/index.html',
    icon: 'LikeSolid',
    title: 'Button',
  },
  { package: '@uifabric/experiments', link: './experiments/dist/index.html', icon: 'TestBeaker', title: 'Experiments' },
  { package: '@uifabric/charting', link: './charting/dist/index.html', icon: 'BarChart4', title: 'Charting' },
  { package: '@uifabric/date-time', link: './date-time/dist/index.html', icon: 'PrimaryCalendar', title: 'Date/Time' },
  { package: 'todo-app', link: './todo-app/index.html', icon: 'CheckMark', title: 'Todo Example' },
  {
    package: 'theming-designer',
    link: './theming-designer/index.html',
    icon: 'CheckMark',
    title: 'Theme Designer Example',
  },
  { package: 'perf-test', link: './perf-test/index.html', icon: 'SpeedHigh', title: 'Perf Tests' },
];

// location.pathname will be like /pull/17568/ or /heads/7.0/
var hrefMatch = window.location.pathname.match(/^\/(pull|heads)\/([^/]+)/);
var repoUrl = 'https://github.com/microsoft/fluentui';
if (hrefMatch) {
  var link = /** @type {HTMLAnchorElement} */ (document.getElementById('prLink'));
  if (hrefMatch[1] === 'heads') {
    // master or other branch CI
    link.innerHTML = hrefMatch[2];
    link.href = repoUrl + '/tree/' + hrefMatch[2];
    // remove the PR-specific explanation
    var prExplanation = document.getElementById('prExplanation');
    prExplanation.parentElement.removeChild(prExplanation);
  } else {
    // PR
    link.innerHTML = 'PR #' + hrefMatch[2];
    link.href = repoUrl + '/pull/' + hrefMatch[2];
  }
}

var siteLink = document.getElementById('site-list');

siteInfo.forEach(function(info) {
  if (packages.indexOf(info.package) > -1) {
    var li = document.createElement('LI');
    li.className = 'Tile';
    li.innerHTML =
      '<a href="' +
      info.link +
      '" class="Tile-link">' +
      '<i class="ms-Icon ms-Icon--' +
      info.icon +
      '"></i>' +
      info.title +
      '</a>';

    siteLink.appendChild(li);
  }
});
