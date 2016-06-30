import {FETCH_DATA} from '../constants/actionTypes';
import axios from "axios";

const ROOT_URL = 'https://dnd-character-gen-server.herokuapp.com/api/';

export function fetchData(data){
    const url = ROOT_URL + data;
    const request = axios.get(url);

    return {
        type: FETCH_DATA,
        payload: request,
        data
    };
}
