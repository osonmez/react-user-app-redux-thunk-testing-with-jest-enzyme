import React from 'react';
import { shallow } from 'enzyme';

import Users from './Users';
import User from '../../components/User/User';
import { findByTestAttr } from '../../shared/testUtil';
import { testUserArray } from '../../shared/testData';

const testState = {
    users: testUserArray
}

describe('<Users />', () => {

    describe('Without state', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Users />);
        });

        it('should render without errors', () => {
            const component = findByTestAttr(wrapper, 'users');
            expect(component.exists()).toBeFalsy();
        });
    });

    describe('With state', () => {
        
        let wrapper;
        
        beforeEach(() => {
            wrapper = shallow(<Users />);
            wrapper.setState(testState);
        });

        it('should have two child user components', () => {
            expect(wrapper.find(User).exists()).toBeTruthy();
        });
        
        it('Should have action buttons', () => {
            expect(wrapper.find('ButtonToolbar').exists()).toBeTruthy();
        });

        it('Should have details button', () => {
            const component = findByTestAttr(wrapper, 'details-button');
            expect(component.exists()).toBeTruthy();
        });

        it('Should have details text', () => {
            const component = findByTestAttr(wrapper, 'details-button');
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

    });



});