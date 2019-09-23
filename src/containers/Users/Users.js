import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

import User from '../../components/User/User';
import { testUserArray } from '../../shared/testData';

import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

class Users extends Component {

    state = {
        users: null,
        showModal:false
    }

    showModalHandler = () => {
        this.setState({showModal: true});
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
                                <Button variant="info" data-test="details-button" onClick={this.showModalHandler}>Info</Button>
                                <Button variant="warning" data-test="edit-button">Edit</Button>
                                <Button variant="danger" data-test="delete-button">Delete</Button>
                            </ButtonToolbar>
                        </ListGroup.Item>);
                })}
            </ListGroup>);
        }

        return userList;
    }
}

export default Users;