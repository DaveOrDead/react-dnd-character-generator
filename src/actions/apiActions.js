import axios from "axios";

import {REQUEST_DATA, RECEIVE_DATA} from '../constants/actionTypes';
import {ROOT_URL} from '../constants/urls';


export function fetchDataIfNeeded(data, id) {
    return (dispatch, getState) => {
        if (shouldFetchData(getState(), data, id)) {
            return dispatch(fetchData(data, id));
        }
    };
}

function constructURL(data, id) {
    let url = `${ROOT_URL}/${data}`;
    if(id){
        url += `/${id}`;
    }
    return url;
}

function fetchData(data, id) {
    return dispatch => {
        dispatch(requestData(data, id));
            return axios.get(constructURL(data, id))
            .then(payload => dispatch(receiveData(data, payload)));
    };
}

function requestData(data, id) {
    return {
        type: REQUEST_DATA,
        data,
        id
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

