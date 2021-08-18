function computerPlay() {
    let random_num = Math.random() *3;
    let output;
    if (random_num > 2 ) {
        output = "Rock"
    }
    else if (random_num > 1) {
        output = "Paper"
    }
    else {
        output = "Scissor"
    }
    return output;
}

function versus(humanSelection, computerSelection) {
    humanSelection = humanSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let humanOutcome;

    console.log('You chose: ' + humanSelection + '. Computer chose: ' + computerSelection + '.');
    if (humanSelection === computerSelection) {
        humanOutcome = 'tie'
        console.log('You tied the round.')
        return humanOutcome;
    }

    if (humanSelection === 'ROCK') {
        if (computerSelection ==='SCISSOR') {
            humanOutcome = 'win';
            console.log(humanSelection + " beats " + computerSelection + ". You won the round!")
            return humanOutcome;
        }
        else {
            humanOutcome = 'loss';
            console.log(computerSelection + " beats " + humanSelection + ". You lost the round!")
            return humanOutcome
        }
    }

    if (humanSelection === 'SCISSOR') {
        if (computerSelection ==='PAPER') {
            humanOutcome = 'win';
            console.log(humanSelection + " beats " + computerSelection + ". You won the round!")
            return humanOutcome;
        }
        else {
            humanOutcome = 'loss';
            console.log(computerSelection + " beats " + humanSelection + ". You lost the round!")
            return humanOutcome
        }
    }

    if (humanSelection === 'PAPER') {
        if (computerSelection ==='ROCK') {
            humanOutcome = 'win';
            console.log(humanSelection + " beats " + computerSelection + ". You won the round!")
            return humanOutcome;
        }
        else {
            humanOutcome = 'loss';
            console.log(computerSelection + " beats " + humanSelection + ". You lost the round!")
            return humanOutcome
        }
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;

    while (humanScore < 3 && computerScore < 3) {
        humanSelection = prompt('Enter your move (rock/paper/scissor): ');
        computerSelection = computerPlay();
        humanOutcome = versus(humanSelection, computerSelection);
        if (humanOutcome === 'win') {
            humanScore += 1;
            console.log('Score: Human: ' + humanScore + " Computer: " + computerScore);
        }
        else if (humanOutcome === 'loss') {
            computerScore += 1;
            console.log('Score: Human: ' + humanScore + " Computer: " + computerScore);
        }
    }
    
    if (humanScore === 3) {
        console.log("You won the game with a score of " + humanScore + " to " + computerScore);
        }
    else {
        console.log("You loss the game with a score of " + humanScore + " to " + computerScore);
    }
}
