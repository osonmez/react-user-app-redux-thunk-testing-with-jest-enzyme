import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

import User from '../../components/User/User';
import { testUserArray } from '../../shared/testData';

import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

class Users extends Component {

    state = {
        users: null
    }

    render() {

        let userList = null;

        if (this.state.users) {
            userList = (<ListGroup data-test="users">
                {this.state.users.map(user => {
                    return (
                        <ListGroup.Item key={user.id} >
                            <User usr={user} />
                            <ButtonToolbar>
                                <Button variant="info" data-test="details-button">Info</Button>
                            </ButtonToolbar>
                        </ListGroup.Item>);
                })}
            </ListGroup>);
        }

        return userList;
    }
}

export default Users;