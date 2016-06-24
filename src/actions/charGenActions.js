import * as types from '../constants/actionTypes';
import { get } from 'superagent';


export function updateValue(fieldName, value) {
  return {type: types.UPDATE_VALUE, fieldName, value};
}

export function updateRace(fieldName, value) {
  return {type: types.UPDATE_RACE, fieldName, value};
}

export function updateClass(fieldName, value) {
  return {type: types.UPDATE_CLASS, fieldName, value};
}

export function fetchData() {
   return dispatch => {
      dispatch(requestData());
      get(`https://dnd-character-gen-server.herokuapp.com/api/alignments.json`)
      .type('application/json')
      .accept('application/json')
      .end(function(err, res) {
         try {
            dispatch(receiveData(res.body.data));
            console.log("dispatched");
         } catch (e) {
            console.log('GET request failed!');
         }
      });
   };
}

function requestData() {
   return { type: 'REQUEST_DATA' };
}

function receiveData(data) {
   return { type: 'RECEIVE_DATA', data };
}



