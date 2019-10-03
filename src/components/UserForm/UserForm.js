import React from 'react';

import Form from 'react-bootstrap/Form';

const userForm = (props) => {

    if (!props.usr) return null;
    return (
        <Form>
            <Form.Control data-testid="id" size="sm" type="text" disabled value={props.usr.id}  />
            <br />
            <Form.Control data-testid="name" size="sm" type="text" disabled value={props.usr.name}  />
            <br />
            <Form.Control data-testid="username" size="sm" type="text" disabled value={props.usr.username}  />
            <br />
            <Form.Control data-testid="email" size="sm" type="text" disabled value={props.usr.email}  />
            <br />
            <Form.Control data-testid="street" size="sm" type="text" disabled value={props.usr.address.street}  />
            <br />
            <Form.Control data-testid="suite" size="sm" type="text" disabled value={props.usr.address.suite}  />
            <br />
            <Form.Control data-testid="city" size="sm" type="text" disabled value={props.usr.address.city}  />
            <br />
            <Form.Control data-testid="zipcode" size="sm" type="text" disabled value={props.usr.address.zipcode}  />
            <br />
        </Form>
    );
};
userForm.defaultProps = {
    isEdit: false
};

export default userForm;