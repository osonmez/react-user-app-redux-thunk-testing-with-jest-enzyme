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

const editUserStart = (state) => {
    return {
        ...state,
        loading:true
    }
};

const editUserSuccess = (state, action) => {
    const updatedArray = state.users.map(user => {
        if(user.id === action.user.id){
            return {
                id: action.user.id,
                name: action.user.name,
                username: action.user.username,
                email: action.user.email,
                address: {
                    street: action.user.address.street,
                    suite: action.user.address.suite,
                    city: action.user.address.city,
                    zipcode: action.user.address.zipcode
                }   
            }
        }
        return user;
    });
    return {
        ...state,
        selectedUser: null,
        edit:false,
        users: updatedArray,
        loading:false
    }
};

const editUserFail = (state, action) => {
    return {
        ...state,
        selectedUser: null,
        edit:false,
        error: action.error,
        loading:false
    }
};

const deleteUserStart = (state) => {
    return {
        ...state,
        loading:true
    }
};

const deleteUserSuccess = (state, action) => {
    const updatedUsers = state.users.filter(user => user.id !== action.id);
    return {
        ...state,
        users: updatedUsers,
        selectedUser: null,
        edit:false,
        error: null,
        loading:false
    }
};

const deleteUserFail = (state, action) => {
    return {
        ...state,
        selectedUser: null,
        edit:false,
        error: action.error,
        loading:false
    }
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
        case actionTypes.EDIT_USER_START:
            return editUserStart(state);
        case actionTypes.EDIT_USER_SUCCESS:
            return editUserSuccess(state, action);
        case actionTypes.EDIT_USER_FAIL:
            return editUserFail(state, action);  
        case actionTypes.DELETE_USER_START:
            return deleteUserStart(state);  
        case actionTypes.DELETE_USER_SUCCESS:
            return deleteUserSuccess(state, action);    
        case actionTypes.DELETE_USER_FAIL:
            return deleteUserFail(state, action);       
        default:
            return state;
    }

}

export default reducer;