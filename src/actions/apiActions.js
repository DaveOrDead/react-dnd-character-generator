import {FETCH_DATA} from '../constants/actionTypes';
import axios from "axios";

const ROOT_URL = 'https://dnd-character-gen-server.herokuapp.com/api/alignments';

export function fetchData(data){
    const url = ROOT_URL;
    // console.log(url);
    const request = axios.get(url);
    return {
        type: FETCH_DATA,
        payload: request
    };

}
