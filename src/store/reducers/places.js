import * as actionTypes from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
};

let count = 0;

// This is our main reducer, places.js because it will manage the places state
/**
 * @name reducer
 * @description             This is the main reducer of the app
 * @param {*} state         The old state; if null, we use the initialState
 * @param {*} action        The action to manage
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      return {
        // '...state' means 'put all props from the state object into this object'
        ...state,
        places: state.places.concat({
          key: count++,
          name: action.placeName,
          image: {
            uri: 'https://i.pinimg.com/originals/18/80/bd/1880bdda03b8579b3cfeebf5876ab27c.jpg'
          }
        })
      };
    case actionTypes.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== state.selectedPlace.key),
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
