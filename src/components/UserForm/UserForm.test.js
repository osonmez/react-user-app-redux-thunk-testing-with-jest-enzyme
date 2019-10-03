import React from 'react';

import UserForm from './UserForm';
import { checkProps, setUpShallowWrapper, findByTestIdAttr } from '../../shared/testUtil';
import { testUserArray } from '../../shared/testData';

describe('<UserForm />', () => {

    describe('Check props', () => {

        it('Should have correct props', () => {
            const expectedProps = {
                usr: {
                    id: 1,
                    name:'',
                    username: '',
                    email: '',
                    address: {
                        street: '',
                        suite: '',
                        city: '',
                        zipcode: ''
                    }
                },
                isEdit: false
            };
            const warning = checkProps(UserForm, expectedProps);
            expect(warning).toBeUndefined();
        });

    });

    describe('Render', () => {
        let wrapper;
        let testUser;

        beforeEach(() => {
            testUser = testUserArray[0];
            wrapper = setUpShallowWrapper(UserForm, {usr : testUser, isEdit: false});
        });

        it('Should have id', () => {            
            const component = findByTestIdAttr(wrapper, 'detail-id');            
            expect(component.prop('value')).toBe(testUser.id);
        });

        it('Should have name', () => {            
            const component = findByTestIdAttr(wrapper, 'detail-name');            
            expect(component.prop('value')).toBe(testUser.name);
        });

        it('Should have username', () => {            
            const component = findByTestIdAttr(wrapper, 'detail-username');            
            expect(component.prop('value')).toBe(testUser.username);
        });

        it('Should have email', () => {            
            const component = findByTestIdAttr(wrapper, 'detail-email');            
            expect(component.prop('value')).toBe(testUser.email);
        });

        it('Should have street', () => {            
            const component = findByTestIdAttr(wrapper, 'detail-street');            
            expect(component.prop('value')).toBe(testUser.address.street);
        });

        it('Should have suite', () => {            
            const component = findByTestIdAttr(wrapper, 'detail-suite');            
            expect(component.prop('value')).toBe(testUser.address.suite);
        });

        it('Should have city', () => {            
            const component = findByTestIdAttr(wrapper, 'detail-city');            
            expect(component.prop('value')).toBe(testUser.address.city);
        });

        it('Should have zipcode', () => {            
            const component = findByTestIdAttr(wrapper, 'detail-zipcode');            
            expect(component.prop('value')).toBe(testUser.address.zipcode);
        });

    });

});