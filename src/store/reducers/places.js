const initialState = {
  places: [],
  selectedPlace: null
};

// This is our main reducer, places.js because it will manage the places state
/**
 * @name reducer
 * @description             This is the main reducer of the app
 * @param {*} state         The old state; if null, we use the initialState
 * @param {*} action        The action to manage
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
