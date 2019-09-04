import React, {Component} from "react";
import "./styles.css"
import {CardColumns, Input} from "reactstrap";
import WriteNote from "./components/WriteNote";
import Note from "./components/Note";
import EditNote from "./components/EditNote";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            message: "Get your note saved with Google Keep",
            isEditingNote:false,
            editingNote: '',
            editingNoteTitle: '',
            editingNoteContent: '',
            isWritingNote: false,
            writingNoteTitle: '',
            writingNoteContent: ''
        }
    }
    setEditState = (note) => {
        console.log(note);
        console.log("setEditNote");
        this.setState(prevState => ({
            isEditingNote: !prevState.isEditingNote,
            editingNote: note !== '' ? note : [],
            editingNoteContent: note !== '' ? note["content"] : '',
            editingNoteTitle: note !== '' ? note['title'] : ''
        }));
        console.log(this.state.isEditingNote)
    };
    onEditNoteContent = (editedContent) => {
        this.setState({editingNoteContent: editedContent.target.value})
    };

    onEditNoteTitle = (editedTitle) => {
        this.setState({editingNoteTitle: editedTitle.target.value})
    };
    onWriteToggle = () => {
        this.setState({isWritingNote: !this.state.isWritingNote, writingNoteTitle: '', writingNoteContent: ''})
    };
    onWriteNoteTitle = (writingNoteTitle) => {
        this.setState({writingNoteTitle: writingNoteTitle.target.value})
    };
    onWriteNoteContent = (writeNoteContent) => {
        this.setState({writingNoteContent: writeNoteContent.target.value})
    };
    onDelete = () => {
        this.setEditState('')
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
            isEditingNote: this.state.isEditingNote,
            editingNote: this.state.editingNote,
            editingNoteTitle: this.state.editingNoteTitle,
            editingNoteContent: this.state.editingNoteContent,
            setEditState: this.setEditState,
            onDelete: this.onDelete,
            onUpdateNote: this.onUpdateNote,
            onEditNoteContent: this.onEditNoteContent,
            onEditNoteTitle: this.onEditNoteTitle,
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
                    {!this.state.notes.length > 0 ? <i>{this.state.message}</i> : <CardColumns>
                        {this.state.notes.map((note) => {
                            return (<Note note={note} setEditState={this.setEditState}/>)
                        })}</CardColumns>}
                    {this.state.isEditingNote && <EditNote childProps={props}/>}
                </div>
            </div>
        )
    }
};