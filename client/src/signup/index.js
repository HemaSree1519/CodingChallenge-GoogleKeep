import React, {Component} from "react";
import {Button, Col, Form, FormGroup, Input} from "reactstrap";
import {areMatchingPasswords} from "./service";

let userEmail = '';
let userPassword = '';
let userReEnteredPassword = '';
export default class Index extends Component {

    handleSignUp =  () => {
        // event.preventDefault();
        if (areMatchingPasswords(userPassword, userReEnteredPassword)) {
            console.log("Successfully registered")
        }
        else {
            console.log("Failed to signup")
        }
    };
    onEmail = (email) => {
        userEmail = email.target.value;
    };

    onPassword = (password) => {
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
