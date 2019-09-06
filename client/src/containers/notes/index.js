import React, {Component} from "react";
import "./styles.css"
import {CardColumns, Input} from "reactstrap";
import WriteNote from "./components/WriteNote";
import Note from "./components/Note";
import EditNote from "./components/EditNote";
import {formNoteDetails, formUpdatedNoteDetails, hadEdited} from "./service";
import {createNote, deleteNote, getAllNotesOfUser, updateNote} from "../../restService/noteAPIs";
import {getUser} from "../../session/UserSession";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            message: "Get your note saved with Google Keep",
            isEditingNote: false,
            editingNote: '',
            editingNoteTitle: '',
            editingNoteContent: '',
            isWritingNote: false,
            writingNoteTitle: '',
            writingNoteContent: ''
        }
    }

    componentDidMount() {
        this.getNotes().then()
    }

    getNotes = async () => {
        const email = getUser();
        await getAllNotesOfUser(email).then((listOfNotes) => {
            this.setState({notes: listOfNotes})
        });
    };

    setEditState = (note) => {
        this.setState(prevState => ({
            isEditingNote: !prevState.isEditingNote,
            editingNote: note !== '' ? note : [],
            editingNoteContent: note !== '' ? note["content"] : '',
            editingNoteTitle: note !== '' ? note['title'] : ''
        }));
    };
    onEditNoteContent = (editedContent) => {
        this.setState({editingNoteContent: editedContent.target.value})
    };

    onEditNoteTitle = (editedTitle) => {
        this.setState({editingNoteTitle: editedTitle.target.value})
    };
    onWriteToggle = () => {
        if (getUser()) {
            this.setState({isWritingNote: !this.state.isWritingNote, writingNoteTitle: '', writingNoteContent: ''})
        }
        else this.setState({message: "Please login to add note"})
    };
    onWriteNoteTitle = (writingNoteTitle) => {
        this.setState({writingNoteTitle: writingNoteTitle.target.value})
    };
    onWriteNoteContent = (writeNoteContent) => {
        this.setState({writingNoteContent: writeNoteContent.target.value})
    };
    onDelete = () => {
        deleteNote(this.state.editingNote["email"], this.state.editingNote["id"]).then((reponse) => {
            if (reponse === 200) {
                this.getNotes().then()
            }
        });
        this.setEditState('')
    };
    onCloseNewNote = () => {
        if (this.state.writingNoteTitle !== '' || this.state.writingNoteContent !== '') {
            const note = formNoteDetails(this.state.writingNoteTitle, this.state.writingNoteContent);
            createNote(note).then((response) => {
                if (response === 200) {
                    this.getNotes().then();
                }
            })
        }
        this.onWriteToggle();
    };
    onUpdateNote = () => {
        if (hadEdited(this.state.editingNote, this.state.editingNoteTitle, this.state.editingNoteContent)) {
            const updatedNote = formUpdatedNoteDetails(this.state.editingNote, this.state.editingNoteTitle, this.state.editingNoteContent);
            updateNote(this.state.editingNote["id"], updatedNote).then((repsonse) => {
                if (repsonse === 200) {
                    this.getNotes().then()
                }
            });
        }
        this.setEditState('')
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