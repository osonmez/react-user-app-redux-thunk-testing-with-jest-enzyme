import React from 'react'
import AddUser from './AddUser';
import { setUpShallowWrapper, createTestStore } from '../../shared/testUtil';
import UserForm from '../../components/UserForm/UserForm';
import { shallow } from 'enzyme';

describe('<AddUser />', () => {

    let wrapper;

    beforeEach(() => {
        //wrapper = setUpShallowWrapper(AddUser);
        const testStore = createTestStore();
        wrapper = shallow(<AddUser store={testStore} />).dive();
    });

    it('Should has class AddUser', () => {
        const div = wrapper.find('div').first();
        expect(div.hasClass('AddUser')).toBeTruthy();
    });

    it('Should has UserForm', () => {
        const uForm = wrapper.find(UserForm);
        expect(uForm).toHaveLength(1)
    });      

});