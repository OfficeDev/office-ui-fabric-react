import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { ResizeGroup, IResizeGroupState, getNextResizeGroupStateProvider, getMeasurementCache } from './ResizeGroup';
import * as sinon from 'sinon';

function getRequiredResizeGroupProps() {
  return {
    onReduceData: sinon.stub(),
    onRenderData: sinon.stub()
  };
}

describe('ResizeGroup', () => {
  describe('getNextResizeGroupStateProvider', () => {
    it('does not provide a new state when there is no container width provided or data to measure', () => {
      const resizeGroupProps = getRequiredResizeGroupProps();
      const resizeGroupState: IResizeGroupState = {};
      const getNextResizeGroupState = getNextResizeGroupStateProvider();
      const getMeasuredElementWidthStub = sinon.stub();

      let result = getNextResizeGroupState(resizeGroupProps,
        resizeGroupState,
        getMeasuredElementWidthStub);

      expect(result).to.equal(undefined);
      expect(getMeasuredElementWidthStub.callCount).to.equal(0);
    });
    it('sets the renderedData when the contents fit', () => {
      const dataToMeasure = { foo: 'bar' };
      const resizeGroupProps = getRequiredResizeGroupProps();
      const resizeGroupState: IResizeGroupState = { dataToMeasure, resizeDirection: 'shrink' };
      const getNextResizeGroupState = getNextResizeGroupStateProvider();
      const getMeasuredElementWidthStub = sinon.stub();
      getMeasuredElementWidthStub.returns(25);

      let result = getNextResizeGroupState(resizeGroupProps,
        resizeGroupState,
        getMeasuredElementWidthStub,
        50);

      expect(result).to.deep.equal({
        renderedData: dataToMeasure,
        measureContainer: false,
        dataToMeasure: undefined,
        resizeDirection: undefined
      });
      expect(getMeasuredElementWidthStub.callCount).to.equal(1);
    });
    it('calls onReduceData and sets the next measuredData when contents do not fit', () => {
      const dataToMeasure = { index: 5 };
      const resizeGroupProps = getRequiredResizeGroupProps();
      const resizeGroupState: IResizeGroupState = { dataToMeasure, resizeDirection: 'shrink' };
      resizeGroupProps.onReduceData.returns({ index: 4 });
      const getNextResizeGroupState = getNextResizeGroupStateProvider();
      const getMeasuredElementWidthStub = sinon.stub();
      getMeasuredElementWidthStub.returns(25);

      let result = getNextResizeGroupState(resizeGroupProps,
        resizeGroupState,
        getMeasuredElementWidthStub,
        10);

      expect(result).to.deep.equal({
        measureContainer: false,
        dataToMeasure: { index: 4 },
        resizeDirection: 'shrink'
      });
      expect(getMeasuredElementWidthStub.callCount).to.equal(1);
    });
    it('does not call getmeasuredElementBounds when the data has already been cached', () => {
      const dataToMeasure = { index: 5, cacheKey: 'foo' };

      let measurementCache = getMeasurementCache();
      measurementCache.addMeasurementToCache(dataToMeasure, 40);
      const getNextResizeGroupState = getNextResizeGroupStateProvider(measurementCache);

      const resizeGroupProps = getRequiredResizeGroupProps();
      const resizeGroupState: IResizeGroupState = { dataToMeasure, resizeDirection: 'shrink' };
      const measuredElementWidthStub = sinon.stub();

      let result = getNextResizeGroupState(resizeGroupProps,
        resizeGroupState,
        measuredElementWidthStub,
        100);

      expect(result).to.deep.equal({
        renderedData: dataToMeasure,
        measureContainer: false,
        dataToMeasure: undefined,
        resizeDirection: undefined
      });
      expect(measuredElementWidthStub.callCount).to.equal(0);
    });
  });
});
