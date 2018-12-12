/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import { classNamesFunction, styled } from '../../../Utilities';

import { ITagItemSuggestionProps, ITagItemSuggestionStyleProps, ITagItemSuggestionStyles } from './TagPicker.types';
import { getStyles } from './TagItemSuggestion.styles';

const getClassNames = classNamesFunction<ITagItemSuggestionStyleProps, ITagItemSuggestionStyles>();

export const TagItemSuggestionBase = (props: ITagItemSuggestionProps) => {
  const { styles, theme, children } = props;

  const classNames = getClassNames(styles, {
    theme: theme!
  });

  return <div className={classNames.suggestionTextOverflow}> {children} </div>;
};

export const TagItemSuggestion = styled<ITagItemSuggestionProps, ITagItemSuggestionStyleProps, ITagItemSuggestionStyles>(
  TagItemSuggestionBase,
  getStyles,
  undefined,
  { scope: 'TagItemSuggestion' }
);
