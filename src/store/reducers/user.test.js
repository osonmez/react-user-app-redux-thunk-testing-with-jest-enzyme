import * as actionTypes from '../actions/actionTypes';
import userReducer from './user';
import { testUserArray, testInitialState, testInitialStateWithUsers, editedUser, newUser } from '../../shared/testData';

describe('User Reducer', () => {

    it('Should return default state', () => {
        const iState = userReducer(undefined, {});
        expect(iState).toStrictEqual(testInitialState);
    });

    it('Should fetch users start', () => {
        const newState = userReducer(undefined, {
            type: actionTypes.FETCH_USERS_START
        });
        expect(newState).toStrictEqual({
            ...testInitialState,
            loading: true
        });
    });

    it('Should fetch users success', () => {
        const newState = userReducer(undefined, {
            type: actionTypes.FETCH_USERS_SUCCESS,
            users: testUserArray
        });
        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            loading: false
        });
    });

    it('Should fetch users failed', () => {
        const newState = userReducer(undefined, {
            type: actionTypes.FETCH_USERS_FAIL,
            error: 'TEST ERROR!'
        });
        expect(newState).toStrictEqual({
            ...testInitialState,
            error: 'TEST ERROR!'
        });
    });

    it('Should fetch select user for info', () => {
        const newState = userReducer(testInitialStateWithUsers, {
            type: actionTypes.SHOW_USER,
            selectedUser: testUserArray[0],
            edit: false
        });
        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            selectedUser: testUserArray[0],
            edit: false
        });
    });

    it('Should fetch select user for edit', () => {
        const newState = userReducer(testInitialStateWithUsers, {
            type: actionTypes.SHOW_USER,
            selectedUser: testUserArray[0],
            edit: true
        });
        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            selectedUser: testUserArray[0],
            edit: true
        });
    });

    it('Should fetch select user for edit', () => {
        const newState = userReducer({
            ...testInitialStateWithUsers,
            selectedUser: testUserArray[0],
            edit: true
        }, {
            type: actionTypes.HIDE_USER
        });
        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            selectedUser: null,
            edit: false
        });
    });

    it('Should edit user successfuly', () => {
        const newState = userReducer({
            ...testInitialStateWithUsers,
            selectedUser: testUserArray[0],
            edit: true,
            loading:true
        }, {
            type: actionTypes.EDIT_USER_SUCCESS,
            user: {
                ...editedUser,
                id: testUserArray[0].id                
            }
        });

        const updatedArray = testUserArray.map(user => {
            if(user.id === testUserArray[0].id){
                return {
                    ...editedUser,
                    id: testUserArray[0].id    
                }
            }
            return user;
        })

        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            edit:false,
            selectedUser: null,
            users: updatedArray,
            loading:false
        });
    });

    it('Should fail user edit', () => {
        const newState = userReducer({
            ...testInitialStateWithUsers,
            selectedUser: testUserArray[0],
            edit: true
        }, {
            type: actionTypes.EDIT_USER_FAIL,
            error: 'TEST EDIT ERROR!'
        });
        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            edit:false,
            loading:false,
            selectedUser: null,
            error: 'TEST EDIT ERROR!'
        });
    });

    it('Should fail user edit', () => {
        const newState = userReducer({
            ...testInitialStateWithUsers,
            selectedUser: testUserArray[0],
            edit: true
        }, {
            type: actionTypes.EDIT_USER_START
        });
        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            selectedUser: testUserArray[0],
            edit: true,
            loading:true
        });
    });

    it('Should delete user start', () => {
        const newState = userReducer({
            ...testInitialStateWithUsers,
            selectedUser: null,
            edit: false,
            loading:false
        }, {
            type: actionTypes.DELETE_USER_START,
        });
        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            selectedUser: null,
            edit: false,
            loading:true
        });
    });

    it('Should delete user successfully', () => {
        const newState = userReducer({
            ...testInitialStateWithUsers,
            selectedUser: null,
            edit: false
        }, {
            type: actionTypes.DELETE_USER_SUCCESS,
            id: testUserArray[0].id
        });
        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            users: [testUserArray[1]],
            selectedUser: null,
            edit: false,
            loading:false
        });
    });

    it('Should delete user start', () => {
        const newState = userReducer({
            ...testInitialStateWithUsers,
            selectedUser: null,
            edit: false,
            loading:false
        }, {
            type: actionTypes.DELETE_USER_FAIL,
            error: 'DELETE ERROR!'
        });
        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            selectedUser: null,
            edit: false,
            error: 'DELETE ERROR!',
            loading:false
        });
    });

    it('Should add user', () => {
        const newState = userReducer(testInitialStateWithUsers, {
            type: actionTypes.ADD_USER_SUCCESS,
            user: newUser
        });

        const updatedUsers = [...testUserArray, newUser];

        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            users: updatedUsers
        });

    });

    it('Should add user fail', () => {
        const newState = userReducer(testInitialStateWithUsers, {
            type: actionTypes.ADD_USER_FAIL,
            error: 'ADD USER ERROR!'
        });

        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            error: 'ADD USER ERROR!'
        });

    });

    it('Should add user start', () => {
        const newState = userReducer(testInitialStateWithUsers, {
            type: actionTypes.ADD_USER_START
        });

        expect(newState).toStrictEqual({
            ...testInitialStateWithUsers,
            loading: true
        });

    });

});