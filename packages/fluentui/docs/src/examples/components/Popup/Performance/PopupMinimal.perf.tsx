import { Popup } from '@fluentui/react-experimental';
import * as React from 'react';

const PopupMinimalPerf = () => <Popup />;

PopupMinimalPerf.iterations = 5000;
PopupMinimalPerf.filename = 'PopupMinimal.perf.tsx';

export default PopupMinimalPerf;
