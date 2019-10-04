import React from 'react';
import PropTypes from 'prop-types';

import Form, { Row } from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';

const userForm = (props) => {

    if (!props.usr) return null;
    return (
        <Form>
            <Form.Group as={Row} controlId="formName">
                <Form.Label column sm={2}>
                    Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Name" data-testid="name" size="sm" type="text" value={props.usr.name} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formUsername">
                <Form.Label column sm={2}>
                    Username
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Username" data-testid="username" size="sm" type="text" value={props.usr.username} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formEmail">
                <Form.Label column sm={2}>
                    EMail
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Email" data-testid="email" size="sm" type="email" value={props.usr.email} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formStreet">
                <Form.Label column sm={2}>
                    Street
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Street" data-testid="street" size="sm" type="text" value={props.usr.address.street} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formSuite">
                <Form.Label column sm={2}>
                    Suite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Suite" data-testid="suite" size="sm" type="text" value={props.usr.address.suite} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formCity">
                <Form.Label column sm={2}>
                    City
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="City" data-testid="city" size="sm" type="text" value={props.usr.address.city} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formZipcode">
                <Form.Label column sm={2}>
                    Zipcode
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Zipcode" data-testid="zipcode" size="sm" type="text" value={props.usr.address.zipcode} />
                </Col>
            </Form.Group>
            <Button variant="primary" data-testid="submit-button" type="submit" onClick={props.submit}>
                Submit
            </Button>
        </Form>
    );
};
userForm.propTypes = {
    usr: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        username: PropTypes.string,
        email: PropTypes.string,
        address: PropTypes.shape({
            street: PropTypes.string,
            suite: PropTypes.string,
            city: PropTypes.string,
            zipcode: PropTypes.string
        })
    }),
    edit: PropTypes.bool,
    submit: PropTypes.func.isRequired
}
userForm.defaultProps = {
    usr: {},
    isEdit: false
};

export default userForm;