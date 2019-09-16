import React from 'react';
import { shallow, mount } from 'enzyme';

import Users from './Users';
import User from '../../components/User/User';
import { findByTestAttr } from '../../shared/testUtil';

const testState = {
    users: [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874"
            }
          },
          {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
              "street": "Victor Plains",
              "suite": "Suite 879",
              "city": "Wisokyburgh",
              "zipcode": "90566-7771"
            }
          }
    ]
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