/* jshint esversion: 6 */

import React from 'react';
import { connect } from 'react-redux';  // jshint ignore:line
import Main from './Main.jsx';

// mapStateToProps is a react-redux specific function
// that injects the redux store, after filters. REQUIRED
//    state = reduxStore
//    ownProps = props passed to container Component (Not Meteor data)
const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // console.log(ownProps)
  return {
    // route: state.routes.route,
  };
};

// // mapDispatchToProps is a react-redux specific
// // function that binds a function into the props
// // Default is: dispatch => ({ dispatch }), to this isn't necessary in simple uses
// const mapDispatchToProps = ( dispatch, ownProps ) => {
//  return {
//    open: () => {
//      dispatch( emailSuccess( true ) );
//    }
//  };
// };

// const mergeProps = ( stateProps, actionProps, parentProps ) => ({
// ...stateProps,
// ...actionProps,
// ...parentProps
// });

// Combines everything
const MainContainer = connect(
  mapStateToProps,
  // mapDispatchToProps
  // mergeProps
)(Main);

export default MainContainer;
