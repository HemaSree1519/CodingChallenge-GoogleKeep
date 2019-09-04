import React, {Component} from "react";
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export default class EditNote extends Component {
    render() {
        return (
            <Modal >
                <ModalHeader>
                    <Input type="textarea"
                           name="title"
                           className="note-card-title-input"
                           value={""}
                           onChange={""}
                    />
                </ModalHeader>
                <ModalBody>
                    <Input type="textarea"
                           name="content"
                           className="note-card-content-input"
                           value={""}
                           onChange={""}
                           rows={5}/>
                    <br/>
                    <div className="footer-container">
                        <Label className="footer-edited-time">
                            Edited </Label>
                    </div>
                </ModalBody>
                <ModalFooter className="modal-footer">
                    <Button name="delete" className="footer-button">Delete</Button>{'  '}
                    <Button name="close" className="footer-button">Close</Button>
                </ModalFooter>
            </Modal>
        )
    }
};