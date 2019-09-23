import React, {Component} from "react";
import "../../components/login/styles.css";
import {isAuthenticated} from "./service";
import {ErrorMessages} from "../../utilities/errorMessages";
import {setUser} from "../../session/UserSession";
import Login from "../../components/login/Login";

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

    handleLogin = async event => {
        event.preventDefault();
        try {
            await isAuthenticated(userEmail, userPassword).then((responce) => {
                if (responce === true) {
                    this.props.userHasAuthenticated(true);
                    setUser(userEmail);
                    userEmail = '';
                    userPassword = '';
                    this.props.history.push('/notes');
                }
                else {
                    this.setErrorState(true, responce)
                }
            });
        } catch (e) {
            this.setErrorState(true, ErrorMessages[103])
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

    render() {
        const props = {
            errorMessage: this.state.errorMessage,
            isError: this.state.isError,
            onEmail: this.onEmail,
            onPassword: this.onPassword,
            handleLogin: this.handleLogin
        };
        return (
            <Login childProps={props}/>
        );
    }
}
