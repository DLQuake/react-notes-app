const ProjectDescription = () => {
    return (
        <section className="project-description box content">
            <h2 className="title is-4">Project Description</h2>
            <p>
                This project is a note-taking application built using React and Vite.
                It allows users to create, edit, and delete notes.
                The application also enables filtering and sorting of notes, and all data is
                stored in <strong>localStorage</strong>, meaning it doesn't disappear after refreshing the page.
            </p>
            <h3 className="title is-5">Usage Instructions</h3>
            <ol>
                <li>Enter the title and content of the note in the form.</li>
                <li>Click the <strong>&quot;Add Note&quot;</strong> button to save the note.</li>
                <li>Use the filtering and sorting options to organize your notes.</li>
                <li>Click the <strong>&quot;Edit&quot;</strong> button on an existing note to make changes.</li>
                <li>Click the <strong>&quot;Delete&quot;</strong> button to remove the note.</li>
            </ol>
            <h3 className="title is-5">Technologies</h3>
            <p>
                The project utilizes the following technologies:
            </p>
            <ul>
                <li><strong>React:</strong> A library for building user interfaces.</li>
                <li><strong>Vite:</strong> A tool for quickly building frontend applications.</li>
                <li><strong>localStorage:</strong> A mechanism for storing user data in the browser.</li>
                <li><strong>HTML5 & CSS3:</strong> Technologies used for creating the structure and styling of the application.</li>
            </ul>
        </section>
    );
};

export default ProjectDescription;
