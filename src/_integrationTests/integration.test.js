import moxios from 'moxios';
import { createTestStore } from '../shared/testUtil';
import * as userActions from '../store/actions/user';
import { testUserArray, testInitialStateWithUsers } from '../shared/testData';
import configureMockStore from 'redux-mock-store';
import { middlewares } from '../store';

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

describe('Edit user', () => {

    describe('Actions', () => {

        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('Should call EDIT_USER_START and EDIT_USER_SUCCESS actions', () => {
            const testStore = mockStore();

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: testUserArray[0]
                });
            });

            const expectedActions = [
                userActions.editUserStarted(),
                userActions.editUserSuccess(testUserArray[0])
            ];

            return testStore.dispatch(userActions.editUser(testUserArray[0])).then(() => {
                expect(testStore.getActions()).toStrictEqual(expectedActions);
            });

        });

        it('Should call EDIT_USER_START and EDIT_USER_FAIL actions', () => {
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
                userActions.editUserStarted(),
                userActions.editUserFailed({
                    response: {
                        data: undefined,
                        message: "problem",
                    },
                    status: 422
                })
            ];

            return testStore.dispatch(userActions.editUser(testUserArray[0])).then(() => {
                expect(testStore.getActions()).toStrictEqual(expectedActions);
            });

        });

    });

    describe('State', () => {

        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('should update store correctly in success case', () => {
            const testStore = createTestStore({
                user: {
                    ...testInitialStateWithUsers,
                    selectedUser: testUserArray[0],
                    edit: true
                }
            });

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: testUserArray[0]
                });
            });

            return testStore.dispatch(userActions.editUser(testUserArray[0])).then(() => {
                const newState = testStore.getState();
                expect(newState.user.users).toStrictEqual(testUserArray);
            });
        });

    });

});

describe('Delete user', () => {

    describe('Actions', () => {

        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('Should call DELETE_USER_START and DELETE_USER_SUCCESS actions', () => {
            const testStore = mockStore();

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200
                });
            });

            const expectedActions = [
                userActions.deleteUserStart(),
                userActions.deleteUserSuccess(testUserArray[0].id)
            ];

            return testStore.dispatch(userActions.deleteUser(testUserArray[0].id)).then(() => {
                expect(testStore.getActions()).toStrictEqual(expectedActions);
            });

        });

        it('Should call DELETE_USER_START and DELETE_USER_FAIL actions', () => {
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
                userActions.deleteUserStart(),
                userActions.deleteUserFail({
                    response: {
                        data: undefined,
                        message: "problem",
                    },
                    status: 422
                })
            ];

            return testStore.dispatch(userActions.deleteUser(testUserArray[0].id)).then(() => {
                expect(testStore.getActions()).toStrictEqual(expectedActions);
            });

        });

    });

    describe('State', () => {

        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('should update store correctly in success case', () => {
            const testStore = createTestStore({
                user: {
                    ...testInitialStateWithUsers,
                    selectedUser: null,
                    edit: false,
                    loading: false
                }
            });

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200
                });
            });

            return testStore.dispatch(userActions.deleteUser(testUserArray[0].id)).then(() => {
                const newState = testStore.getState();
                expect(newState.user.users).toStrictEqual([testUserArray[1]]);
            });
        });

    });

});