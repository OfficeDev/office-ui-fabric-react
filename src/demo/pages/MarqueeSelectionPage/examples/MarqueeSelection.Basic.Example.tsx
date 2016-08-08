/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

import {
  Image,
  Selection,
  MarqueeSelection,
  css
} from '../../../../index';
import { createArray } from '../../../../utilities/array';
import './MarqueeSelection.Basic.Example.scss';

const PHOTOS = createArray(250, () => {
  const randomWidth = 50 + Math.floor(Math.random() * 150);

  return {
    url: `http://placekitten.com/${randomWidth}/100`,
    width: randomWidth,
    height: 100
  };
});

export class MarqueeSelectionBasicExample extends React.Component<{}, {}> {
  private _selection: Selection;
  private _isMounted: boolean;

  constructor() {
    super();

    this._selection = new Selection(() => {
      if (this._isMounted) {
        this.setState({});
      }
    });

    this._selection.setItems(PHOTOS);
  }

  public componentDidMount() {
    this._isMounted = true;
  }

  public render() {
    return (
      <MarqueeSelection selection={ this._selection }>
        <p>Drag a rectangle around the items below to select them:</p>
        <ul className='ms-MarqueeSelectionBasicExample-photoList'>
          { PHOTOS.map((photo, index) => (
            <div
              key={ index }
              className={ css('ms-MarqueeSelectionBasicExample-photoCell', {
                'is-selected': this._selection.isIndexSelected(index)
              }) }
              data-is-focusable={ true }
              data-selection-index={ index }
              onClick={ () => console.log('clicked') }
              style={ { width: photo.width, height: photo.height } }>
              { index }
            </div>
          )) }
        </ul>
      </MarqueeSelection>
    );
  }

}
