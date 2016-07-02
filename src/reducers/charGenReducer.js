import {UPDATE_VALUE, UPDATE_RACE, UPDATE_CLASS, UPDATE_SKILL, UPDATE_ABILITY, UPDATE_ALL_ABILITIES, REQUEST_CHAR_DATA,RECEIVE_CHAR_DATA} from '../constants/actionTypes';
import initialState from './initialState';

export default function charGenReducer(state = initialState.character, action) {
    let newState;

    switch (action.type) {

        case UPDATE_VALUE:
            return Object.assign({}, state, {
                [action.fieldName]: action.value
            });

        case REQUEST_CHAR_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });

        case RECEIVE_CHAR_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                [action.dataType]: action.payload.data[0]
            });

        case UPDATE_CLASS:
            return Object.assign({}, state, {
                class: action.class
            });

        case UPDATE_SKILL:
            newState = Object.assign({}, state);
            newState.skills[action.fieldName] = action.value;
            return newState;

        case UPDATE_ABILITY:
            newState = Object.assign({}, state);
            newState.abilities[action.fieldName] = action.value;
            return newState;

        case UPDATE_ALL_ABILITIES:
            return Object.assign({}, state, {
                abilities: action.abilities
            });

        default:
        return state;
    }
}
