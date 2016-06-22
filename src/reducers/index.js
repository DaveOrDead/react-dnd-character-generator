import { combineReducers } from 'redux';
import character from './charGenReducer';

const rootReducer = combineReducers({
  character
});

export default rootReducer;
