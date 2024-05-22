import React, { Component } from 'react';
import axios from "axios";
import Note from "./Notes";

export default class NotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    axios
      .get("api/v1/sticky_notes.json")
      .then((response) => {
        console.log(response);
        this.setState({
          notes: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.notes.map((note) => {
          return <Note note={note} key={note.id} />;
        })}
      </div>
    );
  }
}