import React from 'react';

import Form from 'react-bootstrap/Form';

const userForm = (props) => {

    if (!props.usr) return null;
    return (
        <Form>
            <Form.Control data-testid="detail-id" size="sm" type="text" disabled value={props.usr.id}  />
            <br />
            <Form.Control data-testid="detail-name" size="sm" type="text" disabled value={props.usr.name}  />
            <br />
            <Form.Control data-testid="detail-username" size="sm" type="text" disabled value={props.usr.username}  />
            <br />
            <Form.Control data-testid="detail-email" size="sm" type="text" disabled value={props.usr.email}  />
            <br />
            <Form.Control data-testid="detail-street" size="sm" type="text" disabled value={props.usr.address.street}  />
            <br />
            <Form.Control data-testid="detail-suite" size="sm" type="text" disabled value={props.usr.address.suite}  />
            <br />
            <Form.Control data-testid="detail-city" size="sm" type="text" disabled value={props.usr.address.city}  />
            <br />
            <Form.Control data-testid="detail-zipcode" size="sm" type="text" disabled value={props.usr.address.zipcode}  />
            <br />
        </Form>
    );
};
userForm.defaultProps = {
    isEdit: false
};

export default userForm;