import { useState } from 'react';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import NoteFilter from './components/NoteFilter';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useLocalStorage } from './hooks/useLocalStorage';
import Loader from './components/Loader';
import ProjectDescription from './components/ProjectDescription';

function App() {
	const [notes, setNotes, isLoading] = useLocalStorage('notes', []);
	const [editNote, setEditNote] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortOption, setSortOption] = useState('title');

	const addNote = (note) => {
		const newNote = { id: Date.now(), ...note };
		setNotes([...notes, newNote]);
	};

	const deleteNote = (id) => {
		setNotes(notes.filter(note => note.id !== id));
	};

	const updateNote = (updatedNote) => {
		setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
		setEditNote(null);
	};

	const startEditing = (note) => {
		setEditNote(note);
	};

	const filteredNotes = notes.filter(note =>
		note.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const sortedNotes = filteredNotes.sort((a, b) => {
		if (sortOption === 'title') {
			return a.title.localeCompare(b.title);
		} else {
			return a.id - b.id;
		}
	});

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="hero">
			<div className="hero-body">
				<h1 className="title has-text-centered">Note App</h1>
				<ThemeSwitcher />
				<ProjectDescription />
				<div className="columns">
					<div className="column is-one-third">
						<NoteInput onAddNote={addNote} onUpdateNote={updateNote} editNote={editNote} />
					</div>
					<div className="column">
						<NoteFilter
							searchTerm={searchTerm}
							onSearchChange={setSearchTerm}
							sortOption={sortOption}
							onSortChange={setSortOption}
						/>
						<NoteList notes={sortedNotes} onDeleteNote={deleteNote} onEditNote={startEditing} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
