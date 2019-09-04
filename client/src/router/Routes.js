import React from "react";
import {Route, Switch} from "react-router-dom";
import AppliedRoute from "./AppliedRoute";
import SignUp from '../containers/signup/index'
import Home from '../containers/home/index'
import Login from '../containers/login/index'
import NotesBoard from '../containers/notes/index'

export default ({childProps}) =>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/notes" exact component={NotesBoard}/>
        <AppliedRoute path="/signup" exact component={SignUp} props={childProps}/>
        <AppliedRoute path="/login" exact component={Login} props={childProps}/>
    </Switch>;