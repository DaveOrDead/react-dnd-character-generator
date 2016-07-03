import axios from "axios";

import {REQUEST_DATA, RECEIVE_DATA} from '../constants/actionTypes';
import {ROOT_URL} from '../constants/urls';


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

    const results = state.api[data];

    if (!results) {
        return true;
    } else if (results.isFetching) {
        return false;
    } else {
        return results.didInvalidate;
    }
}

