let boldBtn = document.getElementById('bold');
let copyBtn = document.getElementById('copy');
let underlineBtn = document.getElementById("underline");
let text = document.getElementById('textarea');
let addBtn = document.getElementById("add");
let title = document.getElementById("title");

//! Variables and Array
let notes = [];
let notesToAdd = {};
let textAreaInput = "";
let titleInput = "";

//! Input Handler
text.addEventListener("change", (e) => {
	textAreaInput = e.target.value.trim();
});

title.addEventListener("change", (e) => {
	titleInput = e.target.value.trim();
});



function display() {
	let notesToBeDisplay = "";
	notes.forEach((element, index) => {
		notesToBeDisplay += `
    <div class="noteCard my-3 mx-3 card" id=${index} onclick="switchCase(this.id)" >
		<div class="card-body">
    <h5 class='card-title' >${element.title}</h5>
    <p class='card-text'>${truncate(element.summary, 50)}</p>
		<button class="btn btn-primary">Delete Note</button>
		</div>
    </div>`;
	});

	if (notes.length !== 0) {
		document.getElementById("notes").innerHTML = notesToBeDisplay;
	}
}



//! Save Button handler
function saveNote() {
	if (textAreaInput.length > 0 && titleInput.length > 0) {
		notesToAdd = {
			title: titleInput,
			summary: textAreaInput,
		};
		notes.push(notesToAdd);
		text.value = "";
		title.value = "";
		display();
	} else if (titleInput.length === 0) {
		alert("❌ Title is Empty ❌");
	} else {
		alert("❌ Textarea is Empty ❌");
	}
}
addBtn.addEventListener("click", saveNote);

console.log(notesToAdd)



// let textArea = document.getElementById("textarea");

copyBtn.onclick = function () {
	textarea.select();
	document.execCommand('copy');

}

boldBtn.onclick = function () {
	textarea.style.fontWeight = "900";

}


//! Notes Added Displayed
function truncate(str, n) {
	return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
}




//! UnderLine
function underLineFunc() {
	textarea.style.textDecoration = "underline";
}

underlineBtn.addEventListener("click", underLineFunc);




