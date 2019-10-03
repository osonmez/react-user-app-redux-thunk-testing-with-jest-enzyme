import React from 'react';
import { checkProps, setUpShallowWrapper, findByTestIdAttr } from '../../shared/testUtil';
import { testUserArray } from '../../shared/testData';
import UserInfo from './UserInfo';


describe('<UserInfo />', ()=> {

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
                }
            };
            const warning = checkProps(UserInfo, expectedProps);
            expect(warning).toBeUndefined();
        });

    });

    describe('Render', () => {
        let wrapper;
        let testUser;

        beforeEach(() => {
            testUser = testUserArray[0];
            wrapper = setUpShallowWrapper(UserInfo, {usr : testUser});
        });

        it('Should have info', () => {          
            const component = findByTestIdAttr(wrapper, 'info');            
            expect(component.length).toBe(1);
        });

        it('Should have info id', () => {            
            const component = findByTestIdAttr(wrapper, 'info-id');            
            expect(component.length).toBe(1);
        });

        it('Should have info name', () => {            
            const component = findByTestIdAttr(wrapper, 'info-name');            
            expect(component.length).toBe(1);
        });

        it('Should have info username', () => {            
            const component = findByTestIdAttr(wrapper, 'info-username');            
            expect(component.text()).toBe(testUser.username);
        });

        it('Should have info email', () => {            
            const component = findByTestIdAttr(wrapper, 'info-email');            
            expect(component.text()).toBe(testUser.email);
        });

        it('Should have info street', () => {            
            const component = findByTestIdAttr(wrapper, 'info-street');            
            expect(component.text()).toBe(testUser.address.street);
        });

        it('Should have info suite', () => {            
            const component = findByTestIdAttr(wrapper, 'info-suite');            
            expect(component.text()).toBe(testUser.address.suite);
        });

        it('Should have info city', () => {            
            const component = findByTestIdAttr(wrapper, 'info-city');            
            expect(component.text()).toBe(testUser.address.city);
        });

        it('Should have info zipcode', () => {            
            const component = findByTestIdAttr(wrapper, 'info-zipcode');            
            expect(component.text()).toBe(testUser.address.zipcode);
        });

    });
});