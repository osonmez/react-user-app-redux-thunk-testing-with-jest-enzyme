import React, { Component } from 'react';
import classes from './Layout.module.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

class Layout extends Component {

    render() {
        return (
            <div className={classes.Layout}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/users">Users App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav 
                        className="mr-auto" 
                        activeKey={this.props.location.pathname}>
                            <Nav.Link as={NavLink} to="/">Users</Nav.Link>
                            <Nav.Link as={NavLink} to="/add">Add</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>
                            {this.props.children}
                        </Col>
                    </Row>

                </Container>
            </div>);
    }
}

export default withRouter(Layout);