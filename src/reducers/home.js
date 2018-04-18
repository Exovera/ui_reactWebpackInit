/* eslint no-tabs: "off", indent: "off" */

const initialState = {
	fakeHomeState: 'cheese',
};

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'fakeAboutReducer':
			return Object.assign({}, state, {
				fakeHomeState: action.payload,
			});

		default:
			return state;
	}
};

export default homeReducer;
