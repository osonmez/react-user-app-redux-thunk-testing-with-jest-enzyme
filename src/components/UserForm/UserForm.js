import React from 'react';

import Form, { Row } from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const userForm = (props) => {

    if (!props.usr) return null;
    return (
        <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Name" data-testid="name" size="sm" type="text" value={props.usr.name} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="">
                <Form.Label column sm={2}>
                    Username
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Username" data-testid="username" size="sm" type="text" value={props.usr.username} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    EMail
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Email" data-testid="email" size="sm" type="email" value={props.usr.email} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Street
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Street" data-testid="street" size="sm" type="text" value={props.usr.address.street} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Suite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Suite" data-testid="suite" size="sm" type="text" value={props.usr.address.suite} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    City
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="City" data-testid="city" size="sm" type="text" value={props.usr.address.city} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Zipcode
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Zipcode" data-testid="zipcode" size="sm" type="text" value={props.usr.address.zipcode} />
                </Col>
            </Form.Group>
        </Form>
    );
};
userForm.defaultProps = {
    isEdit: false
};

export default userForm;