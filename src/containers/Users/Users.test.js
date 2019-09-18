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
            expect(component.length).toBe(0);
        });
    });

    describe('With state', () => {
        
        let wrapper;
        
        beforeEach(() => {
            wrapper = shallow(<Users />);
            wrapper.setState(testState);
        });

        it('should have two child user components', () => {
            expect(wrapper.find(User)).toHaveLength(2);
        });
        
        it('Should have action buttons', () => {
            expect(wrapper.find('ButtonToolbar')).toHaveLength(2);
        });

        it('Should have details button', () => {
            const component = findByTestAttr(wrapper, 'details-button');
            expect(component).toHaveLength(2);
        });

    });



});