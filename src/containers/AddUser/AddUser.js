import React, { Component } from 'react';
import UserForm from '../../components/UserForm/UserForm';

import classes from './AddUser.module.css';

class AddUser extends Component {

    render() {
        return (
            <div className={classes.AddUser}>
                <UserForm submit={(e) => {e.preventDefault()}}/>
            </div>
        )
    }
}

export default AddUser
