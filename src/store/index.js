import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
    users: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;