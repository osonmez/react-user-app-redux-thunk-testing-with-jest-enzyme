import moxios from 'moxios';
import { createTestStore } from '../shared/testUtil';
import * as actionTypes from '../store/actions/actionTypes'


describe('fetch users', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('Store is updated correctly', () => {
        
    });

});