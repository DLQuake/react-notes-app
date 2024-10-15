import { useState, useEffect } from 'react';

function NoteInput({ onAddNote, onUpdateNote, editNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (editNote) {
            setTitle(editNote.title);
            setContent(editNote.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [editNote]);

    const handleSubmit = () => {
        const noteTitle = title.trim() ? title : 'Untitled';

        if (content.trim()) {
            if (editNote) {
                onUpdateNote({ ...editNote, title: noteTitle, content });
            } else {
                onAddNote({ title: noteTitle, content });
            }
            setTitle('');
            setContent('');
        }
    };

    return (
        <div className="box">
            <h2 className="subtitle">Add / Edit a note</h2>
            <input
                className="input mb-3"
                type="text"
                placeholder="Title of the note (optional)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="textarea mb-3"
                placeholder="Content of the note"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button className="button is-primary" onClick={handleSubmit}>
                {editNote ? 'Save Changes' : 'Add note'}
            </button>
        </div>
    );
}

export default NoteInput;
