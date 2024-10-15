import React from 'react';

function NoteSearch({ searchTerm, onSearchChange }) {
    return (
        <div>
            <input
                className="input"
                type="text"
                placeholder="Search for notes by title"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default NoteSearch;
