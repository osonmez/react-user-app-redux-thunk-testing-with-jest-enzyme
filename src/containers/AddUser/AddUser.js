import React, { Component } from 'react';
import UserForm from '../../components/UserForm/UserForm';

class AddUser extends Component {

    render() {
        return (
            <div>
                <UserForm submit={(e) => {e.preventDefault()}}/>
            </div>
        )
    }
}

export default AddUser
