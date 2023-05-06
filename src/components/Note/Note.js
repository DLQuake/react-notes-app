import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Note.css"

const Note = ({ id, title, text, deleteNote }) => {
    return (
        <div className="card mb-4">
            <div className="card-content">
                <div className="columns is-vcentered">
                    <div className="column is-11">
                        <h1 className="title">{title}</h1>
                        <TextareaAutosize
                            className="textarea no-resize"
                            value={text}
                            onChange={() => { }}
                            readOnly
                        />
                    </div>
                    <div className="column">
                        <button className="button is-danger" onClick={() => deleteNote(id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Note;
