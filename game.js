let difficulties = ["Easy", "Normal", "Hard"];
let level = 0;
let difficulty = difficulties[0];
let type;
let points = 0;
let rounds = 0;
let myAnswer;
let answer = 0;
let numFirst = 0;
let numSecond = 0;
let soundOn = true;

function randomNumbers(num, ssm){
    document.getElementById("levelButton").innerHTML = difficulties[level];
    if(ssm){
        numFirst = Math.floor(Math.random()*num+1);
        do{
            numSecond = Math.floor(Math.random()*num);
        }
        while(numFirst<numSecond)
    }else{
        numFirst = Math.floor(Math.random()*num);
        numSecond = Math.floor(Math.random()*num);
    }
}
function getNumbers(ssm){
    switch(difficulty){
        case "Easy": randomNumbers(10, ssm);
        break;
        case "Normal": randomNumbers(100, ssm);
        break;
        case "Hard": randomNumbers(1000, ssm);
        break;
    }
}
function plus(){
    getNumbers(false);
    document.getElementById("task").innerHTML = numFirst + " + " + numSecond + " = ";
    type = "+";
    answer = numFirst + numSecond;
    console.log(answer);
}
function minus(){
    getNumbers(true);
    document.getElementById("task").innerHTML = numFirst + " - " + numSecond + " = ";
    type = "-";
    answer = numFirst - numSecond;
    console.log(answer);
}

function multiplication(){
    getNumbers(false);
    document.getElementById("task").innerHTML = numFirst + " * " + numSecond + " = ";
    type = "*";
    answer = numFirst * numSecond;
    console.log(answer);
}

function division(){
        getNumbers(true); 
    while(numFirst<=numSecond || numFirst%numSecond != 0 || numSecond==0 || numSecond==1){
        getNumbers(true); 
    }

    document.getElementById("task").innerHTML = numFirst + " / " + numSecond + " = ";
    type = "/";

    answer = numFirst / numSecond;
    console.log(answer);
}

function numeros(num){
    let numbers = document.getElementById("userInput");
    numbers.value = numbers.value + num;
}

function clearInput(){
    document.getElementById("userInput").value = "";
}

function backspace(){
    let value = document.getElementById("userInput");
    value.value = value.value.slice(0, -1);    
}

function levelSwitch() {
    if (level != 2) {
        level++
    } else {
        level = 0;
    }
    difficulty = difficulties[level];
    document.getElementById("levelButton").innerHTML = difficulties[level];
    randomTask();
}

function checkAnswer(){
    rounds++;
    let userAnswer = document.getElementById("userInput").value;
    if(userAnswer != "" && answer == Number(userAnswer)){
        points++;
        console.log("Earned Point!");
    }
    
    if(rounds == 5){
        if (level == 2) {
            document.getElementById("nextLevel").classList.add("d-none");
            document.getElementById("playAgain").classList.remove("d-none");
        }
        document.getElementById("gamesn").classList.add("d-none");
        document.getElementById("endsn").classList.remove("d-none");
        document.getElementById("result").innerHTML = "Result " + points + "/5";
        rounds=0;
        points=0;
    }

    switch(type){
        case "+": plus();
        break;
        case "-": minus();
        break;
        case "*": multiplication();
        break;
        case "/": division();
        break;
    }
    clearInput();
}
function randomTask(){
    let rand = Math.round(Math.random()*3);
    console.log("level: " + difficulties[level]);
    console.log(rand);
    switch(rand){
        case 0: plus();
        break;
        case 1: minus();
        break;
        case 2: multiplication();
        break;
        case 3: division();
        break;
    }
}
function sound(num) {
    var sound;
    if (soundOn) {
        if (num == 1) {
            sound = new Audio('sounds/click_new.mp3')
        } else if (num == 2) {
            sound = new Audio('sounds/fade_in_new.mp3')
        } else if (num == 3) {
            sound = new Audio('sounds/fade_out_new.mp3')
        }
        sound.play()
        sound.volume = 0.3;
    }
}
function soundTurn() {
      if (soundOn) {
        soundOn = false;
        document.getElementById("soundButton").innerHTML = "Sound: OFF";
      } else {
        soundOn = true;
        document.getElementById("soundButton").innerHTML = "Sound: ON";
      }
}
document.addEventListener('keypress', (event) => {
    var name = event.key;
    if (name === "1") {
        document.getElementById("one").click();
    }
    console.log(name);
}, false);
    

