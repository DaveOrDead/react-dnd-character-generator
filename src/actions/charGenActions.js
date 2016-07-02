import axios from "axios";

import * as types from '../constants/actionTypes';
import {rollAllAbilities} from '../utils/rollAllAbilities';
import {getCharacterClass} from '../utils/getCharacterClass';

const ROOT_URL = 'https://dnd-character-gen-server.herokuapp.com/api';

export function updateValue(fieldName, value) {
    return {
        type: types.UPDATE_VALUE,
        fieldName,
        value
    };
}

export function fetchCharData(dataType, url) {
    return dispatch => {
        dispatch(requestCharData(dataType, url));
            return axios.get(`${ROOT_URL}/${url}`)
            .then(payload => dispatch(receiveCharData(dataType, payload)));
    };
}

function requestCharData(dataType, url) {
    return {
        type: types.REQUEST_CHAR_DATA,
        dataType,
        url
    };
}

function receiveCharData(dataType, payload) {
    return {
        type: types.RECEIVE_CHAR_DATA,
        dataType,
        payload
    };
}


// export function updateRace(id) {
//     return (dispatch) => {
//         return dispatch(fetchCharData(data, types.UPDATE_RACE));
//     };
//     // return {
//     //     type: types.UPDATE_RACE,
//     //     race: fetchData(`races/${id}`)
//     // };
// }

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


