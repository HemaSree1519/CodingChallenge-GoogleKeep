import {Input} from "reactstrap";
import React, {Component} from "react";
import "./styles.css"
import WriteNote from "./components/WriteNote";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            message: "Get your note saved with Google Keep",
            isWritingNote: false,
            writingNoteTitle: '',
            writingNoteContent: ''
        }
    }

    onWriteToggle = () => {
        this.setState({isWritingNote: !this.state.isWritingNote, writingNoteTitle: '', writingNoteContent: ''})
    };
    onWriteNoteTitle = (writingNoteTitle) => {
        this.setState({writingNoteTitle: writingNoteTitle.target.value})
    };
    onWriteNoteContent = (writeNoteContent) => {
        this.setState({writingNoteContent: writeNoteContent.target.value})
    };
    onCloseNewNote = () => {
        if (this.state.writingNoteTitle !== '' || this.state.writingNoteContent !== '') {
            const note = {
                "email": 'test@mail.com',
                "title": this.state.writingNoteTitle,
                "content": this.state.writingNoteContent,
                "createdAt": new Date(),
                "updatedAt": new Date(),
            };
            let temp = this.state.notes;
            temp.push(note);
            this.setState({
                notes: temp
            });
        }
        this.onWriteToggle();
    };

    render() {
        const props = {
            writingNoteTitle: this.state.writingNoteTitle,
            writingNoteContent: this.state.writingNoteContent,
            onWriteNoteTitle: this.onWriteNoteTitle,
            onWriteNoteContent: this.onWriteNoteContent,
            onWriteToggle: this.onWriteToggle,
            onCloseNewNote: this.onCloseNewNote
        };
        return (
            <div className="dash-board">
                <div className="write-note">
                    {!this.state.isWritingNote ?
                        <Input className="note-input" type="text" placeholder="Write a note..." onClick={() => {
                            this.onWriteToggle();
                        }}/> : <WriteNote childProps={props}/>}
                </div>
                <div>

                </div>
            </div>
        )
    }
};