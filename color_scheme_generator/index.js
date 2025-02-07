const colorInputEl = document.getElementById("colorInput");
const colorSchemeBtn = document.getElementById("get-btn");
const colorSchemeMode = document.getElementById("colorSchemeMode");
let colorScheme = document.querySelector(".color-section");

let hex = "000000"; // default value
let mode = "monochrome"; // default value
let api = `https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${mode}&count=6`;

colorInputEl.addEventListener("change", getChanges);
colorSchemeMode.addEventListener("change", getChanges);

function getChanges(event) {
    if (event.target.id === "colorInput") {
        hex = event.target.value.slice(1); // remove the '#'
    } else if (event.target.id === "colorSchemeMode") {
        mode = event.target.value;
    }
    api = `https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${mode}&count=6`; // update api
}

colorSchemeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    generateColorScheme();
});

function generateColorScheme() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            colorScheme.innerHTML = ""; // clear, first
            data.colors.forEach(hexColor => {
                let colorElement = document.createElement("section");
                colorElement.classList.add("hex-section");
                
                let colorDiv = document.createElement("div");
                colorDiv.classList.add("color-div");
                colorDiv.style.backgroundColor = hexColor.hex.value;
                colorDiv.addEventListener("click", copyToClipboard);
                
                let colorCode = document.createElement("p");
                colorCode.classList.add("hex-code");
                colorCode.textContent = hexColor.hex.value;
                colorCode.addEventListener("click", copyToClipboard);
                
                colorElement.appendChild(colorDiv);
                colorElement.appendChild(colorCode);
                colorScheme.appendChild(colorElement);
            });
        });
}

function copyToClipboard(event) {
    const colorCode = event.target.textContent;
    if (colorCode) {
        navigator.clipboard.writeText(colorCode).then(() => {
            let originalText = event.target.textContent;
            event.target.textContent = "Copied!";
            setTimeout(() => {
                event.target.textContent = originalText;
            }, 1000);
        }).catch(err => console.error("Error copying text: ", err));
    }
}

generateColorScheme();
