import React, { Component } from 'react';
import axios from "axios";
import Note from "./Notes";
import NewStickyForm from './NewStickyForm';

export default class NotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.addNewSticky = this.addNewSticky.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/sticky_notes")
      .then((response) => {
        console.log(response);
        this.setState({
          notes: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  addNewSticky(note_category, note_description) {
    axios
      .post("http://localhost:3000/sticky_notes", { sticky_note: { note_category, note_description } })
      .then((response) => {
        console.log(response);
        const notes = [...this.state.notes, response.data];
        this.setState({ notes });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.notes.map((note) => {
          return <Note note={note} key={note.id} />;
        })}
        <NewStickyForm onNewSticky={this.addNewSticky} />
      </div>
    );
  }
}
