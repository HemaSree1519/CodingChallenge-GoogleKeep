import React, {Component} from "react";
import './styles.css'
import {Button, Col, Form, FormGroup, Input} from "reactstrap";
import {areMatchingPasswords} from "./service";
import {setUser} from "../../session/UserSession";

let userEmail = '';
let userPassword = '';
let userReEnteredPassword = '';
export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            errorMessage: ''
        }
    }

    handleSignUp = () => {
        if (areMatchingPasswords(userPassword, userReEnteredPassword)) {
            this.props.userHasAuthenticated(true);
            setUser(userEmail);
            userEmail = '';
            userPassword = '';
            this.props.history.push('/notes');
        }
        else {
            console.log("Failed to signup")
        }
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

    onReEnteredPassword = (rePassword) => {
        userReEnteredPassword = rePassword.target.value;
    };

    render() {
        return (
            <Form>
                <Col>
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="example@gmail.com"
                               onChange={this.onEmail}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Input type="password" name="password" placeholder="Password" onChange={this.onPassword}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Input type="password" name="rePassword" placeholder="Re-Enter Password"
                               onChange={this.onReEnteredPassword}/>
                    </FormGroup>
                </Col>
                <Button onClick={this.handleSignUp}>SignUp</Button>
            </Form>
        );
    }
}
