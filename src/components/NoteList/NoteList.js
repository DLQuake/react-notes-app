import React from "react";
import Note from "../Note/Note";

const NoteList = ({ notes, deleteNote }) => {
    return (
        <div className="note-list px-4">
            {notes.map((note) => (
                <Note key={note.id} id={note.id} title={note.title} text={note.text} deleteNote={deleteNote} />
            ))}
        </div>
    );
};

export default NoteList;
