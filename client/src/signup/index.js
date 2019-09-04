import React, {Component} from "react";
import {Button, Col, Form, FormGroup, Input} from "reactstrap";

let userEmail = '';
let userPassword = '';
let userReEnteredPassword = '';
export default class Index extends Component {

    render() {
        return (
            <Form>
                <Col>
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="example@gmail.com"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Input type="password" name="password" placeholder="Password"/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Input type="password" name="rePassword" placeholder="Re-Enter Password"
                        />
                    </FormGroup>
                </Col>
                <Button>SignUp</Button>
            </Form>
        );
    }
}
