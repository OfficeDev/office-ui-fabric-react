import * as React from 'react';
import { generateRandomId } from './SubwayMap.Util';
import { SubwayMap } from '../SubwayMap';
import { ISubwayMapStep } from '../SubwayMap.types';

export class SubwayMapSubStepsExample extends React.Component<any, any> {
  public render(): JSX.Element {
    let steps: ISubwayMapStep[] = [];
    let subSteps: ISubwayMapStep[] = [];

    const substep0: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Sub Step 0',
      formComplete: true,
      onClickStep: this._handleClickStep
    };
    const substep1: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Sub Step 1',
      onClickStep: this._handleClickStep
    };
    const substep2: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Sub Step 2',
      onClickStep: this._handleClickStep
    };

    subSteps.push(substep0);
    subSteps.push(substep1);
    subSteps.push(substep2);

    const data0: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Step 0',
      formComplete: false,
      formError: true,
      onClickStep: this._handleClickStep
    };
    const data1: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Step 1',
      formComplete: true,
      isCurrentStep: true,
      onClickStep: this._handleClickStep,
      subSteps: subSteps
    };
    const data2: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Step 2',
      formError: true,
      onClickStep: this._handleClickStep
    };
    const data3: ISubwayMapStep = {
      key: generateRandomId(),
      label: 'Step 3',
      formComplete: false,
      onClickStep: this._handleClickStep
    };

    steps.push(data0);
    steps.push(data1);
    steps.push(data2);
    steps.push(data3);

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
      alertStr += ' and : ' + subStep.label;
    }

    console.log(alertStr);
  }
}
