import React, { useState } from "react";
import NoteList from "./components/NoteList/NoteList";
import NoteForm from "./components/NoteForm/NoteForm";
import "bulma/css/bulma.min.css";
import "./App.css";

function App() {
	const [notes, setNotes] = useState([]);

	const addNote = (title, text) => {
		const newNote = {
			id: notes.length + 1,
			title: title,
			text: text,
		};
		setNotes([newNote, ...notes]);
	};


	const deleteNote = (id) => {
		const updatedNotes = notes.filter((note) => note.id !== id);
		setNotes(updatedNotes);
	};

	return (
		<div className="container">
			<h1 class="title has-text-centered my-6 is-1">Note app</h1>
			<div className="columns">
				<div className="column is-one-third">
					<NoteForm addNote={addNote} />
				</div>
				<div className="column">
					<NoteList notes={notes} deleteNote={deleteNote} />
				</div>
			</div>
		</div>
	);
}

export default App;
