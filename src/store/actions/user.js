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

export const deleteUserStart = () => {
    return {
        type: actionTypes.DELETE_USER_START
    }
};

export const deleteUserSuccess = (id) => {
    return {
        type: actionTypes.DELETE_USER_SUCCESS,
        id: id
    }
};

export const deleteUserFail = (error) => {
    return {
        type: actionTypes.DELETE_USER_FAIL,
        error: error
    }
};

export const deleteUser = (id) => {
    return dispatch => {
        dispatch(deleteUserStart());
        return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => dispatch(deleteUserSuccess(id)))
        .catch(error => dispatch(deleteUserFail(error)));
    };
};

export const addUserStart = () => {
    return {
        type: actionTypes.ADD_USER_START
    }
};

export const addUserSuccess = (user) => {
    return {
        type: actionTypes.ADD_USER_SUCCESS,
        user: user
    }
};

export const addUserFail = (error) => {
    return {
        type: actionTypes.ADD_USER_FAIL,
        error: error
    }
};

export const addUser = (user) => {
    return dispatch => {
        dispatch(addUserStart());
        return axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then(response => dispatch(addUserSuccess(response.data)))
        .catch(error => dispatch(addUserFail(error)));
    }
};