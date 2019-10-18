import * as actionTypes from '../actions/actionTypes';
import userReducer from './user';
import { testUserArray } from '../../shared/testData';

const testState = {
    users: [],
    loading: false,
    edit: false,
    selectedUser: null,
    error: null
};

describe('User Reducer', () => {

    it('Should return default state', () => {
        const iState = userReducer(undefined, {});
        expect(iState).toStrictEqual(testState);
    });

    it('Should fetch users start', () => {
        const newState = userReducer(undefined, {
            type: actionTypes.FETCH_USERS_START
        });
        expect(newState).toStrictEqual({
            ...testState,
            loading: true
        });
    });

    it('Should fetch users success', () => {
        const newState = userReducer(undefined, {
            type: actionTypes.FETCH_USERS_SUCCESS,
            users: testUserArray
        });
        expect(newState).toStrictEqual({
            ...testState,
            users: testUserArray,
            loading: false
        });
    });

    it('Should fetch users failed', () => {
        const newState = userReducer(undefined, {
            type: actionTypes.FETCH_USERS_FAIL,
            error: 'TEST ERROR!'
        });
        expect(newState).toStrictEqual({
            ...testState,
            error: 'TEST ERROR!'
        });
    });

});