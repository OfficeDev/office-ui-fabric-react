import * as React from 'react';
import { Provider, teamsTheme, Dialog, Button } from '@fluentui/react-northstar';
import WizardContent from './WizardContent';
import WizardButtons from './WizardButtons';

const AccessibleWizard: React.FunctionComponent = () => {

  const handleButtonClick = React.useCallback(
  (name, index) => {
  switch(name) { // Begin switch 1
case 'wizard1':
    setWizard1StepIndex(index);
    break;
case 'wizard2':
    setWizard2StepIndex(index);
    break;
    default:
    break;
  } // End switch 1
  }, []); // End handleButtonClick

// Wizard 1
  const [wizard1StepIndex, setWizard1StepIndex] = React.useState(0);
const wizard1Steps = [
( // Step 1
<div key="wizard1a" role="group" aria-labelledby="wizard1-step1-heading" aria-describedby="wizard1-step1-content">
<WizardContent
name="wizard1"
stepIndex={0}
/>
<WizardButtons
totalSteps={3}
stepIndex={0}
handleButtonClick={index => {
handleButtonClick('wizard1', index);
}}
/>
</div>
), ( // Step 2
<div key="wizard1b" role="group" aria-labelledby="wizard1-step2-heading" aria-describedby="wizard1-step2-content">
<WizardContent
name="wizard1"
stepIndex={1}
/>
<WizardButtons
totalSteps={3}
stepIndex={1}
handleButtonClick={index => {
handleButtonClick('wizard1', index);
}}
/>
</div>
), ( // Step 3
<div key="wizard1c" role="group" aria-labelledby="wizard1-step3-heading" aria-describedby="wizard1-step3-content">
<WizardContent
name="wizard1"
stepIndex={2}
/>
<WizardButtons
totalSteps={3}
stepIndex={2}
handleButtonClick={index => {
handleButtonClick('wizard1', index);
}}
/>
</div>
),
]; // End wizard1Steps

// Wizard 2
  const [wizard2StepIndex, setWizard2StepIndex] = React.useState(0);
const wizard2Steps = [
( // Step 1
<div key="wizard2a" role="group" aria-labelledby="wizard2-step1-heading" aria-describedby="wizard2-step1-content">
<WizardContent
name="wizard2"
stepIndex={0}
/>
</div>
), ( // Step 2
<div key="wizard2b" role="group" aria-labelledby="wizard2-step2-heading" aria-describedby="wizard2-step2-content">
<WizardContent
name="wizard2"
stepIndex={1}
/>
</div>
), ( // Step 3
<div key="wizard2c" role="group" aria-labelledby="wizard2-step3-heading" aria-describedby="wizard2-step3-content">
<WizardContent
name="wizard2"
stepIndex={2}
/>
</div>
),
]; // End wizard2Steps

  return (
                <Provider theme={teamsTheme}>
            <h1>Accessible Wizard Prototypes</h1>
            <button>Focus point 1</button>

                        <h2>Prototype #1 - Inline</h2>
{wizard1Steps[wizard1StepIndex]}

            <button>Focus point 2</button>
            
                        <h2>Prototype #2 - Dialog</h2>
                        <Dialog
                        header="Wizard as a dialog"
content={wizard2Steps[wizard2StepIndex]}
cancelButton="Cancel"
trigger={<Button content="Open the wizard" />}
footer={
<WizardButtons
totalSteps={3}
stepIndex={wizard2StepIndex}
handleButtonClick={index => {
handleButtonClick('wizard2', index);
}}
/>
}
/>

                        </Provider>
  );
}; // End AccessibleWizard

export default AccessibleWizard;
