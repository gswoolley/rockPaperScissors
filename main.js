let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let scoreboard = document.getElementById('scoreboard');
let scores = document.getElementById('scores');
let playerScore = 0;
let computerScore = 0;


// randomly select rock paper or scissors from array

function getComputerChoice(){
    myArray = ['rock', 'paper', 'scissors'];
    let choice = myArray[Math.floor(Math.random()* myArray.length)];
    //console.log('Computer choice =', choice);
    return choice;
}

function isGameOver(){
    if(playerScore == 5){
        scoreboard.innerText = 'Game Over: You Win';
        restartGame();
    }
    if(computerScore == 5){
        scoreboard.innerText = 'Game Over: You Lose';
        restartGame();
    }
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
}


rock.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    console.log(`computer selection is: ${computerSelection}`);
    if(computerSelection == 'scissors'){
        scoreboard.innerText = 'You win! Rock beats scissors';
        playerScore += 1;
    }
    else if(computerSelection == 'paper'){
        scoreboard.innerText = 'You lose! Paper beats rock';
        computerScore += 1
    }
    else{
        scoreboard.innerText = 'Tie! You both picked rock';
    }
    scores.innerText = `You: ${playerScore} Computer: ${computerScore}`;
    isGameOver();
});

paper.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    console.log(`computer selection is: ${computerSelection}`);
    if(computerSelection == 'scissors'){
        scoreboard.innerText = ('You lose! Scissors beats paper');
        computerScore += 1
    }
    else if(computerSelection == 'rock'){
        scoreboard.innerText = ('You win! Paper beats rock')
        playerScore += 1;
    }
    else{
        scoreboard.innerText = ('Tie! You both picked paper');
    }
    scores.innerText = `You: ${playerScore} Computer: ${computerScore}`;
    isGameOver();
});

scissors.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    console.log(`computer selection is: ${computerSelection}`);
    if(computerSelection == 'rock'){
        scoreboard.innerText = ('You lose! Rock beats scissors');
        computerScore += 1;
    }
    else if(computerSelection == 'paper'){
        scoreboard.innerText = ('You win! Scissors beats paper')
        playerScore += 1;
    }
    else{
        scoreboard.innerText = ('Tie! You both picked scissors');
    }
    scores.innerText = `You: ${playerScore} Computer: ${computerScore}`;
    isGameOver();
});



//Old rock paper sissors code code


//function that compares player selection and computer selection, returns string 
// with winner of that round

/*function playRound(playerSelection, computerSelection){
    if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
        return('Invalid choice');
    }

    if(playerSelection == 'rock'){
        if(computerSelection == 'scissors'){
            return('You win! Rock beats scissors');
        }
        else if(computerSelection == 'paper'){
            return('You lose! Paper beats rock')
        }
        else{
            return('Tie! You both picked rock');
        }
    }

    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            return('You lose! Scissors beats paper');
        }
        else if(computerSelection == 'rock'){
            return('You win! Paper beats rock')
        }
        else{
            return('Tie! You both picked paper');
        }
    }

    else {
        if(computerSelection == 'rock'){
            return('You lose! Rock beats scissors');
        }
        else if(computerSelection == 'paper'){
            return('You win! Scissors beats paper')
        }
        else{
            return('Tie! You both picked scissors');
        }
    }
}

//play 5 round game that keeps score and reports winner at the end

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 1; i <= 5; i++){
        console.log('You:', playerScore, 'Computer:', computerScore);
        //set choice variables:
        computerChoice = getComputerChoice();
        let playerSelection = prompt("rock, paper, or scissors?");
        playerSelection = playerSelection.toLowerCase();
        //play round
        string = (playRound(playerSelection, computerChoice));
        console.log(string);
        if(string.includes('win')){
            playerScore+=1;
        }
        else if(string.includes('lose')){
            computerScore+=1;
        }
    }
    if(playerScore > computerScore){
        console.log('Game over. You win!')
    } 
    else{
        console.log('Game over. You lose!')
    }
}

*/