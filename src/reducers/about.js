/* eslint no-tabs: "off", indent: "off" */

const initialState = {
	fakeAboutState: 'cheese',
};

const aboutReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'fakeAboutReducer':
			return Object.assign({}, state, {
				fakeAboutState: action.payload,
			});

		default:
			return state;
	}
};

export default aboutReducer;
