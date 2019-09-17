import React from 'react';
import { shallow, mount } from 'enzyme';

import Users from './Users';
import User from '../../components/User/User';
import { findByTestAttr } from '../../shared/testUtil';
import { testUserArray } from '../../shared/testData';

const testState = {
    users: testUserArray
}

describe('<Users />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Users /> );
    });

    it('should render without errors', () => {
        const component = findByTestAttr(wrapper, 'users');
        expect(component.length).toBe(1);
    });

    it('should have two child user components', () => {
        const wrapper = mount(<Users />);
        wrapper.setState(testState);
        expect(wrapper.find(User)).toHaveLength(2);  
    });

});