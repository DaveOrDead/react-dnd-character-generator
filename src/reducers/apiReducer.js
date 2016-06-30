import {FETCH_DATA} from '../constants/actionTypes';
import objectAssign from 'object-assign';

export default function (state = [], action) {
    let newState;

    switch(action.type){

        case FETCH_DATA:
            newState = objectAssign({}, state);
            newState[action.data] = action.payload.data;
            return newState;

        default :
            return state;
        }
}
