import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import "./NoteForm.css"

function NoteForm(props) {
    const [title, setTitle] = useState(""); // nowe pole tytuł notatki
    const [text, setText] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addNote(title, text);
        setTitle("");
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="card p-4">
            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <input className="input" type="text" placeholder="Enter you title note here" value={title} onChange={handleTitleChange} />
                </div>
            </div>
            <div className="field">
                <label className="label">New Note</label>
                <div className="control">
                    <textarea
                        className="textarea"
                        placeholder="Enter your note here"
                        value={text}
                        onChange={handleChange}
                        rows="10"
                    ></textarea>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-primary" type="submit">
                        Add Note
                    </button>
                </div>
            </div>
        </form>
    );
}

export default NoteForm;
