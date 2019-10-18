import * as actionTypes from '../actions/actionTypes';
import userReducer from './user';

describe('User Reducer', () => {

    it('Should return default state', () => {
        const iState = userReducer(undefined, {});
        expect(iState).toStrictEqual({
            users: [],
            loading:false,
            edit: false,
            selectedUser: null
        });
    });

});