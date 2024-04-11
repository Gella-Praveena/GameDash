let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const result=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame=()=>{
    result.innerText=`Game was draw! play again \u{1F91D}`;
    result.style.backgroundColor="#BBE2EC";
    result.style.color="black";
    result.style.fontSize="3rem";

};

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        result.innerText=`You win! your ${userChoice} beats ${compChoice} \u{1F973}`;
        result.style.backgroundColor="#BBE2EC";
        result.style.color="#0D9276";
        result.style.fontSize="3rem";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        result.innerText=`You lost! ${compChoice} beats your ${userChoice} \u{1F61E}`;
        result.style.backgroundColor="#BBE2EC";
        result.style.color="#6D2932";
        result.style.fontSize="3rem";
    }
};

// user choice ,comp choice is taken then comparision takes place  
const playGame=(userChoice)=>{
    // generate computer choice 
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        // draw case
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //case 1 userchoses=rock and compchoses=paper or scissors
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            //case 2 userchoses=paper and compchoses=rock or scissors
            userWin=compChoice==="scissors"?false:true;
        }else{
            //case 3 userchoses=scissors and compchoses=rock or paper
            userWin=compChoice==="scissors"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});