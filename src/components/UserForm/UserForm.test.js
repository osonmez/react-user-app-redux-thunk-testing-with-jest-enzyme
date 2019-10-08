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
                isEdit: false,
                submit: () => {}
            };
            const warning = checkProps(UserForm, expectedProps);
            expect(warning).toBeUndefined();
        });

    });

    describe('Render user edit', () => {
        let wrapper;
        let testUser;
        let mockFunc;

        beforeEach(() => {
            mockFunc = jest.fn();
            testUser = testUserArray[0];
            wrapper = setUpShallowWrapper(UserForm, {usr : testUser, isEdit: false, submit: mockFunc}).dive();
        });

        it('Should have name', () => {          
            const component = findByTestIdAttr(wrapper, 'name');            
            expect(component.prop('value')).toBe(testUser.name);
        });

        it('Should have username', () => {            
            const component = findByTestIdAttr(wrapper, 'username');            
            expect(component.prop('value')).toBe(testUser.username);
        });

        it('Should have email', () => {            
            const component = findByTestIdAttr(wrapper, 'email');            
            expect(component.prop('value')).toBe(testUser.email);
        });

        it('Should have street', () => {            
            const component = findByTestIdAttr(wrapper, 'street');            
            expect(component.prop('value')).toBe(testUser.address.street);
        });

        it('Should have suite', () => {            
            const component = findByTestIdAttr(wrapper, 'suite');            
            expect(component.prop('value')).toBe(testUser.address.suite);
        });

        it('Should have city', () => {            
            const component = findByTestIdAttr(wrapper, 'city');            
            expect(component.prop('value')).toBe(testUser.address.city);
        });

        it('Should have zipcode', () => {            
            const component = findByTestIdAttr(wrapper, 'zipcode');            
            expect(component.prop('value')).toBe(testUser.address.zipcode);
        });

    });

    describe('Render user add', () => {
        let wrapper;
        let testUser;
        let mockFunc;

        beforeEach(() => {
            mockFunc = jest.fn();
            testUser = testUserArray[0];
            wrapper = setUpShallowWrapper(UserForm, {submit: mockFunc}).dive();
        });

        it('Should have empty name', () => {      
            const component = findByTestIdAttr(wrapper, 'name');            
            expect(component.prop('value')).toBe('');
        });


    });

});