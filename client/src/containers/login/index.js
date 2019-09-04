import React, {Component} from "react";
import "./styles.css";
import {Button, Col, Form, FormGroup, Input} from "reactstrap";
import {setUser} from "../../session/UserSession";

let userEmail = '';
let userPassword = '';
export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            errorMessage: ''
        }
    }

    handleLogin = () => {
        this.props.userHasAuthenticated(true);
        setUser(userEmail);
        userEmail = '';
        userPassword = '';
        this.props.history.push('/notes');

    };
    setErrorState = (flag, message) => {
        this.setState({
            isError: flag,
            errorMessage: message
        });
    };
    onEmail = (email) => {
        this.setErrorState(false, '');
        userEmail = email.target.value;
    };

    onPassword = (password) => {
        this.setErrorState(false, '');
        userPassword = password.target.value;
    };

    render() {
        return (
            <Form>
                {this.state.isError && <p className="error">{this.state.errorMessage}</p>}
                <Col>
                    <FormGroup>
                        <Input type="email" name="email" placeholder="example@gmail.com" onChange={this.onEmail}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Input type="password" name="password" placeholder="Password" onChange={this.onPassword}/>
                    </FormGroup>
                </Col>
                <Button onClick={this.handleLogin}>Login</Button>
            </Form>
        );
    }
}
