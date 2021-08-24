' use strict '

//Define nodes for script for the three human choice buttons.
const btn = document.querySelectorAll('.btn');
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorBtn = document.querySelector('#scissorBtn');

const playerChoiceDisplay = document.querySelector('.playerChoiceDisplay');
const playerChoiceImg = document.createElement('img');

const rockSrc = 'https://img.icons8.com/emoji/452/rock-emoji.png';
const paperSrc = 'https://icons.iconarchive.com/icons/iconsmind/outline/512/Paper-icon.png';
const scissorSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scissors_icon_black.svg/1024px-Scissors_icon_black.svg.png'

//Script for three human choice buttons.
btn.forEach((button) => {
    //Change button style to btnActive and
    //display images in the playerChoiceDisplay when mouseover button.
    button.addEventListener('mouseover', () => {
        button.setAttribute('class', 'btnActive')
        switch(button.id) {
            case 'rockBtn':
                playerChoiceImg.setAttribute('src', rockSrc);
                playerChoiceDisplay.appendChild(playerChoiceImg);
                break;
            case 'paperBtn':
                playerChoiceImg.setAttribute('src', paperSrc);
                playerChoiceDisplay.appendChild(playerChoiceImg);
                break;
            case 'scissorBtn':
                playerChoiceImg.setAttribute('src', scissorSrc);
                playerChoiceDisplay.appendChild(playerChoiceImg);
                break;
        }
    })

    //Change button style back to usual btn and remove image from playerChoiceDisplay when mouseout.
    button.addEventListener('mouseout', () => {
        button.setAttribute('class', 'btn')
        playerChoiceDisplay.removeChild(playerChoiceImg);
    })

    //If isPlaying==True, pressing buttons will change humanSelection accordingly.
    button.addEventListener('click', () => {
        if (isPlaying) {
            switch(button.id) {
                case 'rockBtn':
                    humanSelection = 'rock';
                    humanOutcome = game();
                    break;
                case 'paperBtn':
                    humanSelection = 'paper';
                    humanOutcome = game();
                    break;
                case 'scissorBtn':
                    humanSelection = 'scissor';
                    humanOutcome = game();
                    break;
            }
            if (humanOutcome == 'win') {
                button.setAttribute('class', 'btnPressedWin');
                playerChoiceDisplay.setAttribute('style', 'background-color: green;')
                setTimeout( () => {
                    button.setAttribute('class', 'btn')
                    playerChoiceDisplay.setAttribute('style', 'background-color: none;')
                }, 200);
                humanScore += 1; }
            else if (humanOutcome == 'loss') {
                button.setAttribute('class', 'btnPressedLoss');
                playerChoiceDisplay.setAttribute('style', 'background-color: red;')
                setTimeout( () => {
                    button.setAttribute('class', 'btn')
                    playerChoiceDisplay.setAttribute('style', 'background-color: none;')
                }, 200);
                computerScore += 1;
            }
            else {
                button.setAttribute('class', 'btnPressed');
                playerChoiceDisplay.setAttribute('style', 'background-color: grey;')
                setTimeout( () => {
                    button.setAttribute('class', 'btn')
                    playerChoiceDisplay.setAttribute('style', 'background-color: none;')
                }, 200);
            }
            let humanScoreDisplayStr = 'Score: ' + humanScore;
            humanScoreDisplay.innerHTML = humanScoreDisplayStr;   
        }
    })
})

//Score display variables
let humanScoreDisplay = document.querySelector('#humanScoreDisplay');


//Computer makes a random choice.
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

//When the program starts, isPlaying is set to false. Press the play button to set isPlaying to true.
//isPlaying == true means rock/paper/scissor buttons are active
let isPlaying = false;
let choiceSelected = false;
let humanOutcome;

let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;
const rock = 'rock';


function game() {
    computerSelection = computerPlay();
    humanOutcome = versus(humanSelection, computerSelection);
    return humanOutcome; 
}

//Play button
const playBtn = document.querySelector('#playBtn');

//Reset button
const resetBtn = document.querySelector('#resetBtn')

playBtn.addEventListener('click', () => {
    console.log('Play pressed.')
    isPlaying = true;
    resetBtn.setAttribute('id', 'resetBtnActive');
    resetBtn.addEventListener('click', () => {
        if (isPlaying == true) {
            resetBtn.setAttribute('id', 'resetBtn');
            console.log('Game resetted');
            isPlaying = false;
            humanScore = 0;
            computerScore = 0;
        }
    })
})







