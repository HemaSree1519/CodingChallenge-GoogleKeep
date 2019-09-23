import React, {Component} from "react";
import "../../components/signup/styles.css";
import {validatePasswords, formUserDetails} from "./service";
import {createUser} from "../../restService/userAPIs";
import {setUser} from "../../session/UserSession";
import {ErrorMessages} from "../../utilities/errorMessages";
import SignUp from "../../components/signup/SignUp";

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
            if (validatePasswords(userPassword, userReEnteredPassword)) {
                await createUser(formUserDetails(userEmail, userPassword)).then((response) => {
                    switch (response) {
                        case 200 :
                            this.props.userHasAuthenticated(true);
                            setUser(userEmail);
                            userEmail = '';
                            userPassword = '';
                            this.props.history.push('/notes');
                            break;
                        case 500 :
                            this.setErrorState(true, ErrorMessages[102]);
                            break;
                        default :
                            this.setErrorState(true, ErrorMessages[105]);
                            break;
                    }
                });
            }
            else {
                this.setErrorState(true, ErrorMessages[104])
            }
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

    onReEnteredPassword = (rePassword) => {
        userReEnteredPassword = rePassword.target.value;
    };

    render() {
        const props = {
            errorMessage: this.state.errorMessage,
            isError: this.state.isError,
            onEmail: this.onEmail,
            onPassword: this.onPassword,
            onReEnteredPassword:this.onReEnteredPassword,
            handleSignUp: this.handleSignUp
        };
        return (
            <SignUp childProps={props}/>
        );
    }
}
