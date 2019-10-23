import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    loading: false,
    edit: false,
    selectedUser: null,
    error: null
};


const fetchUsersStart = (state) => {
    return { ...state, loading: true };
};

const fetchUsersSuccess = (state, action) => {
    return { ...state, users: action.users, loading: false };
};

const fetchUsersFail = (state, action) => {
    return { ...state, loading: false, error: action.error };
};

const showUser = (state, action) => {
    return { ...state, selectedUser: action.selectedUser, edit: action.edit};
};

const hideUser = (state) => {
    return { ...state, selectedUser: null, edit: false};
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_USERS_START:
            return fetchUsersStart(state);
        case actionTypes.FETCH_USERS_SUCCESS:
            return fetchUsersSuccess(state, action);
        case actionTypes.FETCH_USERS_FAIL:
            return fetchUsersFail(state, action);
        case actionTypes.SHOW_USER:
            return showUser(state, action);
        case actionTypes.HIDE_USER:
            return hideUser(state);
        default:
            return state;
    }

}

export default reducer;