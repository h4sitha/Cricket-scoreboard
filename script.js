let bigScreen = document.getElementById("big-screen")

let inningsScore = document.getElementById("score")
let inningsWickets = document.getElementById("wickets")


console.log(inningsWickets)


function one(){
    bigScreen.innerText = "1"
    inningsScore.innerText = +inningsScore.innerText + 1
}

function two(){
    bigScreen.innerText = "2"
    inningsScore.innerText = +inningsScore.innerText + 2
}

function three(){
    bigScreen.innerText = "3"
    inningsScore.innerText = +inningsScore.innerText + 3
}

function four(){
    bigScreen.innerText = "FOUR!"
    inningsScore.innerText = +inningsScore.innerText + 4
}

function six(){
    bigScreen.innerText = "SIX!!!"
    inningsScore.innerText = +inningsScore.innerText + 6
}

function wicket(){
    bigScreen.innerText = "OUT!"
    inningsWickets.innerText = +inningsWickets.innerText + 1
}

function reset(){
    bigScreen.innerText = ""
    inningsScore.innerText = 0
    inningsWickets.innerText = 0
}

