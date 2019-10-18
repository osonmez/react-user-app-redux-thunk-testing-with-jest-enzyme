import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchUsersStarted = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    }
};

export const fetchUsersSuccess = (users) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS
    }
};

export const fetchUsersFailed = () => {
    return {
        type: actionTypes.FETCH_USERS_FAILED
    }
};

export const fetchUsers = () => {
      
};