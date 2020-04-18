import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';
import 'scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Providers from 'providers';

const docRoot = document.getElementById('root');

ReactDOM.render(<Providers />, docRoot);
