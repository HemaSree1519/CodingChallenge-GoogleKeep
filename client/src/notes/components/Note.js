import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import React, {Component} from "react";

export default class Note extends Component {
    render() {
        return (
            <Card name="card" className="note" >
                <CardBody>
                    <CardTitle name="title" className="card-title">{"Title"}</CardTitle>
                    <CardText name="content">{"Content"}</CardText>
                </CardBody>
            </Card>
        )
    }
};