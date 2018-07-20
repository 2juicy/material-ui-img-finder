import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  ListItemText
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";

export default class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      currentNote: ""
    };
  }

  onInputChange = e => {
    this.setState({ currentNote: e.target.value });
  };

  onClick = e => {
    e.preventDefault();
    if (this.state.currentNote) {
      let newNote = this.state.notes.slice();
      newNote.push(this.state.currentNote);
      this.setState({ notes: newNote, currentNote: "" });
    }
  };
  deleteNote = i => {
    let removeNote = this.state.notes.slice();
    removeNote.splice(i, 1);
    this.setState({ notes: removeNote });
  };
  render() {
    let pinNote = this.state.notes.map((e, i) => {
      return (
        <ListItem key={i}>
          <ListItemText>{e}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => this.deleteNote(i)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
    return (
      <Paper style={{ width: "25%", marginTop: "3em" }}>
        <Typography variant="title" style={{ textAlign: "center" }}>
          Pinned Notes
        </Typography>
        <Paper style={{ paddingBottom: "20px" }}>
          <List>
            {this.state.notes.length === 0 ? (
              <ListItem>Add a note!</ListItem>
            ) : (
              pinNote
            )}
          </List>
        </Paper>
        <form>
          <TextField
            name="AddNote"
            value={this.state.currentNote}
            onChange={this.onInputChange}
          />
          <Button color="primary" type="submit" onClick={this.onClick}>
            Add Note
          </Button>
        </form>
      </Paper>
    );
  }
}
