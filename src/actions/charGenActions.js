import * as types from '../constants/actionTypes';
import {getRace} from '../utils/getRace';
import {getCharacterClass} from '../utils/getCharacterClass';

export function updateValue(fieldName, value) {
    return {
        type: types.UPDATE_VALUE,
        fieldName,
        value
    };
}

export function updateRace(fieldName, value) {
    return {
        type: types.UPDATE_RACE,
        fieldName,
        value,
        race: getRace(value)
    };
}

export function updateClass(fieldName, value, level) {
    return {
        type: types.UPDATE_CLASS,
        fieldName,
        value,
        newClass: getCharacterClass(value, level)
    };
}


