import * as React from 'react';
import { generateRandomId } from '@uifabric/dashboard/lib/components/SubwayMap/examples/SubwayMap.Util';
import { SubwayMap } from '@uifabric/dashboard/lib/components/SubwayMap/SubwayMap';
import { ISubwayMapStep } from '@uifabric/dashboard/lib/components/SubwayMap/SubwayMap.types';

export class SubwayMapBasicDifferentStatesExample extends React.Component<any, any> {
  public render(): JSX.Element {
    let steps: ISubwayMapStep[] = [];

    const data0: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Step 0',
      isCurrentStep: true,
      formError: true,
      onClickStep: this._handleClickStep
    };
    const data1: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Step 1',
      formError: true,
      onClickStep: this._handleClickStep
    };
    const data2: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Step 2',
      formComplete: true,
      onClickStep: this._handleClickStep
    };
    const data3: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Step 3',
      formSkipped: true,
      onClickStep: this._handleClickStep
    };
    const data4: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Step 4',
      formComplete: false,
      formViewed: true,
      onClickStep: this._handleClickStep
    };

    steps.push(data0);
    steps.push(data1);
    steps.push(data2);
    steps.push(data3);
    steps.push(data4);

    return (
      <div>
        <SubwayMap steps={steps} />
      </div>
    );
  }

  private _handleClickStep(step: ISubwayMapStep, subStep: ISubwayMapStep | undefined): void {
    let alertStr = 'Clicked ' + step.label;
    step.isCurrentStep = true;
    if (subStep !== undefined) {
      subStep.isCurrentStep = true;
      alertStr += ' and ' + subStep.label;
    }

    console.log(alertStr);
  }
}
