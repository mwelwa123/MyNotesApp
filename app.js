const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNote');
const notesContainer = document.getElementById('notes');

// Function to add a note
addNoteButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();

    if (noteText === '') {
        alert('Please write a note before adding.');
        return;
    }

    // Create a new note element
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.textContent = noteText;

    // Add the note to the notes container
    notesContainer.appendChild(noteElement);

    // Clear the textarea
    noteInput.value = '';
});