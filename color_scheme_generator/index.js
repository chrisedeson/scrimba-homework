const colorInputEl = document.getElementById("colorInput");
const colorSchemeBtn = document.getElementById("get-btn")
const colorSchemeMode = document.getElementById("colorSchemeMode")
let colorScheme = document.querySelector(".color-section")

let hex = '000000'; // default value
let mode = 'monochrome'; // default value
let api = `https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${mode}&count=6`


colorInputEl.addEventListener("change", getChanges)
colorSchemeMode.addEventListener("change", getChanges)

function getChanges(event) {
    if (event.target.id === "colorInput") {
        hex = event.target.value.slice(1) // remove the '#'
        api = `https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${mode}&count=6` // update api
    } else if (event.target.id === "colorSchemeMode") {
        mode = event.target.value
        api = `https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${mode}&count=6` // update api
    }
}

colorSchemeBtn.addEventListener("click", function(event) {
    event.preventDefault()
    generateColorScheme()
})

function generateColorScheme() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            colorScheme.innerHTML = ''; // clear, first
            data.colors.forEach(hexColor => {
                console.log(hexColor.hex.value)
                colorScheme.innerHTML += `
                    <section class="hex-section">
                        <div class= "color-div" style="background-color: ${hexColor.hex.value}"></div>
                        <p class="hex-code">${hexColor.hex.value}</p>
                    </section>
                `
            });
        })

}

generateColorScheme() // Display default Color Scheme on-load
