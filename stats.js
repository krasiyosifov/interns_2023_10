let PlayTime = 0;
let TotalRounds = 0;
let TotalGames = 0;
let TotalAnswers = 0;
let TotalCorrectAnswers = 0;
let TotalIncorrectAnswers = 0;

function setStats(){
    document.getElementById("playTime").innerHTML = "Total play time: " + PlayTime;
    document.getElementById("totalRounds").innerHTML = "Total rounds: " + TotalRounds;
    document.getElementById("totalGames").innerHTML = "Total games: " + TotalGames;
    document.getElementById("correctPoints").innerHTML = "Correct answers: " + TotalCorrectAnswers;
    document.getElementById("incorrectPoints").innerHTML = "Incorrect answers: " + TotalIncorrectAnswers;
    document.getElementById("totalAnswers").innerHTML = "Total answers: " + TotalAnswers;
}

function addRound(){
    TotalRounds++;
}
function addGame(){
    console.log("game added");
    TotalGames++;
}
function addAnswer(CorrectAnswer, UserAnswer){
    if(UserAnswer != ""){
        TotalAnswers++;   
    }else{
        return;
    }
    if(CorrectAnswer == Number(UserAnswer)){
        TotalCorrectAnswers++;
    }else{
        TotalIncorrectAnswers++;
    }
}