var capitalchkbox = document.getElementById("capital")
var numberschkbox = document.getElementById("lowercase")
var specialchkbox = document.getElementById("numbers")
var lowerchkbox = document.getElementById("specialcharacters")

let checkboxes = [capitalchkbox, numberschkbox, specialchkbox, lowerchkbox];

const display = document.querySelector("#password"),
button = document.querySelector("button"),
copyBtn = document.querySelector("span.far"),
copyActive = document.querySelector("span.fas");

let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!@#$%^&*()_+~|}{[]:;?><,./-=";
let lower = "abcdefghijklmnopqrstuvwxyz";

let charactersets = [capital, numbers, special, lower];

button.onclick = ()=>{
    const checkboxresults = checkboxstates(checkboxes)
    let chars = ""
    for (j = 0; j < 4; j++) {
        if (checkboxresults [j] === 1 ) {
            chars += charactersets[j]
        } 
    }
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

function checkboxstates(checkboxarray){
    //dom elements that are checked
    let checkedboxes = []; 
    //checks the checkbox value false or true
    for (let i = 0; i < checkboxarray.length; i++) {
        if (checkboxarray[i].checked === true) checkedboxes.push (1);
         else checkedboxes.push (0);
    }
    //returning the dom elements 
    return checkedboxes;
}