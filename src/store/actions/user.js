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
        type: actionTypes.FETCH_USERS_FAILED,
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