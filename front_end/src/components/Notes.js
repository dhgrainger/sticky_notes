import React from 'react';
import './Notes.css';

const Note = ({ note }) => (
  <div className='Notes' key={note.id}>
    <h4 className='Notes_content'>{note.note_category}</h4>
    <p className='Notes_content'>{note.note_description}</p>
  </div>
);

export default Note;
