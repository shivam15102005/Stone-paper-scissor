let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choices");
let msg = document.querySelector("#msg");
let usersScore = document.querySelector("#user");
let CompScore = document.querySelector("#computer");

const drawGame = () =>{
    console.log("Match is Drawn");
    msg.textContent = "Match Draw! Play Again"
    msg.style.backgroundColor = "Black";
};
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        usersScore.textContent= userScore;
        console.log("You Won");
        msg.textContent= `Congrates! You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else{
        comScore++;
        CompScore.textContent = comScore;
        console.log("You Lost! & Computer Won!");
        msg.textContent= `Oops! You Lost! ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor = "Red";
    }
};

function getcompChoice() {
    let options = ["stone", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};
const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    const compChoice = getcompChoice();
    console.log("computer choice =", compChoice);

    if ( userChoice === compChoice){
        //draw game
        drawGame();
    }
        else {
            let userWin = true;
            if( userChoice === "stone"){
                //compChoice( paper or scissor)
                userWin = compChoice === "paper" ? false : true;
                   }
                   else if( userChoice === "paper"){
                    // compchoices( scissor or stone)
                  userWin = compChoice === "scissor" ? false:true;
                }
                else {
                    //compchoice( stone or scissor)
                    userWin = compChoice === "stone" ? false:true;

                }
                showWinner(userWin, userChoice, compChoice);
            }
};

choices.forEach((choices) => {
    choices.addEventListener("click",() =>{
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    })
});