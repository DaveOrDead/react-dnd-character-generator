import axios from "axios";

import {REQUEST_DATA, RECEIVE_DATA} from '../constants/actionTypes';

const ROOT_URL = 'https://dnd-character-gen-server.herokuapp.com/api';

export function fetchDataIfNeeded(data) {
    return (dispatch, getState) => {
        if (shouldFetchData(getState(), data)) {
            return dispatch(fetchData(data));
        }
    };
}

function fetchData(data) {
    return dispatch => {
        dispatch(requestData(data));
            return axios.get(`${ROOT_URL}/${data}`)
            .then(payload => dispatch(receiveData(data, payload)));
    };
}

function requestData(data) {
    return {
        type: REQUEST_DATA,
        data
    };
}

function receiveData(data, payload) {
    return {
        type: RECEIVE_DATA,
        data,
        payload
    };
}

function shouldFetchData(state, data) {

    const res = state.api[data];

    if (!res) {
        return true;
    } else if (res.isFetching) {
        return false;
    } else {
        return res.didInvalidate;
    }
}

