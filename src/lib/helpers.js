import moment from "moment";
import _ from "underscore";

// Does this without mutation
export const removeStringFromArr = (array, string) => {
	const index = _.findIndex(array, (existingString) => {
		return existingString === string;
	});
	return array.slice(0, index).concat(array.slice(index + 1));
};

// Checks an array of objects against an object, and adds it if it in not in the array, or removes it if it is.
//    The objects must have a unique field 'id'
//    Does this without mutation
export const addOrRemove = (array, object) => {
	const isActiveIndex = _.findIndex(array, (existingObject) => {
		return existingObject.id === object.id;
	});
	let value;
	if (isActiveIndex < 0) {
		// concat state to avoid mutation (instead of push)
		value = [...array, object];
	} else {
		// Slice and concat to avoid mutation
		value = array.slice(0, isActiveIndex).concat(array.slice(isActiveIndex + 1));
	}
	return value;
};

// Checks an array of strings against a string, and adds it if it in not in the array, or removes it if it is.
//    Does this without mutation
export const addOrRemoveString = (array, string) => {
	const isActiveIndex = _.findIndex(array, (existingString) => {
		return existingString === string;
	});
	let value;
	if (isActiveIndex < 0) {
		// add
		// concat state to avoid mutation (instead of push)
		value = [...array, string];
	} else {
		// remove
		// Slice and concat to avoid mutation
		value = array.slice(0, isActiveIndex).concat(array.slice(isActiveIndex + 1));
	}
	return value;
};

// Clone an array of objects with 'id' and 'name' as only keys for each object
export const cloneIdName = (original) => {
	const clone = [];
	_.each(original, (o) => {
		const x = {
			id: o.id,
			name: o.name,
		};
		clone.push(x);
	});
	return clone;
};

// Find length of an array of objects plus the length of their child arrays
export const objectLength = (objectArr, childName) => {
	let finalLength = 0;
	_.each(objectArr, (o) => {
		if (o[childName] && o[childName].length > 0) {
			finalLength += o[childName].length;
		} else {
			finalLength += 1; // count top category
		}
	});
	return finalLength;
};

// Returns true if the target element has class
export const hasClass = (target, className) => {
	return new RegExp(`(\\s|^)${className}(\\s|$)`).test(target.className);
};

// Returns true if each array has a an object with a matching key
// NOTE: expects both arrays to have unique values for key
export const arraysMatchByKey = (array1, array2, key) => {
	let arraysMatch = true;

	// quick check by length
	if (array1.length !== array2.length) {
		arraysMatch = false;
	} else {
		// check by comparing each value
		_.find(array1, (match1) => {
			const theyMatch = _.find(array2, (match2) => {
				return match1[key] && match2[key] && match1[key] === match2[key];
			});
			if (theyMatch === undefined) {
				arraysMatch = false;
			}
		});
	}

	return arraysMatch;
};

// Return a parameter value from the URL
export const getParameterByName = (theName, theUrl) => {
	const url = theUrl || window.location.href;
	const name = theName.replace(/[\[\]]/g, "\\$&");
	const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
	const results = regex.exec(url);
	if (!results) {
		return null;
	}
	if (!results[2]) {
		return "";
	}
	return decodeURIComponent(results[2].replace(/\+/g, " "));
};

// Checks if a string has at least 8 characters, both upper and lowercase letters, and a number
// Returns boolean
export const isPasswordValid = (password) => {
	let passwordValid = true;

	if (password.length < 8) {
		passwordValid = false;
	}
	if (!password.match(/[a-z]/)) {
		passwordValid = false;
	}
	if (!password.match(/[A-Z]/)) {
		passwordValid = false;
	}
	if (!password.match(/[0-9]/)) {
		passwordValid = false;
	}
	return passwordValid;
};

// returns target string with remove excised.
//    If the remove is in the middle, it will only return the first portion of the target.
//    Intended use case: ('222px', 'px') => '222'. ('px222', 'px') => '222' also works
export const stripString = (target, remove) => {
	let value = target;
	value = value.trim().split(remove);
	value = _.reject(value, "");
	return value[0];
};

export const getCookie = (cname) => {
	const name = `${cname}=`;
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

export const setCookie = (cname, cvalue) => {
	document.cookie = `${cname}=${cvalue};`;
};

// compares an array of objects by id, and returns a boolean
export const areArraysEqual = (arr1, arr2) => {
	let areTheyEqual = true;
	if (arr1.length !== arr2.length) {
		areTheyEqual = false;
	} else {
		_.each(arr1, (obj) => {
			const foundOne = _.find(arr2, (obj2) => {
				return obj2.id === obj.id;
			});
			if (!foundOne) {
				areTheyEqual = false;
			}
		});
	}
	return areTheyEqual;
};

export const getScrollbarSize = () => {
	const doc = document.documentElement;
	const dummyScroller = document.createElement("div");
	dummyScroller.setAttribute(
		"style",
		"width:99px;height:99px;" + "position:absolute;top:-9999px;overflow:scroll;"
	);
	doc.appendChild(dummyScroller);
	const scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
	doc.removeChild(dummyScroller);
	return scrollbarSize;
};
