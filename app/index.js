import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { fetchData } from 'actions/data.js';
import { setWindowSize, putFocusBack } from 'actions/ui.js';
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
  constructor(props) {
    super(props);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleFirstTab = this.handleFirstTab.bind(this);
  }
  componentDidMount() {
    store.dispatch(fetchData());
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    window.addEventListener('keydown', this.handleFirstTab.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    window.removeEventListener('keydown', this.handleFirstTab.bind(this));
  }
  // Set window size for the whole app
  updateWindowDimensions() {
    store.dispatch(setWindowSize({ width: window.innerWidth, height: window.innerHeight }));
  }
  handleFirstTab(event) {
    if (event.keyCode === 9) {
      store.dispatch(putFocusBack());
      window.removeEventListener('keydown', this.handleFirstTab.bind(this));
    }
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
