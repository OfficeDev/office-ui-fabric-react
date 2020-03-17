import { Label } from '@fluentui/react-future';
import * as React from 'react';

const LabelMinimalPerf = () => <Label />;

LabelMinimalPerf.iterations = 5000;
LabelMinimalPerf.filename = 'LabelMinimal.perf.tsx';

export default LabelMinimalPerf;
