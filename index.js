let homePoints = 0;
let homeScore = document.getElementById("home-score");

let guestPoints = 0;
let guestScore = document.getElementById("guest-score");


/* home */
function homeOne(){
    homePoints += 1;
    homeScore.textContent = homePoints;  
}

function homeTwo(){
    homePoints += 2;
    homeScore.textContent = homePoints;
}

function homeThree(){
    homePoints += 3;
    homeScore.textContent = homePoints;
}

function resetHome(){
    homePoints = 0;
    homeScore.textContent = homePoints;
}


/* guest */
function guestOne(){
    guestPoints += 1;
    guestScore.textContent = guestPoints;
}

function guestTwo(){
    guestPoints += 2;
    guestScore.textContent = guestPoints;
}

function guestThree(){
    guestPoints += 3;
    guestScore.textContent = guestPoints;
}

function resetGuest(){
    guestPoints = 0;
    guestScore.textContent = guestPoints;
}


/* reset */
let resetScore = document.getElementById("resetScore");

function newGame(){
    guestPoints = 0;
    homePoints = 0;
    homeScore.textContent = homePoints;
    guestScore.textContent = guestPoints;
}


