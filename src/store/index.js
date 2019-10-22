import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user';

export const middlewares = [thunk];

export const rootReducer = combineReducers({
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;