/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthConversion = document.getElementById("length-value")
const volumeConversion = document.getElementById("volume-value")
const massConversion = document.getElementById("mass-value")


const userInput = document.getElementById("insert")

const convertBtn = document.getElementById("convert-button")

convertBtn.addEventListener("click", function() {
    const stringToNumber = Number(userInput.value)

    // Singular-to-Plural Switch
    let pluralMeter = "meters"
    let pluralFoot = "feet"
    let pluralLiter = "liters"
    let pluralGallon = "gallons"
    let pluralKilo = "kilos"
    let pluralPound = "pounds"
    
    if (stringToNumber === 1) {
        pluralMeter = "meter"
        pluralFoot = "foot"
        pluralLiter = "liter"
        pluralGallon = "gallon"
        pluralKilo = "kilo"
        pluralPound = "pound"
    }

    // This is conversion for Length
    const metersToFeet = (stringToNumber * 3.281).toFixed(3)
    const feetToMeters = (stringToNumber / 3.281).toFixed(3)
    lengthConversion.innerHTML = `${stringToNumber} ${pluralMeter} = ${metersToFeet} feet | ${stringToNumber} ${pluralFoot} = ${feetToMeters} metres`

    // This is conversion for Volume
    const literPerGallon = (stringToNumber * 0.264).toFixed(3)
    const gallonPerliter = (stringToNumber / 0.264).toFixed(3)
    volumeConversion.innerHTML = `${stringToNumber} ${pluralLiter} = ${literPerGallon} gallons | ${stringToNumber} ${pluralGallon} = ${gallonPerliter} liters`

    // This is conversion for Mass
    const kilogramPerPound = (stringToNumber * 2.204).toFixed(3)
    const poundPerKilogram = (stringToNumber / 2.204).toFixed(3)
    massConversion.innerHTML = `${stringToNumber} ${pluralKilo} = ${kilogramPerPound} pounds | ${stringToNumber} ${pluralPound} = ${poundPerKilogram} kilos`
})


