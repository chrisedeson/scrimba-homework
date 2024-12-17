const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
    "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPasswordObject = document.getElementById("first-password")
let secondPasswordObject = document.getElementById("second-password")
let generateButton = document.getElementById("generate-button")

generateButton.addEventListener("click", function() {
    function generatePassword() {
        let generatedPassword = ""
        for (let i=0; i < 15; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            let randomCharacters = characters[randomIndex];
            generatedPassword += randomCharacters
        }
        return generatedPassword
    }
    firstPasswordObject.textContent = generatePassword()
    secondPasswordObject.textContent = generatePassword()  
})



// CHILDISH WAY, PROFESSIONAL is the one above
// There's a way he did the button clicked
// go to HTML and use onclick="function name()"
// now to JS, just do:
// function functionname() {
// whatever you wanna do here e.g console.log("button clicked")
// }


