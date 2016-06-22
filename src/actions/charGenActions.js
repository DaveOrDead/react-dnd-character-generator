import * as types from '../constants/actionTypes';

export function updateValue(fieldName, value) {
  return {type: types.UPDATE_VALUE, fieldName, value};
}

export function updateRace(fieldName, value) {
  return {type: types.UPDATE_RACE, fieldName, value};
}

export function updateClass(fieldName, value) {
  return {type: types.UPDATE_CLASS, fieldName, value};
}


