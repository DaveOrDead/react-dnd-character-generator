import {SAVE_CHARACTER} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';


export default function charGenReducer(state = initialState.character, action) {
  let newState;

  switch (action.type) {
    case SAVE_CHARACTER:
      newState = objectAssign({}, state);
      return newState;

    default:
      return state;
  }
}
