let homeScoreEl = document.getElementById("home-score-el")
console.log(homeScoreEl)

let guestScoreEl = document.getElementById("guest-score-el")
console.log(guestScoreEl)

// Home score functions

let homeScore = 12

function add1home() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function add2home() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function add3home() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

// Guest score functions

let guestScore = 5

function add1guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function add2guest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function add3guest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

// New Game function

function newGame() {
    homeScore = 0
    guestScore = 0
    
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}