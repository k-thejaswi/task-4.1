let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }
}
let count = 0
function playRound(input){
    if(count < 5){ 
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);
    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;
    console.log("Computer Choose -> ",choices[num].toUpperCase())
    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input.toUpperCase()} </span>`;
    console.log("User Choose -> ",input.toUpperCase())
    let computer_choice = choices[num];
    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.innerHTML = "YOU WIN";
            console.log("You Win")
            user_score++;
            break;
        case 'lose':
            result_ref.innerHTML = "YOU LOSE";
            console.log("You Lose")
            computer_score++;
            break;
        default:
            result_ref.innerHTML = "DRAW";
            console.log("Draw")
            break;
    }
    console.log("Computer Score-> ",computer_score)
    console.log("User Score-> ",user_score)
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
    count = count + 1
    if (count == 4){
        if (computer_score > user_score){
            console.log("computer win")
            computer_score = 0
            user_score = 0
            count = 0
            document.getElementById("comp_choice").innerHTML = ""
            document.getElementById("user_choice").innerHTML = ""
            document.getElementById("computer_score").innerHTML = computer_score;
            document.getElementById("user_score").innerHTML = user_score;
            result_ref.innerHTML =""
            alert ("Game Over!, computer win")
        }else if (computer_score == user_score){
            console.log("draw")
            computer_score = 0
            user_score = 0
            count = 0
            document.getElementById("comp_choice").innerHTML =""
            document.getElementById("user_choice").innerHTML = ""
            document.getElementById("computer_score").innerHTML = computer_score;
            document.getElementById("user_score").innerHTML = user_score;
            result_ref.innerHTML =""
            alert("Game Over! ,draw")
        }
        else{
            console.log("you win")
            computer_score = 0
            user_score = 0
            count = 0
            document.getElementById("comp_choice").innerHTML =""
            document.getElementById("user_choice").innerHTML = ""
            document.getElementById("computer_score").innerHTML = computer_score;
            document.getElementById("user_score").innerHTML = user_score;
            result_ref.innerHTML =""
            alert("Game Over!, you win")
        }   
     }
  }
 }