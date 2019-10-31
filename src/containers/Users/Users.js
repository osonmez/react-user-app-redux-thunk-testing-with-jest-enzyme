import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';

import User from '../../components/User/User';
import Modal from '../../components/UI/Modal/Modal';
import UserForm from '../../components/UserForm/UserForm';
import UserInfo from '../../components/UserInfo/UserInfo';

import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import * as userActions from '../../store/actions/user';

export class Users extends Component {

    deleteHandler = (id) => {
        this.props.delete(id);
    }

    editHandler = (user) => {
        this.props.saveUser(user);
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    render() {

        let userList = null;
        let modalContent = null;

        const showModal = this.props.selectedUser ? true: false;

        if (this.props.selectedUser) {
            modalContent = this.props.edit ? <UserForm usr={this.props.selectedUser} submit={this.editHandler} /> : <UserInfo usr={this.props.selectedUser} />;
        }


        if (this.props.users) {
            userList = (<ListGroup data-test="users">
                {this.props.users.map(user => {
                    return (
                        <ListGroup.Item key={user.id} >
                            <User usr={user} />
                            <ButtonToolbar>
                                <Button variant="info" data-test="info-button" onClick={() => this.props.showUser(user, false)}>Info</Button>
                                <Button variant="warning" data-test="edit-button" onClick={() => this.props.showUser(user, true)}>Edit</Button>
                                <Button variant="danger" data-test="delete-button" onClick={() => this.deleteHandler(user.id)}>Delete</Button>
                            </ButtonToolbar>
                        </ListGroup.Item>);
                })}
            </ListGroup>);
        }

        return (
            <div>
                {<Modal title="User" show={showModal} handleClose={this.props.hideUser} >
                    {modalContent}
                </Modal>}
                {userList}
            </div>);
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loading: state.user.loading,
        edit: state.user.edit,
        selectedUser: state.user.selectedUser,
        error: state.user.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(userActions.fetchUsers()),
        showUser: (selectedUser, edit) => dispatch(userActions.showUser(selectedUser, edit)),
        hideUser: () => dispatch(userActions.hideUser()),
        saveUser: (selectedUser) => dispatch(userActions.editUser(selectedUser)),
        delete: (id) => dispatch(userActions.deleteUser(id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);