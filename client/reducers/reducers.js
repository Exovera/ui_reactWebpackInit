/* jshint esversion: 6 */

// This is set up as one reducer for the whole app.
// If this becomes unwieldly, use combineReducers from the reduce-reducers package,
//   just make sure the reducers won't need to access each other


const initialState = {
  dataReady: false,
};

const redux = function ( state = initialState, action ) { /* jshint ignore: line */
  switch ( action.type ){

		case 'testRedux':
			return Object.assign({}, state, {
				dataReady: true,
			});

    default:
      return state;
  }
};

export default redux;
