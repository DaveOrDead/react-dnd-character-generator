import {UPDATE_VALUE, UPDATE_RACE, UPDATE_CLASS, REQUEST_DATA, RECEIVE_DATA} from '../constants/actionTypes';
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
        newState[action.fieldName] = action.characterClass;
        return newState;

        case REQUEST_DATA:
            return Object.assign({}, state, {
                fetching: true
            });

        case RECEIVE_DATA:
            return Object.assign({}, state, {
                fetching: false,
                data: action.data
        });

        default:
        return state;
    }
}
