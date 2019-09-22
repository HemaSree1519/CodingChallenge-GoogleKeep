import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./containers/home/index";

ReactDOM.render(
    <Router>
        <Home/>
    </Router>,
    document.getElementById("root")
);