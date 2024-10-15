import React from 'react';

function NoteSort({ sortOption, onSortChange }) {
    return (
        <div className="">
            <div className="select">
                <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
                    <option value="title">Sort By Title</option>
                    <option value="date">Sort By Date Created</option>
                </select>
            </div>
        </div>
    );
}

export default NoteSort;
