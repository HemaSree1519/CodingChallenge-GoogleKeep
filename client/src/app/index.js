import React, {Component, Fragment} from 'react';
import './styles.css'
import {Collapse, Label, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import Routes from "../router/Routes";
import {withRouter} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import {resetUser} from "../session/UserSession";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        };
    }

    userHasAuthenticated = (authenticated) => {
        this.setState({isAuthenticated: authenticated});
    };
    handleLogout = () => {
        try {
            this.setState({isAuthenticated: !this.state.isAuthenticated});
            resetUser();
            console.log("Logout")
        } catch (e) {
            alert(e.message);
        }
    };

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };
        return (
            <div className="App container">
                <Navbar className="navbar">
                    <NavbarBrand>
                        <Label className="link">Save Note App</Label>
                    </NavbarBrand>
                    <NavbarToggler/>
                    <Collapse isOpen={true}>
                        <Nav>
                            {this.state.isAuthenticated
                                ?
                                <NavItem onClick={this.handleLogout} className="link">Logout
                                </NavItem>
                                : <Fragment>
                                    <LinkContainer to="/signup">
                                        <NavItem>
                                            <NavLink href="/signup" className="link">Signup</NavLink>
                                        </NavItem>
                                    </LinkContainer>
                                </Fragment>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
                <Routes childProps={childProps}/>
            </div>
        );
    }
}

export default withRouter(Index);
