import {Input} from "reactstrap";
import React, {Component} from "react";

export default class Index extends Component {
    render() {
        return (
            <div className="dash-board">
                <div className="write-note">
                    <Input className="note-input" type="text" placeholder="Write a note..."/>
                </div>
            </div>
        )
    }
};