import React from "react";

const Note = ({ note }) => (
  <div key={note.id}>
    <h4>{note.note_category}</h4>
    <p>{note.note_description}</p>
  </div>
);

export default Note;