import React, {Component} from "react";
import {Button, Col, Form, FormGroup, Input} from "reactstrap";

export default class Index extends Component {


    render() {
        return (
            <Form>
                <Col>
                    <FormGroup>
                        <Input type="email" name="email" placeholder="example@gmail.com" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Input type="password" name="password" placeholder="Password"/>
                    </FormGroup>
                </Col>
                <Button>Login</Button>
            </Form>
        );
    }
}
