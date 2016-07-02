import {REQUEST_DATA, RECEIVE_DATA} from '../constants/actionTypes';

export default function (state = {isFetching: false,
  didInvalidate: false }, action) {

    switch(action.type) {

        case REQUEST_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });

        case RECEIVE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                [action.data]: action.payload.data
            });

        default :
            return state;
    }
}
