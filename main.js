let boldBtn= document.getElementById('bold');
let copyBtn = document.getElementById('copy');
let underlineBtn = document.getElementById("underline");
let text=document.getElementById('textarea');
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

copyBtn.onclick = function(){
	textarea.select();
    document.execCommand('copy');
    
}

 boldBtn.onclick = function() {
 	textarea.style.fontWeight ="900";
 	
 }


//! Notes Added Displayed
function truncate(str, n) {
	return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
}

function display() {
	let notesToBeDisplay = "";
	notes.forEach((element, index) => {
		notesToBeDisplay += `
    <div class="card" id=${index} onclick="switchCase(this.id)" >
    <span>${element.title}</span>
    <p>${truncate(element.summary, 50)}</p>
    </div>`;
	});

	if (notes.length !== 0) {
		document.getElementById("display-notes").innerHTML = notesToBeDisplay;
	}
}


//! UnderLine
function underLineFunc() {
	textarea.style.textDecoration = "underline";
	
	// let selectedText = window.getSelection().toString();
	// // console.log(selectedText);
	// if (selectedText === "") {
	// 	alert("❌ Text Not Selected ❌");
	// } else if (selectedText.includes("<u>")) {
	// 	let newText = selectedText.replace("<u>", "");
	// 	newText = newText.replace("</u>", "");
	// 	textAreaInput = textAreaInput.replace(selectedText, newText);
	// 	// textAreaInput = newText;
	// } else {
	// 	let newText = `<u>${selectedText}</u>`;
	// 	textAreaInput = textAreaInput.replace(selectedText, newText);
	// 	// textAreaInput = newText;
	// }
}

underlineBtn.addEventListener("click", underLineFunc);




