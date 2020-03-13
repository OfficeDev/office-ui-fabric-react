import { Grid } from '@fluentui/react-experimental';
import * as React from 'react';

const GridMinimalPerf = () => <Grid />;

GridMinimalPerf.iterations = 5000;
GridMinimalPerf.filename = 'GridMinimal.perf.tsx';

export default GridMinimalPerf;
