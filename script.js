function computerPlay()
{
    let random = Math.floor(Math.random() * (90-0+1)+0);
    if(random>=0&&random<=30)
    {
        return "rock";
    }
    else if(random>=31&&random<=60)
    {
        return "paper";
    }
    else{
        return "scissors";
    }
}

function gamePlay(a,b)
{
    if(a==b)
    {
        //playerScore++; 
        //computerScore++;
        document.getElementById('play').innerText="it's a tie both choose "+playerSelection;
    }
    else if(a=="rock"&&b=="paper")
    {
        computerScore++;
        document.getElementById('play').innerText="You lose, paper crushes rock";
    }
    else if(a=="rock"&&b=="scissors"){
        playerScore++;
        document.getElementById('play').innerText="You win! rock destroys scissors";
    }
    else if(a=="paper"&&b=="rock"){
        playerScore++;
        document.getElementById('play').innerText="You win! paper crushes rock";
    }
    else if(a=="paper"&&b=="scissors"){
        computerScore++;
        document.getElementById('play').innerText="You lose, scissors cut paper";
    }
    else if(a=="scissors"&&b=="rock"){
        computerScore++;
        document.getElementById('play').innerText="You lose, rock destroys scissors";
    }
    else if(a=="scissors"&&b=="paper"){
        playerScore++;
        document.getElementById('play').innerText="You win! scissors cut paper";
    }
    return playerScore,computerScore;
}

let playerSelection, computerSelection;
let playerScore=0, computerScore=0;

    // get all buttons
const buttons = document.querySelectorAll('button');

// add click event listener to each button
let str1;
buttons.forEach(button => {
    button.addEventListener('click', e => {
        str1=`${e.target.id}`;

    playerSelection=str1;
    console.log(playerSelection);
    computerSelection = computerPlay();
    console.log(computerSelection);
    gamePlay(playerSelection, computerSelection);
    console.log(playerScore,computerScore);
    document.getElementById('score').innerText = "Player Score: " + playerScore+" Computer Score: "+
    computerScore;

if(playerScore>4)
{
    
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    document.getElementById('result').innerText="YOU WIN!";
    console.log("win");
    const restart= document.createElement('button');
    restart.innerHTML="RESTART";
    document.getElementById('rest').appendChild(restart);
    restart.addEventListener('click', e => {
        location.reload();
    })
}
else if(computerScore>4)
{
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    document.getElementById('result').innerText="YOU LOSE";
    console.log("lose");
    const restart= document.createElement('button');
    restart.innerHTML="RESTART";
    document.getElementById('rest').appendChild(restart);
    restart.addEventListener('click', e => {
        location.reload();
    })
}
});
});