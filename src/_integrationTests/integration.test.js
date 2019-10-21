import moxios from 'moxios';
import { createTestStore } from '../shared/testUtil';
import * as userActions from '../store/actions/user';
import { testUserArray } from '../shared/testData';
import configureMockStore from 'redux-mock-store';
import { middlewares, rootReducer } from '../store';

const mockStore = configureMockStore(middlewares)

describe('fetch users', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('Store is updated correctly', () => {
        const testStore = createTestStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response: testUserArray
            });
        });

        return testStore.dispatch(userActions.fetchUsers()).then(() => {
            const newState = testStore.getState();
            console.log(newState);
            expect(newState.users.users).toStrictEqual(testUserArray);
        });

    });

    /*it('Store is updated correctly', () => {
        const testStore = mockStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response: testUserArray
            });
        });

        return testStore.dispatch(userActions.fetchUsers()).then(() => {
            const newState = testStore.getState();
            console.log(newState);
            expect(newState.users.users).toStrictEqual(testUserArray);
        });

    });*/

});