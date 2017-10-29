/* eslint no-tabs: "off", indent: "off" */

// This is set up as one reducer for the whole app.
// If this becomes unwieldly, use combineReducers from the reduce-reducers package,
//   just make sure the reducers won't need to access each other


const initialState = {
  dataReady: true,

  windowSize: { height: 0, width: 0 },
  showFocus: false, // show blue outline for focus?
};

const redux = (state = initialState, action) => {
  switch (action.type) {
		case 'requestingData':
			return Object.assign({}, state, {
				// dataReady: true,
			});
		case 'receiveData':
				console.log(action.data);
			return Object.assign({}, state, {
				instructors: action.data.items,
				cmsAssets: action.data.includes.Asset,
			});
    // UI
		case 'setWindowSize':
			return Object.assign({}, state, {
				windowSize: action.windowSize,
			});
		case 'putFocusBack':
			return Object.assign({}, state, {
				showFocus: true,
			});

    default:
      return state;
  }
};

export default redux;
