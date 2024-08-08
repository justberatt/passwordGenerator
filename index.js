const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let inputField = document.querySelector(".input-field");

function generateRandomPassword() {
    const length = parseInt(document.querySelector("#passwordLength").value);
    let password = "";
    for (let i=0; i<length; i++) {
        let charArrIndex = Math.floor(Math.random() * characters.length)
        password += characters[charArrIndex];
    }
    return password;
}

function renderPasswords() {
    let passwordFieldOne = document.querySelector("#password-field__one");
    let passwordFieldTwo = document.querySelector("#password-field__two");
    passwordFieldOne.textContent = generateRandomPassword();
    passwordFieldTwo.textContent = generateRandomPassword();
}
let generatePasswordButton = document.querySelector("#generate-passwords");

generatePasswordButton.addEventListener('click', renderPasswords);