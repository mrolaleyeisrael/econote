let boldBtn = document.getElementById('bold');
let copyBtn = document.getElementById('copy');
const titleInput = document.querySelector('#title');
let text = document.getElementById('textarea');
const form = document.querySelector('form');
const noteContainer = document.getElementById('notes');


// let boldSelBtn = document.getElementById('boldSel');
// let copySelBtn = document.getElementById('copySel');


// Class: for creating a  new  note
class Note {
	constructor(title, body) {
		this.title = title;
		this.body = body;
		this.id = Math.random();
	}
}


/// /LOCAL STORAGE////
// Function: Retrieve notes from local storage
function getNotes() {
	let notes;
	if (localStorage.getItem('noteApp.notes') === null) {
		notes = [];
	} else {
		notes = JSON.parse(localStorage.getItem('noteApp.notes'));
	}
	return notes;
}


// Function: Add a note to local storage
function addNotesToLocalStorage(note) {
	const notes = getNotes();
	notes.push(note);
	localStorage.setItem('noteApp.notes', JSON.stringify(notes));
}


// Function: remove a note  from local storage
function removeNote(id) {
	const notes = getNotes();
	notes.forEach((note, index) => {
		if (note.id === id) {
			notes.splice(index, 1);
		}
		localStorage.setItem('noteApp.notes', JSON.stringify(notes));
	})
}


// Function: Create new note in UI
function addNoteToList(note) {
	const newUINote = document.createElement('div');
	newUINote.classList.add('note', 'noteCard', 'my-3', 'mx-3', 'card');
	newUINote.innerHTML = `
    // <span hidden>${note.id}</span>
    // <h2 class="note__title">${note.title}</h2>
    // <p class="note__body">${note.body}</p>
    // <div class="note__btns">
    //   <button class="note__btn note__view">View Detail</button>
    //   <button class="note__btn note__delete">Delete Note</button>
    // </div>

			// <div class="noteCard my-3 mx-3 card" style="width: 18rem">
    <span hidden>${note.id}</span>
					
			<div class="card-body">
						<h5 class="card-title">${note.body}</h5>
						<p class="card-text">
							${note.body}
						</p>
						<button class="btn btn-primary">Delete Note</button>
					</div>
				// </div>
  `;
	noteContainer.appendChild(newUINote);
}



// boldSelBtn.onclick = function () {
// 	var text = '';
// 	if (window.getSelection) {
// 		text = document.getSelection().toString();
// 		text.style.fontWeight = "900";
// 	} else if (window.document.getSelection) {
// 		text = window.document.getSelection();
// 	}
// 	else {
// 		if (document.selection) {
// 			var text2 = document.selection.createRange()
// 			// text2.style.fontWeight = "900";
// 			text = window.document.selection.createRange().text;

// 		}
// 	}

// 	return text;
// }

// copySelBtn.onclick = function () {

// }

copyBtn.onclick = function () {

	textarea.select();
	document.execCommand('copy');

}

boldBtn.onclick = function (e) {
	// e.preventDefault();
	textarea.style.fontWeight = "900";
}

// Event: Note Form Submit
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const noteInput = document.querySelector('#textarea');

	// validate inputs
	if (titleInput.value.length > 0 && noteInput.value.length > 0) {
		const newNote = new Note(titleInput.value, noteInput.value);
		addNoteToList(newNote);
		addNotesToLocalStorage(newNote);
		titleInput.value = '';
		noteInput.value = '';
		showAlertMessage('Note successfully added', 'success-message');
		titleInput.focus();
	} else {
		showAlertMessage('Please add both a title and a note', 'alert-message');
	}
});