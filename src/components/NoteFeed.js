import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const NoteWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

import Note from './Note';

const NoteFeed = ({ notes }) => {
  return (
    <div className="note-feed">
      {notes.map(note => (
        <NoteWrapper key={note.id}>
          <Note note={note} />
          <Link to={`note/${note.id}`}>Permalink</Link> <br/>
        </NoteWrapper>
      ))}
    </div>
  );
};

export default NoteFeed;
