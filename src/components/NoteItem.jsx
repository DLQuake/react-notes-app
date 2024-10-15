function NoteItem({ note, onDeleteNote, onEditNote }) {
    return (
        <li className="notification">
            <div className="title is-4">{note.title}</div>
            <div
                className="box"
                dangerouslySetInnerHTML={{
                    __html: note.content.replace(/\n/g, '<br/>')
                }}
            />
            <div className="buttons">
                <button className="button is-info" onClick={() => onEditNote(note)}>Edytuj</button>
                <button className="button is-danger" onClick={() => onDeleteNote(note.id)}>Usuń</button>
            </div>
        </li>
    );
}

export default NoteItem;
