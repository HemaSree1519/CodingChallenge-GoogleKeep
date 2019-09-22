import React, {Component} from 'react';
import './styles.css'
import {withRouter} from "react-router-dom";
import Header from "../../components/header/Header";
import Routes from "../../router/Routes";
import {resetUser} from "../../session/UserSession";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        };
    }

    userHasAuthenticated = (authenticated) => {
        this.setState({isAuthenticated: authenticated});
    };
    handleLogout = () => {
        try {
            this.setState({isAuthenticated: !this.state.isAuthenticated});
            resetUser();
            this.props.history.push("/");
        } catch (e) {
            alert(e.message);
        }
    };

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };
        return (
            <div className="App container">
                <Header  handleLogout={this.handleLogout} isAuthenticated={this.state.isAuthenticated}/>
                <Routes childProps={childProps}/>
            </div>
        );
    }
}

export default withRouter(Index);
