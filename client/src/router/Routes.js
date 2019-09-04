import React from "react";
import {Route, Switch} from "react-router-dom";
import AppliedRoute from "./AppliedRoute";
import SignUp from '../containers/signup/index'
import NotesDashBoard from '../containers/notes/index'

export default ({childProps}) =>
    <Switch>
        <Route path="/notes" exact component={NotesDashBoard}/>
        <AppliedRoute path="/signup" exact component={SignUp} props={childProps}/>
    </Switch>;