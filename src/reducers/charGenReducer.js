import {UPDATE_VALUE, UPDATE_RACE, UPDATE_CLASS, UPDATE_SKILL} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function charGenReducer(state = initialState.character, action) {
    let newState;

    switch (action.type) {

        case UPDATE_VALUE:
            newState = objectAssign({}, state);
            newState[action.fieldName] = action.value;
            return newState;

        case UPDATE_RACE:
            newState = objectAssign({}, state);
            newState[action.fieldName] = action.race;
            return newState;

        case UPDATE_CLASS:
            newState = objectAssign({}, state);
            newState.class = action.newClass;
            return newState;

        case UPDATE_SKILL:
            newState = objectAssign({}, state);
            newState.skills[action.fieldName] = action.value;
            return newState;

        default:
        return state;
    }
}
