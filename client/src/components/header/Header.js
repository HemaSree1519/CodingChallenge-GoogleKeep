import React, {Component, Fragment} from 'react';
import './styles.css'
import {Collapse, Label, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {LinkContainer} from "react-router-bootstrap";

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar">
                    <NavbarBrand>
                        <Label className="link">Google Keep</Label>
                    </NavbarBrand>
                    <NavbarToggler/>
                    <Collapse isOpen={true}>
                        <Nav>
                            {this.props.isAuthenticated
                                ?
                                <NavItem onClick={this.props.handleLogout} className="link" name="logout">Logout
                                </NavItem>
                                : <Fragment>
                                    <LinkContainer to="/signup">
                                        <NavItem>
                                            <NavLink href="/signup" className="link" name="signup">Signup</NavLink>
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to="/login">
                                        <NavItem>
                                            <NavLink href="/login" className="link" name="login">Login</NavLink>
                                        </NavItem>
                                    </LinkContainer>
                                </Fragment>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Header;