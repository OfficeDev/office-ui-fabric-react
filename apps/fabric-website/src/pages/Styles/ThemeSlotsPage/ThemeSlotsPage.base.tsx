import * as React from 'react';
import { classNamesFunction } from 'office-ui-fabric-react';
import {
  Page,
  PlatformContext,
  IPageSectionProps,
  MarkdownHeader,
  ColorPalette,
} from '@uifabric/example-app-base/lib/index2';
import { Platforms } from '../../../interfaces/Platforms';
import { getSubTitle } from '../../../utilities/index';
import { IThemeSlotsPageProps, IThemeSlotsPageStyles, IThemeSlotsPageStyleProps } from './ThemeSlotsPage.types';
import { ThemeSlotsPageProps } from './ThemeSlotsPage.doc';

// Color palettes
import * as themeColors from '../../../data/colors-theme-slots.json';
import * as neutralColors from '../../../data/colors-theme-neutrals.json';
import * as accentColors from '../../../data/colors-theme-accents.json';

const getClassNames = classNamesFunction<IThemeSlotsPageStyleProps, IThemeSlotsPageStyles>();
const baseUrl =
  'https://onedrive.visualstudio.com/Design/_git/ui-fabric-website?path=/apps/fabric-website/src/pages/Styles/';

export const ThemeSlotsPageBase: React.FunctionComponent<IThemeSlotsPageProps> = props => {
  const { theme, styles, className } = props;
  const classNames = getClassNames(styles, { theme, className });

  return (
    <PlatformContext.Consumer>
      {(platform: Platforms) => {
        return (
          <Page
            {...props}
            title="Theme Slots"
            {...ThemeSlotsPageProps[platform]}
            subTitle={getSubTitle(platform)}
            otherSections={_otherSections(platform)}
            className={classNames.root}
          />
        );
      }}
    </PlatformContext.Consumer>
  );
};

// Method that returns array of sections. Renders in the order defined.
function _otherSections(platform: Platforms): IPageSectionProps[] {
  switch (platform) {
    case 'web':
      return [
        {
          sectionName: 'Color palettes',
          content: (
            <>
              <MarkdownHeader as="h3">Theme colors</MarkdownHeader>
              <ColorPalette colors={themeColors} />

              <MarkdownHeader as="h3">Neutral colors</MarkdownHeader>
              <ColorPalette colors={neutralColors} />

              <MarkdownHeader as="h3">Accent colors</MarkdownHeader>
              <ColorPalette colors={accentColors} />
            </>
          ),
        },
        {
          sectionName: 'Implementation',
          editUrl: baseUrl + 'docs/web/ThemeSlotsImplementation.md',
          content: require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/ThemeSlotsPage/docs/web/ThemeSlotsImplementation.md') as string,
        },
      ];

    default:
      return [];
  }
}
