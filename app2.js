let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>
{
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>
{
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText="You Won";
         msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText="You Lose";
         msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
     const userChoice = choice.getAttribute("id");
    console.log(userChoice);
    playGame(userChoice);
  });
});