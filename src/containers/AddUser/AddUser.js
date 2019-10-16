import React, { Component } from 'react';
import UserForm from '../../components/UserForm/UserForm';

import classes from './AddUser.module.css';

class AddUser extends Component {

    addUserHandler = (user) => {
        console.log(user);
    }

    render() {
        return (
            <div className={classes.AddUser}>
                <UserForm submit={this.addUserHandler}/>
            </div>
        )
    }
}

export default AddUser
