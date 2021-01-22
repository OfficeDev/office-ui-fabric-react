import * as React from 'react';
import { Pivot, PivotItem } from 'office-ui-fabric-react';
import { IconGrid } from '../../../components/IconGrid/IconGrid';
import { IPageSectionProps } from '@uifabric/example-app-base/lib/index2';
import { IStylesPageProps, StylesAreaPage } from '../StylesAreaPage';
import { FabricIconsPageProps } from './FabricIconsPage.doc';
import * as styles from './FabricIconsPage.module.scss';
import { Platforms } from '../../../interfaces/Platforms';
import * as MDL2Icons from '@fluentui/react-icons';

const baseUrl =
  'https://github.com/microsoft/fluentui/tree/7.0/apps/fabric-website/src/pages/Styles/FabricIconsPage/docs';
const fabricCoreIcons = require('office-ui-fabric-core/src/data/icons.json');
const fabricReactIcons = require('@uifabric/icons/lib/data/AllIconNames.json');
const fabricSVGIcons = [];
for (const iconName in MDL2Icons) {
  if (MDL2Icons.hasOwnProperty(iconName)) {
    const component = MDL2Icons[iconName];
    if (
      typeof component === 'function' &&
      iconName !== 'createSvgIcon' &&
      String(component).indexOf('return React.createElement') !== -1
    ) {
      component.key = 'iconName';
      fabricSVGIcons.push({ name: iconName, value: component({}) });
    }
  }
}
// en dashes look like regular dashes in a monospace font
const enDash = '–';

export const FabricIconsPage: React.FunctionComponent<IStylesPageProps> = props => {
  const { platform } = props;
  return (
    <StylesAreaPage
      {...props}
      {...FabricIconsPageProps[platform]}
      otherSections={_otherSections(platform) as IPageSectionProps[]}
    />
  );
};

function _otherSections(platform: Platforms): IPageSectionProps<Platforms>[] {
  switch (platform) {
    case 'web':
      return [
        {
          sectionName: 'Usage',
          editUrl: `${baseUrl}/web/FabricIconsUsage.md`,
          content: require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/FabricIconsPage/docs/web/FabricIconsUsage.md') as string,
          jumpLinks: [
            // prettier-ignore
            { text: enDash + ' Fluent UI React (font)', url: 'fluent-ui-react-font-based-icons' },
            { text: enDash + ' Fluent UI React (SVG)', url: 'fluent-ui-react-svg-based-icons' },
            { text: enDash + ' Fabric Core', url: 'fabric-core' },
            { text: enDash + ' Fluent UI Icons tool', url: 'fluent-ui-icons-tool' },
          ],
        },

        {
          sectionName: 'Available icons',
          content: (
            <Pivot>
              <PivotItem headerText="Fluent UI React (font-based)" className={styles.iconGrid}>
                <IconGrid icons={fabricReactIcons} useIconsType="fabric-font" />
              </PivotItem>
              <PivotItem headerText="Fluent UI React (svg-based)" className={styles.iconGrid}>
                <IconGrid icons={fabricSVGIcons} useIconsType="fabric-svg" />
              </PivotItem>
              <PivotItem headerText="Fabric Core" className={styles.iconGrid}>
                <IconGrid icons={fabricCoreIcons} useIconsType="fabric-core" />
              </PivotItem>
            </Pivot>
          ),
        },
      ];

    default:
      return [
        {
          sectionName: 'Coming Soon',
          content: 'Coming Soon',
        },
      ];
  }
}
