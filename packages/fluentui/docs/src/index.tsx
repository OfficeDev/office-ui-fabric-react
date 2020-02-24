import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  mountNode
);
