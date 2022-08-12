const inputField = document.getElementById("input-field")
const convertBtn = document.getElementById("button")
const lengthConv = document.getElementById("length-conversion")
const volumeConv = document.getElementById("volume-conversion")
const massConv = document.getElementById("mass-conversion")
convertBtn.addEventListener("click", function(){
    length()
    volume()
    mass()
    inputField.value = ""
})
function length(){
    let length = inputField.value
    lengthConv.innerHTML =`${length} meters = ${(length*3.281).toFixed(3)} feet | 
    ${length} feet = ${(length*0.304).toFixed(3)} meters`
}

function volume(){
    let volume = inputField.value
    volumeConv.innerHTML =`${volume} liters = ${(volume*0.264).toFixed(3)} gallons | 
    ${volume} gallons = ${(volume*3.78).toFixed(3)} liters`
}

function mass(){
    let mass = inputField.value
    massConv.innerHTML =`${mass} kilograms = ${(mass*2.204).toFixed(3)} pounds | 
    ${mass} pounds = ${(mass*0.45).toFixed(3)} kilograms`
}
