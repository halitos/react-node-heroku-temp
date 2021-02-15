import React from "react";

function ListItem({ notes }) {
  return notes ? (
    notes.map((note) => (
      <div key={note.id}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
      </div>
    ))
  ) : (
    <div>meh</div>
  );
}

export default ListItem;
