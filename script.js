var capitalchkbox = document.getElementById("capital")
var numberschkbox = document.getElementById("lowercase")
var specialchkbox = document.getElementById("numbers")
var lowerchkbox = document.getElementById("specialcharacters")

let checkboxes = [capitalchkbox, numberschkbox, specialchkbox, lowerchkbox];

const display = document.querySelector("input"),
button = document.querySelector("button"),
copyBtn = document.querySelector("span.far"),
copyActive = document.querySelector("span.fas");
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
button.onclick = ()=>{
    checkboxstates()
    let i,
    randomPassword = "";
    copyBtn.style.display = "block";
    copyActive.style.display = "none";
    for (i = 0; i < 16; i++) {
        randomPassword = randomPassword + chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    display.value = randomPassword;
}
function copy(){
    copyBtn.style.display = "none";
    copyActive.style.display = "block";
    display.select();
    document.execCommand("copy");
}

function checkboxstates(){
    ()

}