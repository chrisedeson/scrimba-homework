const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+=[]{},|:;<>.?/".split("");

let firstPasswordObject = document.getElementById("first-password");
let secondPasswordObject = document.getElementById("second-password");
let generateButton = document.getElementById("generate-button");

// Function to generate a random password
function generatePassword() {
    let generatedPassword = "";
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
    }
    return generatedPassword;
}

generateButton.addEventListener("click", function () {
    firstPasswordObject.textContent = generatePassword();
    secondPasswordObject.textContent = generatePassword();
});

// Function to copy text to clipboard and show a confirmation message
function copyToClipboard(event) {
    const password = event.target.textContent;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            let originalText = event.target.textContent;
            event.target.textContent = "Copied!";
            setTimeout(() => {
                event.target.textContent = originalText;
            }, 1000);
        }).catch(err => console.error("Error copying text: ", err));
    }
}


firstPasswordObject.addEventListener("click", copyToClipboard);
secondPasswordObject.addEventListener("click", copyToClipboard);
