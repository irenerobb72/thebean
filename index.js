import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './src/reducer'
import App from './src/components/app.jsx'

require('../main.scss')

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
