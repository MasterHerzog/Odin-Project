'use strict'
const option = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const random = Math.floor(Math.random() * option.length);
    return random;
}

function getPlayerChoice(){
    let playerOption = 3;
    let playerSelection = "";
    do{
        playerSelection = "";
        playerSelection = prompt("please type \"rock\",\"paper\" or \"scissors\" to play");
        if(playerSelection.match(/rock/i)?.input){
            playerOption = 0;
        }else if(playerSelection.match(/paper/i)?.input){
            playerOption = 1;
        }else if(playerSelection.match(/scissors/i)?.input){
            playerOption = 2;
        }else{
            console.log("Sorry, this is not a valid option, please select \"rock\",\"paper\" or \"scissors\" to play");
        }
    }while(playerOption == 3);
    
    return playerOption;
}

/*
0 > 2
0 < 1
0 = 0

1 < 2
1 = 1

2 = 2
*/
function playRound(playerSelection, computerSelection) {
    let result = "";
    if(playerSelection == 0 && computerSelection == 2){
        result = "You won! " + option[playerSelection] + " beats " +  option[computerSelection];
    }else if(playerSelection == 0 && computerSelection == 1){
        result = "You lose! " + option[computerSelection] + " beats " +  option[playerSelection];
    }else if(playerSelection == 0 && computerSelection == 0){
        result = "You both chose " + option[playerSelection] + "!, please try again";
    }else if(playerSelection == 1 && computerSelection == 2){
        result = "You lose! " + option[computerSelection] + " beats " +  option[playerSelection];
    }else if(playerSelection == 1 && computerSelection == 1){
        result = "You both chose " + option[playerSelection] + "!, please try again";
    }else if(playerSelection == 2 && computerSelection == 2){
        result = "You both chose " + option[playerSelection] + "!, please try again";
    }

    return result;
}

function playGame(){
    let score = 0;
    let result = "";
    for(let i = 0; i <= 5; i++){
        result = playRound(getPlayerChoice(), getComputerChoice())
        console.log(result);
        if(result.match(/won/i)?.input){
            score++;
        }else if(result.match(/lose/i)?.input){
            score--;
        }
    }

    if(score>0){
        result = "You won the game!, score: " + score;
    }else if(score<0){
        result = "You lose the game!, score: " + score;
    }else{
        result = "it was a tie";
    }

    return result;
}

let computerSelection = getComputerChoice();
console.log("Computer result: " + option[computerSelection]);

let playerSelection = getPlayerChoice();
console.log("Player result: " + option[playerSelection]);

console.log(playRound(playerSelection, computerSelection));

console.log(playGame());