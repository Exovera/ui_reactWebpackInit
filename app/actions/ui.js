// Set window dimentions for the whole app
export function setWindowSize(windowSize) {
	return {
		type: 'setWindowSize',
		windowSize,
	};
}

export function putFocusBack() {
	return {
		type: 'putFocusBack',
	};
}
