import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton'
import { List, ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete';

const styles = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}

export default class Notes extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            currentNote: ""
        };
    }

    onInputChange = (e) => {
        this.setState({ currentNote: e.target.value });
    }

    onClick = e => {
        e.preventDefault();
        if (this.state.currentNote) {
            let newNote = this.state.notes.slice();
            newNote.push(this.state.currentNote);
            this.setState({ notes: newNote, currentNote: '' });
        }
    }
    deleteNote = i => {
        let removeNote = this.state.notes.slice();
        removeNote.splice(i, 1);
        this.setState({ notes: removeNote })
    }
    render() {
        let pinNote = this.state.notes.map((e, i) => {
            return (
                <ListItem key={i} rightIconButton={<div style={{ display: 'flex' }}>
                    <IconButton onClick={() => this.deleteNote(i)} >
                        <DeleteIcon />
                    </IconButton>
                </div>}>{e}
                </ListItem>
            );
        });
        return (
            <Paper style={{ width: "25%" }}>
                <Paper style={{ paddingBottom: '20px' }}>
                    <List>
                        {this.state.notes.length === 0 ? <ListItem>Add a note!</ListItem> : pinNote}
                    </List>
                </Paper>
                <form>
                    <TextField
                        name="AddNote"
                        value={this.state.currentNote}
                        onChange={this.onInputChange}
                    />
                    <FlatButton
                        type="submit"
                        label="Add Note"
                        labelStyle={styles}
                        onClick={this.onClick} />
                </form>
            </Paper>
        )
    }
}