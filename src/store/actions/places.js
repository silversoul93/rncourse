import * as ACTION_TYPES from './actionTypes';

export const addPlace = (placeName) => {
  return {
    type: ACTION_TYPES.ADD_PLACE,
    placeName: placeName
  };
}

export const deletePlace = () => {
  return {
    type: ACTION_TYPES.DELETE_PLACE
  }
};

export const selectPlace = (key) => {
  return {
    type: ACTION_TYPES.SELECT_PLACE,
    placeKey: key
  };
}

export const deselectPlace = () => {
  return {
    type: ACTION_TYPES.DESELECT_PLACE
  };
}