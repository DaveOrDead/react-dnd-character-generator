import {combineReducers} from 'redux';
import character from './charGenReducer';
import api from './apiReducer';

const rootReducer = combineReducers({
  character,
  api
});

export default rootReducer;
