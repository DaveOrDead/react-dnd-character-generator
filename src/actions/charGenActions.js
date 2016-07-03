import axios from "axios";

import {REQUEST_CHAR_DATA, UPDATE_VALUE, RECEIVE_CHAR_DATA, UPDATE_SKILL, UPDATE_ABILITY, UPDATE_ALL_ABILITIES } from '../constants/actionTypes';
import {ROOT_URL} from '../constants/urls';

import {rollAllAbilities} from '../utils/rollAllAbilities';


export function updateValue(fieldName, value) {
    return {
        type: UPDATE_VALUE,
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
        type: REQUEST_CHAR_DATA,
        dataType,
        url
    };
}

function receiveCharData(dataType, payload) {
    return {
        type: RECEIVE_CHAR_DATA,
        dataType,
        payload
    };
}

export function updateSkill(fieldName, value) {
    return {
        type: UPDATE_SKILL,
        fieldName,
        value
    };
}

export function updateAbility(fieldName, value) {
    return {
        type: UPDATE_ABILITY,
        fieldName,
        value
    };
}

export function updateAllAbilities(abilitiesList) {
    return {
        type: UPDATE_ALL_ABILITIES,
        abilities: rollAllAbilities(abilitiesList)
    };
}


