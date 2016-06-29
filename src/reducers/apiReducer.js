import {FETCH_DATA} from '../constants/actionTypes';

export default function (state = [], action) {
    switch(action.type){

    case FETCH_DATA:
        // console.log(action.payload)
        return [...state, ...action.payload.data];

    default :
        return state;
    }
}
