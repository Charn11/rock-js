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

function playerPlay()
{
    let str1;
    for( ; ; ){
        str1=prompt("Enter rock, paper or scissors:");
        str1=str1.toLowerCase();
        if(str1=="rock"||str1=="paper"||str1=="scissors"){
        break;
        }
        else{
            alert("Incorrect input! Enter rock, paper or scissors");
        }
    }
    return str1;
}

function gamePlay(a,b)
{
    if(a==b)
    {
        playerScore++; 
        computerScore++;
        alert("it's a tie both choose "+playerSelection);
    }
    else if(a=="rock"&&b=="paper")
    {
        computerScore++;
        alert("You lose, paper crushes rock");
    }
    else if(a=="rock"&&b=="scissors"){
        playerScore++;
        alert("You win! rock destroys scissors");
    }
    else if(a=="paper"&&b=="rock"){
        playerScore++;
        alert("You win! paper crushes rock");
    }
    else if(a=="paper"&&b=="scissors"){
        computerScore++;
        alert("You lose, scissors cut paper");
    }
    else if(a=="scissors"&&b=="rock"){
        computerScore++;
        alert("You lose, rock destroys scissors");
    }
    else if(a=="scissors"&&b=="paper"){
        playerScore++;
        alert("You win! scissors cut paper");
    }
    return playerScore,computerScore;
}

let playerSelection, computerSelection;
let playerScore=0, computerScore=0;
let j;
for( ; ; ){
    j=prompt("enter number of rounds to play: Max 10 rounds");
    if(j<=10&&j>=1){
        break;
    }
    else if(j>10){
        alert("Max 10 rounds!!");
    }
    else if(j==0){
        alert("invalid input");
    }
    else{
        alert("invalid input");
    }
}
for(i=0;i<j;i++)
{
    playerSelection = playerPlay();
    console.log(playerSelection);
    computerSelection = computerPlay();
    console.log(computerSelection);
    gamePlay(playerSelection, computerSelection);
    console.log(playerScore,computerScore);
}
if(playerScore==computerScore)
{
    alert("FINAL: DRAW");
    console.log("draw");
}
else if(playerScore>computerScore)
{
    alert("FINAL: YOU WIN!");
    console.log("win");
}
else{
    alert("FINAL: YOU LOSE :(");
    console.log("lose");
}