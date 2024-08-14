const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generateRandomPassword() {
    const inputField = document.querySelector("#passwordLength");
    const alertText = document.querySelector(".alert-text");

    if (inputField.value<8 || inputField.value > 20) {
        alertText.classList.remove("hidden");
        alertText.classList.add("visible");
    } else {
        alertText.classList.add("hidden");
        alertText.classList.remove("visible");
        let password = "";
        for (let i=0; i<inputField.value; i++) {
            let charArrIndex = Math.floor(Math.random() * characters.length)
            password += characters[charArrIndex];
        }
        return password;
    }
}

function renderPasswords() {
    let passwordFieldOne = document.querySelector("#password-field__one");
    let passwordFieldTwo = document.querySelector("#password-field__two");
    passwordFieldOne.textContent = generateRandomPassword();
    passwordFieldTwo.textContent = generateRandomPassword();
}

let generatedPasswordFieldOne = document.querySelector("#password-field__one");
let generatedPasswordFieldTwo = document.querySelector("#password-field__two");

function copyToClipboard(e) {
    let passwordText = e.target.textContent;
    navigator.clipboard.writeText(passwordText)
                .then(() => {
                    alert('Password copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy password: ', err);
                });
}

let generatePasswordButton = document.querySelector("#generate-passwords");
generatePasswordButton.addEventListener('click', renderPasswords);

generatedPasswordFieldOne.addEventListener('click', copyToClipboard);
generatedPasswordFieldTwo.addEventListener('click', copyToClipboard);