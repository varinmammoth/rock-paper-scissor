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
        console.log('You tied.')
        return humanOutcome;
    }

    if (humanSelection === 'ROCK') {
        if (computerSelection ==='SCISSOR') {
            humanOutcome = 'win';
            console.log(humanSelection + " beats " + computerSelection + ". You won!")
            return humanOutcome;
        }
        else {
            humanOutcome = 'loss';
            console.log(computerSelection + " beats " + humanSelection + ". You lost!")
            return humanOutcome
        }
    }

    if (humanSelection === 'SCISSOR') {
        if (computerSelection ==='PAPER') {
            humanOutcome = 'win';
            console.log(humanSelection + " beats " + computerSelection + ". You won!")
            return humanOutcome;
        }
        else {
            humanOutcome = 'loss';
            console.log(computerSelection + " beats " + humanSelection + ". You lost!")
            return humanOutcome
        }
    }

    if (humanSelection === 'PAPER') {
        if (computerSelection ==='ROCK') {
            humanOutcome = 'win';
            console.log(humanSelection + " beats " + computerSelection + ". You won!")
            return humanOutcome;
        }
        else {
            humanOutcome = 'loss';
            console.log(computerSelection + " beats " + humanSelection + ". You lost!")
            return humanOutcome
        }
    }
}