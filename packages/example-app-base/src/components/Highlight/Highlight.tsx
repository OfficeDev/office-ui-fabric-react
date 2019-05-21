import * as React from 'react';
import { registerLanguage, highlightBlock } from 'highlight.js';
// @ts-ignore
import * as javascript from 'highlight.js/lib/languages/javascript';
import { createRef } from 'office-ui-fabric-react/lib/Utilities';

registerLanguage('javascript', javascript);

export interface IHighlightProps extends React.HTMLAttributes<HTMLDivElement> {
  componentRef?: () => void;
}

/** @deprecated Use `CodeSnippet` instead */
export class Highlight extends React.Component<IHighlightProps, {}> {
  private _codeElement = createRef<HTMLElement>();

  public render(): JSX.Element {
    return (
      <pre>
        <code ref={this._codeElement} className="javascript">
          {this.props.children}
        </code>
      </pre>
    );
  }

  public shouldComponentUpdate(): boolean {
    return false;
  }

  public componentDidMount(): void {
    if (this._codeElement.current) {
      highlightBlock(this._codeElement.current);
    }
  }
}
