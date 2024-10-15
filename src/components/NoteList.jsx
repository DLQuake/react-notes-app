import NoteItem from './NoteItem';

function NoteList({ notes, onDeleteNote, onEditNote }) {
    return (
        <div className="box">
            <h2 className="subtitle">List of Notes</h2>
            <ul>
                {notes.map((note) => (
                    <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} onEditNote={onEditNote} />
                ))}
            </ul>
        </div>
    );
}

export default NoteList;
