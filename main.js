let copyBtn = document.getElementById('copy');
let text=document.getElementById('textarea');

copyBtn.onclick = function(){
	textarea.select();
    document.execCommand('copy');
    
}

let boldBtn= document.getElementById('bold');
 boldBtn.onclick = function() {
 	
 	textarea.style.fontWeight ="900";
 	
 }
