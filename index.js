const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let randomPassword1 = document.getElementById("randompassword1")
let randomPassword2 = document.getElementById("randompassword2")
let passwordLength = 12
let password = ""

function randomGen() {
    randomPassword1.textContent = ""
    randomPassword2.textContent = ""
    for (i = 0; i <= passwordLength; i++) {
        let randomPassOne = Math.floor(Math.random() * characters.length)
        let randomPassTwo = Math.floor(Math.random() * characters.length)
        randomPassword1.textContent += characters[randomPassOne]
        randomPassword2.textContent += characters[randomPassTwo]
    }
}

function copyPassword(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    alert("Copied the password");
}

// function copyPassword2() {
//     var r = document.createRange();
//     r.selectNode(document.getElementById("randompassword2"));
//     window.getSelection().removeAllRanges();
//     window.getSelection().addRange(r);
//     document.execCommand("copy");
//     alert("Copied the password");
// }