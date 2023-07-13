let PlayTime = 0;
let TotalRounds = 0;
let TotalGames = 0;
let TotalAnswers = 0;
let TotalCorrectAnswers = 0;
let TotalIncorrectAnswers = 0;
let OverallPoints = 0;

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let outTime;

function resetStats(){
    PlayTime = 0;
    TotalRounds = 0;
    TotalAnswers = 0;
    TotalCorrectAnswers = 0;
    TotalIncorrectAnswers = 0;
    TotalGames = 0;
    OverallPoints = 0;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
}

function setStats(){
    document.getElementById("playTime").innerHTML = "Total play time: ";
    document.getElementById("totalRounds").innerHTML = "Total rounds: " + TotalRounds;
    document.getElementById("totalGames").innerHTML = "Total games: " + TotalGames;
    document.getElementById("correctPoints").innerHTML = "Correct answers: " + TotalCorrectAnswers;
    document.getElementById("incorrectPoints").innerHTML = "Incorrect answers: " + TotalIncorrectAnswers;
    document.getElementById("totalAnswers").innerHTML = "Total answers: " + TotalAnswers;
    document.getElementById("overallPoints").innerHTML = "Overall points: " + OverallPoints;
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
function startTimer(){
    timer = true;
    stopWatch();
}

function stopTimer(){
    timer = false;
}

function stopWatch() {
    if (timer) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
 
        if (hour < 10) {
            hrString = "0" + hrString;
        }
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
        }
        outTime = hrString + " " + minString + " " + secString;
        outTime = outTime.replaceAll("0", "");
        outTime = outTime + "." + countString;
        setTimeout(stopWatch, 10);
    }
}