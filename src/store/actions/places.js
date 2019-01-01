import * as actionTypes from './actionTypes';

export const addPlace = placeName => {
  return {
    type: actionTypes.ADD_PLACE,
    placeName: placeName
  };
}

export const deletePlace = () => {
  return {
    type: actionTypes.DELETE_PLACE
  }
};

export const deletePlaceByKey = key => {
  return {
    type: actionTypes.DELETE_PLACE_BY_KEY,
    placeKey: key
  }
};

export const selectPlace = key => {
  return {
    type: actionTypes.SELECT_PLACE,
    placeKey: key
  };
}

export const deselectPlace = () => {
  return {
    type: actionTypes.DESELECT_PLACE
  };
}