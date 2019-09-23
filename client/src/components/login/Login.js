import React, {Component} from "react";
import "./styles.css";
import {Button, Col, Form, FormGroup, Input} from "reactstrap";

export default class Login extends Component {
    render() {
        return (
            <Form>
                {this.props.childProps.isError && <p className="error">{this.props.childProps.errorMessage}</p>}
                <Col>
                    <FormGroup>
                        <Input type="email" name="email" placeholder="example@gmail.com"
                               onChange={this.props.childProps.onEmail}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Input type="password" name="password" placeholder="Password"
                               onChange={this.props.childProps.onPassword}/>
                    </FormGroup>
                </Col>
                <Button onClick={this.props.childProps.handleLogin}>Login</Button>
            </Form>
        );
    }
}
