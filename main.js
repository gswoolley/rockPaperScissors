console.log("Hello, World!");

// randomly select rock paper or scissors from array

function getComputerChoice(){
    myArray = ['rock', 'paper', 'scissors'];
    let choice = myArray[Math.floor(Math.random()* myArray.length)];
    //console.log('Computer choice =', choice);
    return choice;
}

// get player's selection from prompt, convert to all lowercase


//set selection variables

computerSelection = getComputerChoice();

//function that compares player selection and computer selection, returns string 
// with winner of that round

function playRound(playerSelection, computerSelection){
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
