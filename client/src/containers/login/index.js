import React, {Component} from "react";
import {Button, Col, Form, FormGroup, Input} from "reactstrap";

let userEmail = '';
let userPassword = '';
export default class Index extends Component {

    handleLogin = ()=> {
        this.props.history.push('/notes');
    };
    onEmail = (email) => {
        userEmail = email.target.value;
    };

    onPassword = (password) => {
        userPassword = password.target.value;
    };
    render() {
        return (
            <Form>
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
