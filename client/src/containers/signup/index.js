import React, {Component} from "react";
import './styles.css'
import {Button, Col, Form, FormGroup, Input} from "reactstrap";
import {areMatchingPasswords, formUserDetails} from "./service";
import {setUser} from "../../session/UserSession";
import {createUser} from "../../restService/userAPIs";

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

    handleSignUp = async () => {
        try {
            if (areMatchingPasswords(userPassword, userReEnteredPassword)) {
                await createUser(formUserDetails(userEmail, userPassword)).then((response) => {
                    if (response === 200) {
                        this.props.userHasAuthenticated(true);
                        setUser(userEmail);
                        userEmail = '';
                        userPassword = '';
                        this.props.history.push('/notes');
                    }
                });
            }
        } catch (e) {
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
