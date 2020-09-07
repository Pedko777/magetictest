import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './normalize.scss';
import './scss/mixin.scss';
import './scss/variables.scss';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
