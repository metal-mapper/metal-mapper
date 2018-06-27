import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './app';

import './styles/index.css';
// import { locationSearchBar } from './components/locationSearchBar'; 

render(<App />, document.getElementById('root'));
