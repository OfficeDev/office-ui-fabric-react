import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ScrollablePane } from './ScrollablePane';
import * as ReactDOM from 'react-dom';
import { createRef } from 'react';
import { IScrollablePane, ScrollbarVisibility } from './ScrollablePane.types';
import { DetailsListBasicExample } from '../DetailsList/examples/DetailsList.Basic.Example';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';

describe('ScrollablePane', () => {
  it('renders correctly', () => {
    const component = renderer.create(<ScrollablePane />, {
      createNodeMock: element => ({})
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('ScrollablePane works with Sticky', () => {
    let container: HTMLDivElement;
    beforeEach(() => {
      container = document.createElement('div');
    });
    it('It gives correct scroll values if experimentalLayoutImprovements is undefined|false', () => {
      /**
       * If experimentalLayoutImprovements is false, then there is no scroll event handler in ScrollablePaneBase.
       * getScrollPosition() and getHorizontalScrollPosition() should still return correct values.
       */
      const scrollablePaneRef = createRef<IScrollablePane>();
      ReactDOM.render(
        <ScrollablePane componentRef={scrollablePaneRef}>
          <DetailsListBasicExample />
        </ScrollablePane>,
        container
      );

      expect(scrollablePaneRef.current).toBeDefined();
      const scrollablePaneRefCurrent = scrollablePaneRef.current! as any;
      // it sets userinteraction flag only after scroll
      expect(!!scrollablePaneRefCurrent._userHasInteracted).toBe(false);

      const scrollablePane = container.querySelector('.ms-ScrollablePane') as HTMLDivElement;
      const contentContainer = scrollablePane.children[0];

      expect(scrollablePaneRefCurrent.getScrollPosition()).toBe(0);
      expect(contentContainer.scrollTop).toBe(0);

      expect(scrollablePaneRefCurrent._scrollLeft).toBe(0);
      expect(contentContainer.scrollLeft).toBe(0);

      contentContainer.scrollTop = 100;
      contentContainer.dispatchEvent(new Event('scroll'));

      expect(!!scrollablePaneRefCurrent._userHasInteracted).toBe(true);

      expect(scrollablePaneRefCurrent.getScrollPosition()).toBe(100);
      expect(contentContainer.scrollTop).toBe(100);

      contentContainer.scrollLeft = 50;
      contentContainer.dispatchEvent(new Event('scroll'));
      expect(scrollablePaneRefCurrent._scrollLeft).toBe(50);
      expect(contentContainer.scrollLeft).toBe(50);
    });

    it('It gives correct scroll values if experimentalLayoutImprovements is true and there is at least one Sticky component', () => {
      const scrollablePaneRef = createRef<IScrollablePane>();
      ReactDOM.render(
        <ScrollablePane componentRef={scrollablePaneRef} experimentalLayoutImprovements={true}>
          <Sticky stickyPosition={StickyPositionType.Header}>
            <div>Header</div>
          </Sticky>
          <DetailsListBasicExample />
        </ScrollablePane>,
        container
      );

      const scrollablePaneRefCurrent = scrollablePaneRef.current! as any;

      // it sets userinteraction flag only after scroll
      expect(!!scrollablePaneRefCurrent._userHasInteracted).toBe(false);

      const scrollablePane = container.querySelector('.ms-ScrollablePane') as HTMLDivElement;
      const contentContainer = scrollablePane.children[0];

      expect(scrollablePaneRefCurrent.getScrollPosition()).toBe(0);
      expect(contentContainer.scrollTop).toBe(0);

      expect(scrollablePaneRefCurrent._scrollLeft).toBe(0);
      expect(contentContainer.scrollLeft).toBe(0);

      contentContainer.scrollTop = 100;
      contentContainer.dispatchEvent(new Event('scroll'));

      // it sets userinteraction flag only after scroll
      expect(scrollablePaneRefCurrent._userHasInteracted).toBe(true);

      expect(scrollablePaneRefCurrent.getScrollPosition()).toBe(100);
      expect(contentContainer.scrollTop).toBe(100);
      expect(scrollablePaneRefCurrent._scrollLeft).toBe(0);
      expect(contentContainer.scrollLeft).toBe(0);

      contentContainer.scrollLeft = 20;
      contentContainer.dispatchEvent(new Event('scroll'));
      expect(scrollablePaneRefCurrent._scrollLeft).toBe(20);
      expect(contentContainer.scrollLeft).toBe(20);
      expect(scrollablePaneRefCurrent.getScrollPosition()).toBe(100);
      expect(contentContainer.scrollTop).toBe(100);
    });

    it('It gives correct scroll values if experimentalLayoutImprovements is true and there is no Sticky component', () => {
      /**
       * If there is no Sticky component, then there is no scroll event handler in ScrollablePaneBase.
       * getScrollPosition() and getHorizontalScrollPosition() should return 0.
       */
      const scrollablePaneRef = createRef<IScrollablePane>();
      ReactDOM.render(
        <ScrollablePane componentRef={scrollablePaneRef} experimentalLayoutImprovements={true}>
          <DetailsListBasicExample />
        </ScrollablePane>,
        container
      );
      const scrollablePaneRefCurrent = scrollablePaneRef.current! as any;
      const scrollablePane = container.querySelector('.ms-ScrollablePane') as HTMLDivElement;
      const contentContainer = scrollablePane.children[0];

      expect(scrollablePaneRefCurrent.getScrollPosition()).toBe(0);
      expect(contentContainer.scrollTop).toBe(0);
      expect(scrollablePaneRefCurrent._scrollLeft).toBe(0);
      expect(contentContainer.scrollLeft).toBe(0);

      contentContainer.scrollTop = 100;
      contentContainer.dispatchEvent(new Event('scroll'));
      expect(scrollablePaneRefCurrent.getScrollPosition()).toBe(100);
      expect(contentContainer.scrollTop).toBe(100);

      contentContainer.scrollLeft = 20;
      contentContainer.dispatchEvent(new Event('scroll'));
      expect(scrollablePaneRefCurrent._scrollLeft).toBe(20);
      expect(contentContainer.scrollLeft).toBe(20);
    });

    it(`it replicates nonSticky content at it's sticky and non-sticky place
  in DOM for stickyPosition={StickyPositionType.Header} if experimentalLayoutImprovements={true}`, () => {
      ReactDOM.render(
        <ScrollablePane experimentalLayoutImprovements={true}>
          <Sticky stickyPosition={StickyPositionType.Header}>
            <div className={'sticky-header'}>Header</div>
          </Sticky>
          <DetailsListBasicExample />
        </ScrollablePane>,
        container
      );

      const scrollablePane = container.querySelector('.ms-ScrollablePane') as HTMLDivElement;
      const contentContainer = scrollablePane.children[0];
      const stickyAboveContainer = scrollablePane.children[1] as HTMLDivElement;
      const stickyBelowContainer = scrollablePane.children[2] as HTMLDivElement;

      expect(contentContainer.querySelectorAll('.sticky-header').length).toBe(1);
      expect(stickyAboveContainer.querySelectorAll('.sticky-header').length).toBe(1);
      expect(stickyBelowContainer.querySelectorAll('.sticky-header').length).toBe(0);
    });

    it(`it replicates nonSticky content at it's sticky and non-sticky place in DOM for
   stickyPosition={StickyPositionType.Footer} if experimentalLayoutImprovements={true}`, () => {
      ReactDOM.render(
        <ScrollablePane experimentalLayoutImprovements={true}>
          <DetailsListBasicExample />
          <Sticky stickyPosition={StickyPositionType.Footer}>
            <div className={'sticky-footer'}>Footer</div>
          </Sticky>
        </ScrollablePane>,
        container
      );

      const scrollablePane = container.querySelector('.ms-ScrollablePane') as HTMLDivElement;
      const contentContainer = scrollablePane.children[0];
      const stickyAboveContainer = scrollablePane.children[1] as HTMLDivElement;
      const stickyBelowContainer = scrollablePane.children[2] as HTMLDivElement;

      expect(contentContainer.querySelectorAll('.sticky-footer').length).toBe(1);
      expect(stickyAboveContainer.querySelectorAll('.sticky-footer').length).toBe(0);
      expect(stickyBelowContainer.querySelectorAll('.sticky-footer').length).toBe(1);
    });

    it(`it replicates nonSticky content at it's sticky and non-sticky place in DOM if experimentalLayoutImprovements={true}`, () => {
      ReactDOM.render(
        <ScrollablePane experimentalLayoutImprovements={true}>
          <Sticky stickyPosition={StickyPositionType.Header}>
            <div className={'sticky-header'}>Header</div>
          </Sticky>
          <DetailsListBasicExample />
          <Sticky stickyPosition={StickyPositionType.Footer}>
            <div className={'sticky-footer'}>Footer</div>
          </Sticky>
        </ScrollablePane>,
        container
      );

      const scrollablePane = container.querySelector('.ms-ScrollablePane') as HTMLDivElement;
      const contentContainer = scrollablePane.children[0];
      const stickyAboveContainer = scrollablePane.children[1] as HTMLDivElement;
      const stickyBelowContainer = scrollablePane.children[2] as HTMLDivElement;

      expect(contentContainer.querySelectorAll('.sticky-header').length).toBe(1);
      expect(stickyAboveContainer.querySelectorAll('.sticky-header').length).toBe(1);
      expect(stickyBelowContainer.querySelectorAll('.sticky-header').length).toBe(0);

      expect(contentContainer.querySelectorAll('.sticky-footer').length).toBe(1);
      expect(stickyAboveContainer.querySelectorAll('.sticky-footer').length).toBe(0);
      expect(stickyBelowContainer.querySelectorAll('.sticky-footer').length).toBe(1);
    });

    it(`it doesn't replicate nonSticky content in DOM if experimentalLayoutImprovements={false}`, () => {
      ReactDOM.render(
        <ScrollablePane>
          <Sticky stickyPosition={StickyPositionType.Header}>
            <div className={'sticky-header'}>Header</div>
          </Sticky>
          <DetailsListBasicExample />
          <Sticky stickyPosition={StickyPositionType.Footer}>
            <div className={'sticky-footer'}>Footer</div>
          </Sticky>
        </ScrollablePane>,
        container
      );

      const scrollablePane = container.querySelector('.ms-ScrollablePane') as HTMLDivElement;
      const contentContainer = scrollablePane.children[0];
      const stickyAboveContainer = scrollablePane.children[1] as HTMLDivElement;
      const stickyBelowContainer = scrollablePane.children[2] as HTMLDivElement;

      expect(contentContainer.querySelectorAll('.sticky-header').length).toBe(1);
      expect(stickyAboveContainer.querySelectorAll('.sticky-header').length).toBe(0);
      expect(stickyBelowContainer.querySelectorAll('.sticky-header').length).toBe(0);

      expect(
        contentContainer.querySelectorAll('.sticky-footer').length || stickyBelowContainer.querySelectorAll('.sticky-footer').length
      ).toBe(1);
      expect(stickyAboveContainer.querySelectorAll('.sticky-footer').length).toBe(0);
      expect(
        contentContainer.querySelectorAll('.sticky-footer').length && stickyBelowContainer.querySelectorAll('.sticky-footer').length
      ).toBe(0);
    });

    describe('it correctly verifies sticky container behavior', () => {
      it(`if experimentalLayoutImprovements is true and scrollbarVisibility is not defined`, () => {
        const scrollablePaneRef = createRef<IScrollablePane>();
        ReactDOM.render(
          <ScrollablePane componentRef={scrollablePaneRef} experimentalLayoutImprovements={true}>
            <Sticky stickyPosition={StickyPositionType.Header}>
              <div>Header</div>
            </Sticky>
            <DetailsListBasicExample />
            <Sticky stickyPosition={StickyPositionType.Footer}>
              <div>Footer</div>
            </Sticky>
          </ScrollablePane>,
          container
        );

        const scrollablePaneRefCurrent = scrollablePaneRef.current! as any;
        expect(scrollablePaneRefCurrent._perf()).toBe(true);
      });

      it(`if experimentalLayoutImprovements is undefined|false`, () => {
        const scrollablePaneRef = createRef<IScrollablePane>();
        ReactDOM.render(
          <ScrollablePane componentRef={scrollablePaneRef}>
            <Sticky stickyPosition={StickyPositionType.Header}>
              <div>Header</div>
            </Sticky>
            <DetailsListBasicExample />
            <Sticky stickyPosition={StickyPositionType.Footer}>
              <div>Footer</div>
            </Sticky>
          </ScrollablePane>,
          container
        );

        const scrollablePaneRefCurrent = scrollablePaneRef.current! as any;
        expect(scrollablePaneRefCurrent._perf()).toBe(false);
      });

      it(`if experimentalLayoutImprovements is true and scrollbarVisibility is defined`, () => {
        const scrollablePaneRef = createRef<IScrollablePane>();
        ReactDOM.render(
          <ScrollablePane
            componentRef={scrollablePaneRef}
            experimentalLayoutImprovements={true}
            scrollbarVisibility={ScrollbarVisibility.always}
          >
            <Sticky stickyPosition={StickyPositionType.Header}>
              <div>Header</div>
            </Sticky>
            <DetailsListBasicExample />
            <Sticky stickyPosition={StickyPositionType.Footer}>
              <div>Footer</div>
            </Sticky>
          </ScrollablePane>,
          container
        );

        const scrollablePaneRefCurrent = scrollablePaneRef.current! as any;
        expect(scrollablePaneRefCurrent._perf()).toBe(true);
      });
    });
  });
});
