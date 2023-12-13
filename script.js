let bigScreen = document.getElementById("big-screen")

let inningsScore = document.getElementById("score")
let inningsWickets = document.getElementById("wickets")

let oversCompleted = document.getElementById("overs-completed")
let currentOverBalls = document.getElementById("balls-completed")

let totalBallsBowled = 0

console.log(totalBallsBowled)


function one(){
    bigScreen.textContent = "1"
    inningsScore.textContent = +inningsScore.textContent + 1
    totalBallsBowled += 1
    currentOverBalls.textContent = totalBallsBowled%6
    oversCompleted.textContent = Math.trunc(totalBallsBowled/6)
}

function two(){
    bigScreen.textContent = "2"
    inningsScore.textContent = +inningsScore.textContent + 2
    totalBallsBowled += 1
    currentOverBalls.textContent = totalBallsBowled%6
    oversCompleted.textContent = Math.trunc(totalBallsBowled/6)
}

function three(){
    bigScreen.textContent = "3"
    inningsScore.textContent = +inningsScore.textContent + 3
    totalBallsBowled += 1
    currentOverBalls.textContent = totalBallsBowled%6
    oversCompleted.textContent = Math.trunc(totalBallsBowled/6)
}

function four(){
    bigScreen.textContent = "FOUR!"
    inningsScore.textContent = +inningsScore.textContent + 4
    totalBallsBowled += 1
    currentOverBalls.textContent = totalBallsBowled%6
    oversCompleted.textContent = Math.trunc(totalBallsBowled/6)
}

function six(){
    bigScreen.textContent = "SIX!!!"
    inningsScore.textContent = +inningsScore.textContent + 6
    totalBallsBowled += 1
    currentOverBalls.textContent = totalBallsBowled%6
    oversCompleted.textContent = Math.trunc(totalBallsBowled/6)
}

function wicket(){
    bigScreen.textContent = "OUT!"
    inningsWickets.textContent = +inningsWickets.textContent + 1
    totalBallsBowled += 1
    currentOverBalls.textContent = totalBallsBowled%6
    oversCompleted.textContent = Math.trunc(totalBallsBowled/6)
}

function reset(){
    bigScreen.textContent = ""
    inningsScore.textContent = 0
    inningsWickets.textContent = 0
    totalBallsBowled = 0
    currentOverBalls.textContent = 0
    oversCompleted.textContent = 0
}
