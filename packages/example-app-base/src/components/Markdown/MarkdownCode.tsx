import { IStyleFunctionOrObject, IStyleFunction, classNamesFunction, styled } from 'office-ui-fabric-react/lib/Utilities';
import { ITheme, IStyle } from 'office-ui-fabric-react/lib/Styling';
import * as React from 'react';
import { CodeSnippet } from '../CodeSnippet/index';
import { baseCodeStyle } from '../CodeSnippet/CodeSnippet.styles';

export interface IMarkdownCodeProps {
  className?: string;

  theme?: ITheme;
  styles?: IStyleFunctionOrObject<IMarkdownCodeStyleProps, IMarkdownCodeStyles>;
}

export interface IMarkdownCodeStyles {
  root: IStyle;
}

export type IMarkdownCodeStyleProps = {};

const getStyles: IStyleFunction<IMarkdownCodeStyleProps, IMarkdownCodeStyles> = () => {
  return {
    root: {
      ...baseCodeStyle,
      padding: '0 4px',
      border: '1px solid',
      borderRadius: 3
    }
  };
};

const getClassNames = classNamesFunction<IMarkdownCodeStyleProps, IMarkdownCodeStyles>();

const MarkdownCodeBase: React.StatelessComponent<IMarkdownCodeProps> = props => {
  const { className, styles, ...rest } = props;
  const classNames = getClassNames(styles);

  const language = (className || '').replace('lang-', '');
  if (language || (typeof props.children === 'string' && props.children.indexOf('\n') !== -1)) {
    return <CodeSnippet {...rest} language={language} className={className} />;
  }

  return <code className={classNames.root}>{props.children}</code>;
};

export const MarkdownCode: React.StatelessComponent<IMarkdownCodeProps> = styled<
  IMarkdownCodeProps,
  IMarkdownCodeStyleProps,
  IMarkdownCodeStyles
>(MarkdownCodeBase, getStyles);
