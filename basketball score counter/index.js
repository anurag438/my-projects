let homeNumber = document.getElementById("home-number");
let guestNumber = document.getElementById("guest-number");
 //pet is the current value in the home scoreboard
function addHomeOne(){
    let pet = homeNumber.innerHTML;
    homeNumber.innerHTML = parseInt(pet) + 1;
}
function addHomeTwo(){
    let pet = homeNumber.innerHTML;
    homeNumber.innerHTML = parseInt(pet) + 2;
}
function addHomeThree(){
    let pet = homeNumber.innerHTML;
    homeNumber.innerHTML = parseInt(pet) + 3;
}

//set is the current value in the home scoreboard
function addGuestOne(){
    let set = guestNumber.innerHTML;
    guestNumber.innerHTML = parseInt(set) + 1;
}
function addGuestTwo(){
    let set = guestNumber.innerHTML;
    guestNumber.innerHTML = parseInt(set) + 2;
}
function addGuestThree(){
    let set = guestNumber.innerHTML;
    guestNumber.innerHTML = parseInt(set) + 3;
}

