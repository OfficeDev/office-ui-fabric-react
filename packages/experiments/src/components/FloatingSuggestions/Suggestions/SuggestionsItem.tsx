import * as React from 'react';

import { classNamesFunction, css, styled } from 'office-ui-fabric-react/lib/Utilities';
import { IProcessedStyleSet } from 'office-ui-fabric-react/lib/Styling';
import { CommandButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { ISuggestionItemProps, ISuggestionsItemStyleProps, ISuggestionsItemStyles } from './SuggestionsItem.types';
import { getStyles } from './SuggestionsItem.styles';

const getClassNames = classNamesFunction<ISuggestionsItemStyleProps, ISuggestionsItemStyles>();

// `extends any` to trick the parser into parsing as a type decl instead of a jsx tag
export const SuggestionsItemInner = <TSuggestion extends any>(props: ISuggestionItemProps<TSuggestion>) => {
  const {
    suggestionModel,
    onRenderSuggestion: RenderSuggestion,
    onClick,
    className,
    onRemoveItem,
    isSelectedOverride,
    removeButtonAriaLabel,
    styles,
    theme
  } = props;

  const classNames: Partial<IProcessedStyleSet<ISuggestionsItemStyles>> = styles
    ? // TODO don't do this horrible hack to get around `styled` typing problems.
      getClassNames(styles || getStyles, {
        theme: theme!,
        className,
        suggested: suggestionModel.selected || isSelectedOverride
      })
    : {
        itemButton: css('ms-Suggestions-itemButton'),
        closeButton: css('ms-Suggestions-closeButton')
      };

  return (
    <div className={classNames.root}>
      <CommandButton onClick={onClick} className={classNames.itemButton}>
        <RenderSuggestion {...props.suggestionModel} />
      </CommandButton>
      {props.showRemoveButton ? (
        <IconButton
          iconProps={{ iconName: 'Cancel', styles: { root: { fontSize: '12px' } } }}
          title={removeButtonAriaLabel}
          ariaLabel={removeButtonAriaLabel}
          onClick={onRemoveItem}
          className={classNames.closeButton}
        />
      ) : null}
    </div>
  );
};

export const SuggestionsItem = styled(SuggestionsItemInner, getStyles);
export type SuggestionsItem<T> = React.ComponentType<ISuggestionItemProps<T>>;
