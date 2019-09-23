import React, {Component} from "react";
import "./styles.css"
import {CardColumns, Input} from "reactstrap";
import WriteNote from "../../components/writeNote/WriteNote";
import Note from "../../components/note/Note";
import EditNote from "../../components/editNote/EditNote";
import {formNoteDetails, formUpdatedNoteDetails, hadEdited} from "./service";
import {createNote, deleteNote, getAllNotesOfUser, updateNote} from "../../restService/noteAPIs";
import {getUser} from "../../session/UserSession";
import {ErrorMessages} from "../../utilities/errorMessages";

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
            writingNoteContent: '',
            isError: false,
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.getNotes().catch((e)=>{
            this.setErrorState(true, ErrorMessages[103])
        })
    }

    getNotes = async () => {
        const email = getUser();
        try{
            await getAllNotesOfUser(email).then((listOfNotes) => {
            this.setState({notes: listOfNotes})
        });
        }catch (e) {
            throw e;
        }
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
    onDelete = async () => {
        try {
            await deleteNote(this.state.editingNote["email"], this.state.editingNote["id"]).then((reponse) => {
                if (reponse === 200) {
                    this.getNotes().catch((e) => {
                        this.setErrorState(true, ErrorMessages[103])
                    })
                }
            });
        } catch (e) {
            this.setErrorState(true, ErrorMessages[103])
        }
        this.setEditState('')
    };
    onCloseNewNote = async () => {
        if (this.state.writingNoteTitle !== '' || this.state.writingNoteContent !== '') {
            const note = formNoteDetails(this.state.writingNoteTitle, this.state.writingNoteContent);
            try {
                await createNote(note).then((response) => {
                    if (response === 200) {
                        this.getNotes().catch((e) => {
                            this.setErrorState(true, ErrorMessages[103])
                        })
                    }
                })
            } catch (e) {
                this.setErrorState(true, ErrorMessages[103])
            }
        }
        this.onWriteToggle();
    };
    onUpdateNote = async () => {
        if (hadEdited(this.state.editingNote, this.state.editingNoteTitle, this.state.editingNoteContent)) {
            const updatedNote = formUpdatedNoteDetails(this.state.editingNote, this.state.editingNoteTitle, this.state.editingNoteContent);
            try {
                await updateNote(this.state.editingNote["id"], updatedNote).then((repsonse) => {
                    if (repsonse === 200) {
                        this.getNotes().catch((e) => {
                            this.setErrorState(true, ErrorMessages[103])
                        })
                    }
                });
            } catch (e) {
                this.setErrorState(true, ErrorMessages[103])
            }
        }
        this.setEditState('')
    };
    setErrorState = (flag, message) => {
        this.setState({
            isError: flag,
            errorMessage: message
        });
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
                {this.state.isError && <p className="error">{this.state.errorMessage}</p>}
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