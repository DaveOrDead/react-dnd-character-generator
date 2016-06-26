import * as types from '../constants/actionTypes';
import {getRace} from '../utils/getRace';
import {rollAllAbilities} from '../utils/rollAllAbilities';
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

export function updateClass(value, level) {
    return {
        type: types.UPDATE_CLASS,
        value,
        class: getCharacterClass(value, level)
    };
}

export function updateSkill(fieldName, value) {
    return {
        type: types.UPDATE_SKILL,
        fieldName,
        value
    };
}

export function updateAbility(fieldName, value) {
    return {
        type: types.UPDATE_ABILITY,
        fieldName,
        value
    };
}

export function updateAllAbilities() {
    return {
        type: types.UPDATE_ALL_ABILITIES,
        abilities: rollAllAbilities()
    };
}


