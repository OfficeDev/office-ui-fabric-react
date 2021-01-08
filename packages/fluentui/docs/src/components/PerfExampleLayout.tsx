import * as _ from 'lodash';
import * as React from 'react';
import { match } from 'react-router-dom';
import PageNotFound from '../views/PageNotFound';
import { examplesContext, exampleKebabNameToSourceFilename, parseExamplePath } from '../utils';

type ExternalExampleLayoutProps = {
  match: match<{
    exampleName: string;
  }>;
};

const examplePaths = examplesContext.keys();

const PerfExampleLayout: React.FC<ExternalExampleLayoutProps> = props => {
  const { exampleName } = props.match.params;

  const exampleFilename = exampleKebabNameToSourceFilename(exampleName).replace('source.json', 'tsx');
  const examplePath = _.find(examplePaths, path => exampleFilename === parseExamplePath(path).exampleName);

  if (!examplePath) return <PageNotFound />;

  return React.createElement(require(`../examples${examplePath.substr(1)}`).default);
};

export default PerfExampleLayout;
