import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import { ResizeGroup, IResizeGroupState } from './ResizeGroup';
import * as sinon from 'sinon';
import * as stylesImport from './ResizeGroup.scss';
import { IResizeGroupProps } from './ResizeGroup.Props';
import { runPriorToComponentDidUpdate, getRenderSpy } from '../../utilities/test';
const styles: any = stylesImport;

interface ITestScalingData {
  scalingIndex: number
}

function onReduceScalingData(data: ITestScalingData): ITestScalingData {
  return {
    scalingIndex: data.scalingIndex - 1
  }
}

function getShallowWrapperWithMocks(data: ITestScalingData = { scalingIndex: 5 }, onReduceData?: (data: ITestScalingData) => ITestScalingData) {
  const onReduceDataMock = sinon.spy(onReduceData);
  const onRenderDataMock = sinon.spy();

  let wrapper = mount<ResizeGroup, IResizeGroupState>(<ResizeGroup
    data={ data }
    onReduceData={ onReduceDataMock }
    onRenderData={ onRenderDataMock }
  />);

  let rootGetClientRectMock = sinon.stub();
  let measuredGetClientRectMock = sinon.stub();
  rootGetClientRectMock.returns({ width: 0 });
  measuredGetClientRectMock.returns({ width: 0 });

  runPriorToComponentDidUpdate(wrapper, () => {
    let measured = wrapper.find('.' + styles.measured);
    if (measured.length > 0) {
      measured.getDOMNode().getBoundingClientRect = measuredGetClientRectMock;
    }

    wrapper.getDOMNode().getBoundingClientRect = rootGetClientRectMock;
  });

  return {
    wrapper,
    onReduceDataMock,
    onRenderDataMock,
    rootGetClientRectMock,
    measuredGetClientRectMock
  };
}

describe('ResizeGroup', () => {
  it('does not render ResizeGroup when no data is passed', () => {
    const onReduceData = sinon.spy();
    const onRenderData = sinon.spy();
    const wrapper = shallow(
      <ResizeGroup
        onReduceData={ onReduceData }
        onRenderData={ onRenderData }
      />
    );

    expect(onRenderData.called).to.equal(false);
  });

  it('does not render ResizeGroup when empty data is passed', () => {
    const onReduceData = sinon.spy();
    const onRenderData = sinon.spy();
    const wrapper = shallow(
      <ResizeGroup
        data={ {} }
        onReduceData={ onReduceData }
        onRenderData={ onRenderData }
      />
    );

    expect(onRenderData.called).to.equal(false);
  });

  it('will remeasure if props are updated', () => {
    const onReduceData = sinon.spy();
    const onRenderData = sinon.spy();

    let wrapper = mount(<ResizeGroup
      data={ { a: 1 } }
      onReduceData={ onReduceData }
      onRenderData={ onRenderData }
    />);

    wrapper.setProps({
      data: { a: 2 },
      onReduceData: onReduceData,
      onRenderData: onRenderData
    });

    // onRenderData should get called to measure and to render when props are updated.
    expect(onRenderData.callCount).to.equal(4);
  });

  it('will call onReduceData when contents do not fit', () => {
    let { wrapper, onReduceDataMock, rootGetClientRectMock, measuredGetClientRectMock } = getShallowWrapperWithMocks();

    onReduceDataMock.reset();
    rootGetClientRectMock.returns({ width: 50 });
    measuredGetClientRectMock.onFirstCall().returns({ width: 75 })
    measuredGetClientRectMock.onSecondCall().returns({ width: 40 })

    wrapper.setState({ shouldMeasure: true });

    expect(onReduceDataMock.callCount).to.equal(1);
  });

  it('will measure after a window resize', () => {
    let { onReduceDataMock, rootGetClientRectMock, measuredGetClientRectMock } = getShallowWrapperWithMocks();

    onReduceDataMock.reset();
    rootGetClientRectMock.reset();
    measuredGetClientRectMock.reset();
    rootGetClientRectMock.returns({ width: 200 });
    measuredGetClientRectMock.returns({ width: 100 })

    window.dispatchEvent(new Event("resize"));

    expect(rootGetClientRectMock.callCount).to.equal(1);
    expect(measuredGetClientRectMock.callCount).to.equal(1);

    // Don't call onReduceData
    expect(onReduceDataMock.callCount).to.equal(0);
  });

  it('will continue to shrink until it fits', () => {
    let data = { scalingIndex: 7 };

    let { wrapper,
      onReduceDataMock,
      rootGetClientRectMock,
      measuredGetClientRectMock } = getShallowWrapperWithMocks(data, onReduceScalingData);

    onReduceDataMock.reset();
    measuredGetClientRectMock.reset();
    rootGetClientRectMock.reset();
    rootGetClientRectMock.returns({ width: 50 });
    measuredGetClientRectMock.onFirstCall().returns({ width: 100 });
    measuredGetClientRectMock.onSecondCall().returns({ width: 80 });
    measuredGetClientRectMock.onThirdCall().returns({ width: 40 })

    wrapper.setState({ shouldMeasure: true });

    expect(onReduceDataMock.callCount).to.equal(2);
    expect(onReduceDataMock.getCall(0).args[0]).to.deep.equal(data);
    expect(onReduceDataMock.getCall(1).args[0]).to.deep.equal({ scalingIndex: 6 });
  });

  it('renders no more than twice when everything fits', () => {
    let { wrapper, rootGetClientRectMock, measuredGetClientRectMock } = getShallowWrapperWithMocks();

    rootGetClientRectMock.returns({ width: 100 });
    measuredGetClientRectMock.returns({ width: 75 });

    let onRenderSpy = getRenderSpy(wrapper);

    wrapper.setState({ shouldMeasure: true });

    // There are 2 renders. The first does a measure and a layout.
    // Ideally, this can be optimized so that there is only 1 render, but this
    // test makes sure it doesn't get worse than this.
    expect(onRenderSpy.callCount).to.equal(2);
  });
});
