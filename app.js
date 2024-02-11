let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorPara= document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = `Game was Draw. Play again!`;
  msg.style.backgroundColor = "#F72798";
};

const showWinner = (userWin, userChoice, compChoice ) => {
  if (userWin) {
    userScore++
    userScorPara.innerText = userScore;
    console.log("You Win");
    // msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
    msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++
    compScorePara.innerText = compScore;
    console.log("You Loose");
    msg.innerText = `You loose ! ${compChoice} beats Your ${userChoice}. Looseerrrrrrrr!! Mona is a Looser 😀`;
    msg.style.backgroundColor = "Red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  // generate computer choice
  const compChoice = genCompChoice();
  console.log("computer choice =", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //compChoice= paper,scissors
      userWin = compChoice === "papper" ? false : true;
    } else if (userChoice === "papper") {
      //compchoice= rock, scissor
      userWin = compChoice === "rock" ? true : false;
    } else {
      //compchoice = rock, papper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
