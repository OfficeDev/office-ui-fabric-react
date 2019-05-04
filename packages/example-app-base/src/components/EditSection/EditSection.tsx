import * as React from 'react';
import { IEditSectionProps, IEditSectionStyleProps, IEditSectionStyles } from './EditSection.types';
import { IconButton, TooltipHost } from 'office-ui-fabric-react';
import { IStyleFunction, classNamesFunction, styled, css } from 'office-ui-fabric-react/lib/Utilities';
import { pascalize } from '../../utilities/string';

const getStyles: IStyleFunction<IEditSectionStyleProps, IEditSectionStyles> = () => ({});

const getClassNames = classNamesFunction<IEditSectionStyleProps, IEditSectionStyles>();

/**
 * Component for displaying an edit button next to a section header.
 */
export const EditSectionBase: React.StatelessComponent<IEditSectionProps> = props => {
  const { className, section, title, url, styles, theme } = props;

  // Check if url is falsey.
  if (!url) {
    return null;
  }

  const classNames = getClassNames(styles, { theme: theme! });
  const buttonStyles = classNames.subComponentStyles.button;

  const sectionName = title && title !== section ? `Edit ${title} ${section}` : `Edit ${section}`;
  const tooltipHostId = pascalize(sectionName) + '-editButtonHost';

  return (
    <TooltipHost content={sectionName} id={tooltipHostId} hostClassName={css(classNames.root, className)}>
      <IconButton
        aria-labelledby={tooltipHostId}
        iconProps={{ iconName: 'Edit' }}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        styles={typeof buttonStyles === 'function' ? buttonStyles({}) : buttonStyles}
      />
    </TooltipHost>
  );
};

export const EditSection: React.StatelessComponent<IEditSectionProps> = styled<
  IEditSectionProps,
  IEditSectionStyleProps,
  IEditSectionStyles
>(EditSectionBase, getStyles, undefined, { scope: 'EditSection' });
