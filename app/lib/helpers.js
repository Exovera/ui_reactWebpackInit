import moment from 'moment';
import _ from 'underscore';


//    Does this without mutation
export const removeStringFromArr = (array, string) => {
  const index = _.findIndex(array, (existingString) => {
    return existingString === string;
  });
  return array.slice(0, index).concat(array.slice(index + 1));
};

// Checks an array of strings against a string, and adds it if it in not in the array, or removes it if it is.
//    Does this without mutation
export const addOrRemoveString = function (array, string) {
  const isActiveIndex = _.findIndex(array, (existingString) => {
    return existingString === string;
  });
  let value;
  if (isActiveIndex < 0) { // add
    // concat state to avoid mutation (instead of push)
    value = [...array, string];
  } else { // remove
    // Slice and concat to avoid mutation
    value = array.slice(0, isActiveIndex).concat(array.slice(isActiveIndex + 1));
  }
  return value;
};


// Clone an array of objects with 'id' and 'name' as only keys for each object
export const cloneIdName = (original) => {
  let clone = [];
  _.each(original, (o) => {
    const x = {
      id: o.id,
      name: o.name,
    };
    clone.push(x);
  });
  return clone;
};
