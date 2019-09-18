import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

import User from '../../components/User/User';
import { testUserArray } from '../../shared/testData';

class Users extends Component {

    state = {
        users: testUserArray
    }

    render(){
        return (
        <ListGroup data-test="users">
            {this.state.users.map(user => {
                return (
                    <ListGroup.Item key={user.id} >
                        <User usr={user} />
                    </ListGroup.Item>);
            })}
        </ListGroup>
        );
    }
}

export default Users;