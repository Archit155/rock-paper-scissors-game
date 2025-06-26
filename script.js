let userScrr = 0;
let computerScrr = 0;

const options = document.querySelectorAll(".option");
const message = document.querySelector("#msg");

let userscore = document.querySelector("#userscr");
let Computerscore = document.querySelector("#compscr");


options.forEach((option) =>{

    option.addEventListener("click",()=>{
        const useropt = option.getAttribute("id");
        console.log(useropt);
        playGame(useropt);
       
    });
});

const genCompOpt = () =>{

    const choices = ["rock","paper","scissor"];
    const compopt = Math.floor(Math.random()*3);
    return choices[compopt];
}


const gamedraw = () =>
{
    console.log("Game was drawn");
    message.innerText = `Game was drawn.Play again.`;
    message.style.backgroundColor = "#081b31";
}



const playGame = (useropt) =>{

    const Computer = genCompOpt();
   

    if(useropt== Computer){
        gamedraw();
    }
    else{

     let userWin = true;
        if(useropt == "rock")
        {
            userWin = Computer == "scissor"?true:false;
        }
        else if(useropt == "paper"){
            userWin = Computer == "rock"?true:false;
        }
        else{
            userWin = Computer == "paper"?true:false;
        }
        showWinner(userWin,useropt,Computer);
    }
  
}

const showWinner = (userWin,useropt,Computer) =>
{
    if(userWin)
    {
        userScrr++;
        userscore.innerText = userScrr;

        message.innerText = `You Won! Your ${useropt} beats ${Computer}`;
        message.style.backgroundColor = "green";
    }
    else{

        computerScrr++;
        Computerscore.innerText = computerScrr;
        message.innerText = `You Lost!  ${Computer} beats Your ${useropt}`;
        message.style.backgroundColor = "red";
    }
}







