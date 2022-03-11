
function incAttempts() {
    let attempts = localStorage.attempts
    if(attempts !== undefined) {
      attempts++
    } 
    else {
      attempts = 1
    }
    localStorage.attempts = attempts
    console.log (localStorage.attempts)
  
}
function getAttempts() {
    let attempts = localStorage.attempts
    if(attempts === undefined) {
      attempts = 0
    }
    return attempts 
}

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

function incLosses() {
    let losses = localStorage.losses
    if(losses !== undefined) {
      losses++
    } 
    else {
      losses = 1
    }
    localStorage.losses = losses
}

function getLosses() {
    let losses = localStorage.losses
    if(losses === undefined) {
        losses = 0
    }
    return losses 
}

function reset() {
    localStorage.attempts = 0
    localStorage.wins = 0
    localStorage.losses = 0
}

//egen function

    function buttonClick() {
        document.getElementById('inc').value = i+1;
    }