import {UPDATE_VALUE, UPDATE_RACE, UPDATE_CLASS, UPDATE_SKILL, UPDATE_ABILITY, UPDATE_ALL_ABILITIES} from '../constants/actionTypes';
import initialState from './initialState';

export default function charGenReducer(state = initialState.character, action) {

    switch (action.type) {

        case UPDATE_VALUE:
            return Object.assign({}, state, {
                [action.fieldName]: action.value
            });

        case UPDATE_RACE:
            return Object.assign({}, state, {
                race: action.race
            });

        case UPDATE_CLASS:
            return Object.assign({}, state, {
                class: action.class
            });

        case UPDATE_SKILL:
            return Object.assign({}, state, {
                skills: {
                    [action.fieldName]: action.value;
                }
            });

        case UPDATE_ABILITY:
            return Object.assign({}, state, {
                abilities: {
                    [action.fieldName]: action.value;
                }
            });

        case UPDATE_ALL_ABILITIES:
            return Object.assign({}, state, {
                abilities: action.abilities
            });

        default:
        return state;
    }
}
