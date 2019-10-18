import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    loading:false,
    edit: false,
    selectedUser: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_USERS:
            return state;
        default:
            return state;
    }

}

export default reducer;