
function incWins() {
    let wins = localStorage.wins
    if(wins === undefined) {
      wins++
    } 
    else {
      wins = 1
    }
    localStorage.wins = wins
}

function getWins() {
    let wins = localStorage.wins
    if(wins === undefined) {
        wins = 0
    }
    return wins 
}


function reset() {
    localStorage.attempts = 0
    localStorage.wins = 0
    localStorage.losses = 0
}