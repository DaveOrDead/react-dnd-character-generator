/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Canvas from './containers/canvas';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Canvas />
  </Provider>, document.getElementById('app')
);
