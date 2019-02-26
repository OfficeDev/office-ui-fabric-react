import * as React from 'react';
import { SetupWizard } from '../SetupWizard';
import { ISetupWizardState } from './SetupWizard.Util';
import { IWizardExampleBaseState, WizardExampleBase } from './WizardExample.Base';

export interface ISetupWizardState extends IWizardExampleBaseState {}

export class SetupWizardSubStepsExample extends WizardExampleBase<ISetupWizardState> {
  constructor(props: {}) {
    super(props);
    const steps = this.getTestSteps();
    this.state = {
      steps: steps,
      currentStepId: steps[0].id
    };
  }

  public render(): React.ReactNode {
    return (
      <div className="ms-WizardExample">
        <SetupWizard
          wizardTitle={{ title: 'Sample wizard with 4 steps' }}
          exitWizardAction={this._getExitWizardAction()}
          backClickAction={this._getBackClickAction()}
          steps={this.state.steps}
        />
      </div>
    );
  }
}
