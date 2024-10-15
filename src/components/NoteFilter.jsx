import React from 'react';
import NoteSearch from './NoteSearch';
import NoteSort from './NoteSort';

function NoteFilter({ searchTerm, onSearchChange, sortOption, onSortChange }) {
    return (
        <div className="box">
            <h2 className="subtitle">Filter Notes</h2>
            <div className="columns">
                <div className="column is-two-thirds">
                    <NoteSearch searchTerm={searchTerm} onSearchChange={onSearchChange} />

                </div>
                <div className="column">
                    <NoteSort sortOption={sortOption} onSortChange={onSortChange} />

                </div>
            </div>
        </div>
    );
}

export default NoteFilter;
