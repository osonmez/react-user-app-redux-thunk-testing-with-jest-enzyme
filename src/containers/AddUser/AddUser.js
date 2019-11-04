import React, { Component } from 'react';
import UserForm from '../../components/UserForm/UserForm';
import * as userActions from '../../store/actions/user';
import { connect } from 'react-redux';

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

const mapDispatchToProps = dispatch => {
    return {
        save: (user) => dispatch(userActions.addUser(user))
    }
};

export default connect(null, mapDispatchToProps)(AddUser);
