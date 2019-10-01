import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

import User from '../../components/User/User';
import Modal from '../../components/UI/Modal/Modal';
import UserDetails from '../../components/UserDetails/UserDetails';


import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

class Users extends Component {

    state = {
        users: null,
        showModal:false,
        edit: false,
        selectedUser: null
    }

    showModalHandler = (user, isEdit = false) => {
        this.setState({showModal: true, edit: isEdit, selectedUser: user});
    }

    closeHandler = () => {
        this.setState({showModal: false, edit: false, selectedUser: null});
    }

    deleteHandler = (id) => {
        const updatedUsers = this.state.users.filter(user => user.id !== id);
        this.setState({users:updatedUsers});
    }

    editHandler = (user) => {
        this.setState({showModal: true, selectedUser: user});
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
                                <Button variant="info" data-test="details-button" onClick={() => this.showModalHandler(user)}>Info</Button>
                                <Button variant="warning" data-test="edit-button" onClick={() => this.showModalHandler(user, true)}>Edit</Button>
                                <Button variant="danger" data-test="delete-button" onClick={() => this.deleteHandler(user.id)}>Delete</Button>
                            </ButtonToolbar>
                        </ListGroup.Item>);
                })}
            </ListGroup>);
        }

        return (
            <div>
                {<Modal title="User" show={this.state.showModal} handleClose={this.closeHandler} ><UserDetails usr={this.state.selectedUser} isEdit={this.state.edit} /></Modal>}
                {userList}
            </div>);
    }
}

export default Users;