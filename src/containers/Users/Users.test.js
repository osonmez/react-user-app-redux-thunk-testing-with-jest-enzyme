import React from 'react';
import { shallow } from 'enzyme';

import {Users} from './Users';
import User from '../../components/User/User';
import { findByTestAttr } from '../../shared/testUtil';
import { testUserArray, testState } from '../../shared/testData';

describe('<Users />', () => {

    describe('Without users, do not render list', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                fetchUsers: jest.fn(),
                showUser: jest.fn(user => {} )
            }
            wrapper = shallow(<Users {...props} />);
        });

        it('should render without errors', () => {
            const component = findByTestAttr(wrapper, 'users');
            expect(component.exists()).toBeFalsy();
        });
    });

    describe('With users, render list', () => {
        
        let wrapper;
        const props = {
            ...testState,
            users: testUserArray,
            fetchUsers: jest.fn(),
            showUser: jest.fn((user, edit) => {} )
        }
        
        beforeEach(() => {   
            props.fetchUsers.mockClear();     
            props.showUser.mockClear();    
            wrapper = shallow(<Users  {...props} />);
        });

        it('should have two child user components', () => {
            expect(wrapper.find(User).exists()).toBeTruthy();
        });
        
        it('Should have action buttons', () => {
            expect(wrapper.find('ButtonToolbar').exists()).toBeTruthy();
        });

        it('Should have details button', () => {
            const component = findByTestAttr(wrapper, 'info-button');
            expect(component.exists()).toBeTruthy();
        });

        it('Should have details text', () => {
            const component = findByTestAttr(wrapper, 'info-button');
            expect(component.first().text()).toBe('Info');
        });

        it('Should have edit button', () => {
            const component = findByTestAttr(wrapper, 'edit-button');
            expect(component.exists()).toBeTruthy();
        });

        it('Should have edit text', () => {
            const component = findByTestAttr(wrapper, 'edit-button');
            expect(component.first().text()).toBe('Edit');
        });

        it('Should have delete button', () => {
            const component = findByTestAttr(wrapper, 'delete-button');
            expect(component.exists()).toBeTruthy();
        });

        it('Should have delete text', () => {
            const component = findByTestAttr(wrapper, 'delete-button');
            expect(component.first().text()).toBe('Delete');
        });

        it('Should click details button', () => {
            const component = findByTestAttr(wrapper, 'info-button');
            component.first().simulate('click');
            expect(props.showUser.mock.calls.length).toBe(1);
            expect(props.showUser).toHaveBeenCalledWith(testUserArray[0], false);
        });

        it('Should click edit button', () => {
            const component = findByTestAttr(wrapper, 'edit-button');
            component.first().simulate('click');
            expect(props.showUser.mock.calls.length).toBe(1);
            expect(props.showUser).toHaveBeenCalledWith(testUserArray[0], true);
        });

        /*it('Should delete a user', () => {
            const instance = wrapper.instance();
            const deleteButton = findByTestAttr(wrapper, 'delete-button').first();
            const spy = jest.spyOn(instance, 'deleteHandler');
            deleteButton.simulate('click');
            expect(spy).toHaveBeenCalledWith(testState.users[0].id);
            //expect(wrapper.state().users.length).toBe(1);

        }); */      

    });

});