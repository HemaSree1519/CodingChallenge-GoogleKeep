import React, {Component} from "react";
import {Input, Modal, ModalHeader} from "reactstrap";

export default class EditNote extends Component {
    render() {
        return (
          <Modal>
              <ModalHeader>
                  <Input type="textarea"
                         name="title"
                         className="note-card-title-input"
                         value={this.props.childProps.editingNoteTitle}
                         onChange={this.props.childProps.onEditNoteTitle}
                  />
              </ModalHeader>
            </Modal>
        )
    }
};