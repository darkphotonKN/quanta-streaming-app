import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

const GlobalApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<GlobalApp />, document.querySelector('#root'));
