import { Toolbar } from '@fluentui/react-future';
import * as React from 'react';

const ToolbarMinimalPerf = () => <Toolbar />;

ToolbarMinimalPerf.iterations = 5000;
ToolbarMinimalPerf.filename = 'ToolbarMinimal.perf.tsx';

export default ToolbarMinimalPerf;
