import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {
      return createStore(rootReducer, initialState,
            applyMiddleware(thunkMiddleware));
}
