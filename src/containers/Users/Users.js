import React, { Component } from 'react';

import User from '../../components/User/User';

class Users extends Component {

    state = {
        users: []
    }

    render(){
        return (
        <div data-test="users">
            {this.state.users.map(user => {
                return <User key={user.id} usr={user} />
            })}
        </div>
        );
    }
}

export default Users;