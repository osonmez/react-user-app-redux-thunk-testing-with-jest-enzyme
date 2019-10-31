import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchUsersStarted = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    }
};

export const fetchUsersSuccess = (users) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        users: users
    }
};

export const fetchUsersFailed = (error) => {
    return {
        type: actionTypes.FETCH_USERS_FAIL,
        error: error
    }
};

export const fetchUsers = () => {
      return dispatch => {
          dispatch(fetchUsersStarted());

          return axios.get('http://jsonplaceholder.typicode.com/users')
          .then(res => dispatch(fetchUsersSuccess(res.data)))
          .catch(err => dispatch(fetchUsersFailed(err)));
      };
};

export const editUserStarted = () => {
    return {
        type: actionTypes.EDIT_USER_START
    }
};

export const editUserSuccess = (user) => {
    return {
        type: actionTypes.EDIT_USER_SUCCESS,
        user: user
    }
};

export const editUserFailed = (error) => {
    return {
        type: actionTypes.EDIT_USER_FAIL,
        error: error
    }
};

export const editUser = (user) => {
    return dispatch => {
        dispatch(editUserStarted());

        return axios.put(`http://jsonplaceholder.typicode.com/users/${user.id}`, user)
        .then(res => dispatch(editUserSuccess(user)))
        .catch(err => dispatch(editUserFailed(err)));
    };
};

export const showUser = (selectedUser, edit) => {
    return {
        type: actionTypes.SHOW_USER,
        selectedUser: selectedUser,
        edit: edit
    }
};

export const hideUser = () => {
    return {
        type: actionTypes.HIDE_USER,
        selectedUser: null,
        edit: false
    }
};
