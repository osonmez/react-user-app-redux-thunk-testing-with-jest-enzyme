import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Form, { Row } from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';


const schema = Yup.object().shape({
    name: Yup.string().required('First Name is required'),
    username: Yup.string().required('User Name is required'),
    email: Yup.string().email('Please enter a valid email').required('EMail is required'),
    street: Yup.string().required('Street is required'),
    suite: Yup.string().required('Suite is required'),
    city: Yup.string().required('City is required'),
    zipcode: Yup.string().required('Zipcode is required')
});

const userForm = (props) => {

    if (!props.usr) return null;

    const user = {
        name: props.usr.name ? props.usr.name : '',
        username: props.usr.username ? props.usr.username : '',
        email: props.usr.email ? props.usr.email : '',
        street: props.usr.address ? props.usr.address.street : '',
        suite: props.usr.address ? props.usr.address.suite : '',
        city: props.usr.address ? props.usr.address.city : '',
        zipcode: props.usr.address ? props.usr.address.zipcode : ''
    };
    
    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values, formikBag) => {
                //alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                props.submit(values);
            }}
            validateOnChange={true}
            validateOnBlur={true}
            initialValues={user}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="formName">
                            <Form.Label column sm={2}>
                                Name
                </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    placeholder="Name"
                                    name="name"
                                    data-testid="name"
                                    size="sm"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.name && !errors.name}
                                    isInvalid={touched.name && errors.name} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formUsername">
                            <Form.Label column sm={2}>
                                Username
                </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    placeholder="Username"
                                    name="username"
                                    data-testid="username"
                                    size="sm" type="text"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.username && !errors.username}
                                    isInvalid={touched.username && errors.username} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.username}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formEmail">
                            <Form.Label column sm={2}>
                                EMail
                </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    placeholder="Email"
                                    name="email"
                                    data-testid="email"
                                    size="sm"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && errors.email} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formStreet">
                            <Form.Label column sm={2}>
                                Street
                </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    placeholder="Street"
                                    name="street"
                                    data-testid="street"
                                    size="sm"
                                    type="text"
                                    value={values.street}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.street && !errors.street}
                                    isInvalid={touched.street && errors.street} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.street}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formSuite">
                            <Form.Label column sm={2}>
                                Suite
                </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    placeholder="Suite"
                                    name="suite"
                                    data-testid="suite"
                                    size="sm"
                                    type="text"
                                    value={values.suite}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.suite && !errors.suite}
                                    isInvalid={touched.suite && errors.suite} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.suite}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formCity">
                            <Form.Label column sm={2}>
                                City
                </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    placeholder="City"
                                    name="city"
                                    data-testid="city"
                                    size="sm"
                                    type="text"
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.city && !errors.city}
                                    isInvalid={touched.city && errors.city} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.city}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formZipcode">
                            <Form.Label column sm={2}>
                                Zipcode
                </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    placeholder="Zipcode"
                                    name="zipcode"
                                    data-testid="zipcode"
                                    size="sm"
                                    type="text"
                                    value={values.zipcode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.zipcode && !errors.zipcode}
                                    isInvalid={touched.zipcode && errors.zipcode} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.zipcode}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Button data-testid="submit-button" type="submit" disabled={!isValid}>
                            Submit
            </Button>
                    </Form>
                )}
        </Formik>
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
    submit: PropTypes.func.isRequired
}
userForm.defaultProps = {
    usr: {}
};

export default userForm;