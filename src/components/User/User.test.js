import React from 'react';
import User from './User';

import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, findByTestIdAttr } from '../../shared/testUtil';
import { testUserArray } from '../../shared/testData';


const setUp = (props = {}) => {
    return shallow(<User {...props} />);
};

describe('<User />', () => {

    describe('Check props', () => {

        it('Should props match', () => {

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
            const warnings = checkProps(User, expectedProps);
            expect(warnings).toBeUndefined();
        });
    });

    describe('With props', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = setUp({ usr: testUserArray[0] });
        });

        it('Should render without error', () => {
            const component = findByTestAttr(wrapper, 'user');
            expect(component).toHaveLength(1);
        });

        it('Should have username', () => {
            const component = findByTestAttr(wrapper, 'username');
            expect(component).toHaveLength(1);
        })

    });

    describe('Without props', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'user');
            expect(component).toHaveLength(0);
        });

    });
});