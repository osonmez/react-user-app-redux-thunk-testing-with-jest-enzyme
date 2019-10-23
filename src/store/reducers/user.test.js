import * as actionTypes from '../actions/actionTypes';
import userReducer from './user';
import { testUserArray, testState } from '../../shared/testData';

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

    it('Should fetch select user for info', () => {
        const newState = userReducer(undefined, {
            type: actionTypes.SHOW_USER,
            selectedUser: testUserArray[0],
            edit: false
        });
        expect(newState).toStrictEqual({
            ...testState,
            selectedUser: testUserArray[0],
            edit: false
        });
    });

    it('Should fetch select user for edit', () => {
        const newState = userReducer(undefined, {
            type: actionTypes.SHOW_USER,
            selectedUser: testUserArray[0],
            edit: true
        });
        expect(newState).toStrictEqual({
            ...testState,
            selectedUser: testUserArray[0],
            edit: true
        });
    });

    it('Should fetch select user for edit', () => {
        const newState = userReducer({
            ...testState,
            selectedUser: testUserArray[0],
            edit: true
        }, {
            type: actionTypes.HIDE_USER
        });
        expect(newState).toStrictEqual({
            ...testState,
            selectedUser: null,
            edit: false
        });
    });

});