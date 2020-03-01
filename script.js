// generate a random integer within the given range
function randomInt(min, max)
{
    return Math.round(Math.random() * (max - min) + min);
}

// generate a random computer move
function computerPlay()
{
    let randInt = randomInt(1, 3); // generate a random integer between 1 and 3
    switch (randInt) // select corresponding move
    {
        case 1: return "rock"; break;
        case 2: return "paper"; break;
        case 3: return "scissors"; break;
    }
}

// play a round
function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    let msg = "This will display if no valid move selected"; // error check
    switch (playerSelection)
    {
        case "rock": // when the player chooses rock
        {
            switch (computerSelection)
            {
                case "rock":
                {
                    msg = "It's a tie!";
                    break;
                }
                case "paper":
                {
                    compScore++;
                    msg = "You lose! Paper beats rock";
                    break;
                }
                case "scissors":
                {
                    playerScore++;
                    msg = "You win! Rock beats scissors";
                    break;
                }
            }
            break;
        }
        case "paper": // when the player chooses paper
        {
            switch (computerSelection)
            {
                case "rock":
                {
                    playerScore++;
                    msg = "You win! Paper beats rock";
                    break;
                }
                case "paper":
                {
                    msg = "It's a tie!";
                    break;
                }
                case "scissors":
                {
                    compScore++;
                    msg = "You lose! Scissors beats paper";
                    break;
                }
            }
            break;
        }
        case "scissors": // when the player chooses scissors
        {
            switch (computerSelection)
            {
                case "rock": 
                {
                    compScore++;
                    msg = "You lose! Rock beats scissors";
                    break;
                }
                case "paper":
                {
                    playerScore++;
                    msg = "You win! Scissors beats paper";
                    break;
                }
                case "scissors":
                {
                    msg = "It's a tie!";
                    break;
                }
            }
            break;
        }
    }
    alert(msg);
}

// select next player move from button click
function nextMove(e)
{
    if (playerScore == 5 || compScore == 5) return; // stop playing once someone hits 5 points
    console.log(e.target.textContent);
    let playerSelection = e.target.textContent; // get playerSelection from button click
    console.log(playerSelection);
    let computerSelection = computerPlay(); // randomize computerSelection
    console.log(computerSelection);

    playRound(playerSelection, computerSelection); // play a round

    console.log(playerScore);
    console.log(compScore);
    scoreboard.textContent = "playerScore: " + playerScore + "\ncompScore: " + compScore; // update scores

    if (playerScore == 5) // check for winner
        final.textContent = "Congratulations, you won!";
    else if (compScore == 5) // check for winner
        final.textContent = "Sorry, you lost!";
    results.appendChild(final);
}

let playerScore = 0;
let compScore = 0;

const results = document.querySelector("#results")
const scoreboard = document.createElement('h3');
scoreboard.textContent = "playerScore: " + playerScore + "\ncompScore: " + compScore; // initialize scores
results.appendChild(scoreboard);
const final = document.createElement('h3');

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const moves = Array.from(document.querySelectorAll(".move"));

moves.forEach(move => move.addEventListener('click', nextMove)); // play game upon button click