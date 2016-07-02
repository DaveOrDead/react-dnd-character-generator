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

export function updateRace(id) {
    return {
        type: types.UPDATE_RACE,
        id,
        race: getRace(id)
    };
}

export function updateClass(id, level) {
    return {
        type: types.UPDATE_CLASS,
        id,
        class: getCharacterClass(id, level)
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

export function updateAllAbilities(abilitiesList) {
    return {
        type: types.UPDATE_ALL_ABILITIES,
        abilities: rollAllAbilities(abilitiesList)
    };
}


