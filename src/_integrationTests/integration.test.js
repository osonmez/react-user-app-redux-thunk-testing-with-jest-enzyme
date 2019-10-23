import moxios from 'moxios';
import { createTestStore } from '../shared/testUtil';
import * as userActions from '../store/actions/user';
import { testUserArray } from '../shared/testData';
import configureMockStore from 'redux-mock-store';
import { middlewares} from '../store';

const mockStore = configureMockStore(middlewares)

describe('Fetch users', () => {

    describe('Action calls', () => {

        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('Should call FETCH_USERS_START and FETCH_USERS_SUCCESS actions', () => {
            const testStore = mockStore();

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: testUserArray
                });
            });

            const expectedActions = [
                userActions.fetchUsersStarted(),
                userActions.fetchUsersSuccess(testUserArray)
            ]

            return testStore.dispatch(userActions.fetchUsers()).then(() => {
                expect(testStore.getActions()).toStrictEqual(expectedActions);
            });

        });

        it('Should call FETCH_USERS_START and FETCH_USERS_FAIL actions', () => {
            const testStore = mockStore();

            const errResp = {
                status: 422,
                response: { message: 'problem' },
            };

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.reject(errResp);
            });

            const expectedActions = [
                userActions.fetchUsersStarted(),
                userActions.fetchUsersFailed({
                    response: {
                        data: undefined,
                        message: "problem",
                    },
                    status: 422
                })
            ]

            return testStore.dispatch(userActions.fetchUsers()).then(() => {
                expect(testStore.getActions()).toEqual(expectedActions);
            });

        });

    });

    describe('State changes', () => {

        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('should update store correctly in success case', () => {
            const testStore = createTestStore();

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: testUserArray
                });
            });

            return testStore.dispatch(userActions.fetchUsers()).then(() => {
                const newState = testStore.getState();
                expect(newState.user.users).toStrictEqual(testUserArray);
            });
        });

        it('should update store correctly in fail case', () => {
            const testStore = createTestStore();

            const errResp = {
                status: 422,
                response: { message: 'problem' },
            };

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.reject(errResp);
            });

            return testStore.dispatch(userActions.fetchUsers()).then(() => {
                const newState = testStore.getState();
                expect(newState.user.error.response.message).toBe(errResp.response.message);
            });
        });

    });

});