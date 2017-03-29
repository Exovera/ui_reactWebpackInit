/* jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { fetchData } from 'actions/data.js';
import reducers from 'reducers/reducers.js';

import AppLayout from 'layout/AppLayout/index.js';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

// RootContainer is the base data layer
class RootContainer extends React.Component {
  componentDidMount() {
    store.dispatch( fetchData() );
  }
  render() {
    return (
      <AppLayout/>
    );
  }
}

ReactDOM.render(
    <Provider store={ store }>
      <RootContainer />
    </Provider>,
  document.getElementById('root')
);
