import {UPDATE_VALUE, UPDATE_RACE, UPDATE_CLASS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import {getRace} from '../utils/getRace';
import {getCharacterClass} from '../utils/getCharacterClass';

export default function charGenReducer(state = initialState.character, action) {
    let newState;

    switch (action.type) {

        case UPDATE_VALUE:
        newState = objectAssign({}, state);
        newState[action.fieldName] = action.value;
        return newState;

        case UPDATE_RACE:
        const race = getRace(action.value);
        newState = objectAssign({}, state);
        newState[action.fieldName] = race;
        return newState;

        case UPDATE_CLASS:
        const characterClass = getCharacterClass(action.value, state.level);
        newState = objectAssign({}, state);
        newState[action.fieldName] = characterClass;
        return newState;

        default:
        return state;
    }
}
