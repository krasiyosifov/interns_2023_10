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
let buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace", "Enter", "+", "-", "*", "/", "f", "c"];


function randomNumbers(minFirst, maxFirst, minSecond, maxSecond){
    numFirst = Math.round(Math.random() * maxFirst + minFirst);
    numSecond = Math.round(Math.random() * maxSecond + minSecond);
    if(numFirst==0 && numSecond==0){
        randomNumbers(minFirst, maxFirst, minSecond, maxSecond);
    }
    if(numFirst==0 && (Math.round(Math.random()*100)<=50)){
        numFirst = numFirst = Math.round(Math.random() * maxFirst + 1);
    }
    if(numSecond==0 && (Math.round(Math.random()*100)<=50)){
        numSecond = numSecond = Math.round(Math.random() * maxFirst + 1);
    }
}
function plus(){
    switch(difficulty){
        case "Easy": randomNumbers(0, 10, 0, 10);
        break;
        case "Normal": randomNumbers(10, 90, 10, 90);
        break;
        case "Hard": randomNumbers(200, 799, 10, 90);
        break;
    }
    document.getElementById("task").innerHTML = numFirst + " + " + numSecond + " = ";
    type = "+";
    answer = numFirst + numSecond;
    console.log(answer);
}
function minus(){
    switch(difficulty){
        case "Easy": randomNumbers(5, 15, 0, 10);
        break;
        case "Normal": randomNumbers(10, 90, 5, 95);
        break;
        case "Hard": randomNumbers(300, 699, 10, 90);
        break;
    }
    if(numFirst<numSecond){
        let temp = numFirst;
        numFirst = numSecond;
        numSecond = temp;
    }
    document.getElementById("task").innerHTML = numFirst + " - " + numSecond + " = ";
    type = "-";
    answer = numFirst - numSecond;
    console.log(answer);
}

function multiplication(){
    switch(difficulty){
        case "Easy": randomNumbers(0, 10, 0, 10);
        break;
        case "Normal": randomNumbers(10, 90, 0, 9);
        break;
        case "Hard": randomNumbers(200, 799, 10, 90);
        break;
    }
    document.getElementById("task").innerHTML = numFirst + " * " + numSecond + " = ";
    type = "*";
    answer = numFirst * numSecond;
    console.log(answer);
}

function division(){
    switch(difficulty){
        case "Easy": randomNumbers(1, 9, 0, 10);
        break;
        case "Normal": randomNumbers(2, 8, 0, 20);
        break;
        case "Hard": randomNumbers(10, 89, 1, 9);
        break;
    }
    let finalFirstNum = numFirst * numSecond;
    if(finalFirstNum < 100  && difficulty == "Hard"){
        return division();
    }
    answer = finalFirstNum / numFirst;
    document.getElementById("task").innerHTML = finalFirstNum + " ÷ " + numFirst + " = ";
    type = "/";
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
    document.getElementById("f").innerHTML = difficulties[level];
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
            document.getElementById("nextLevelButton").classList.add("d-none");
            document.getElementById("playAgainButton").classList.remove("d-none");
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
document.addEventListener('keydown', (event) => {
    var button = event.key;
    for(let i = 0; i< buttons.length; i++){
        if(buttons[i] == button){
            document.getElementById(button).classList.add("active");
            setTimeout(()=>{
            document.getElementById(button).classList.remove("active");
            sound(1);
        }, 150);
        if(!document.getElementById("gamesn").classList.contains("d-none"))
            switch(button){
                case "+": plus();
                break;
                case "-": minus();
                break;
                case "*": multiplication();
                break;
                case "/": division();
                break;
                case "Enter": checkAnswer();
                break;
                case "Backspace": backspace();
                break;
                case "f": levelSwitch();
                break;
                case "c": clearInput();
                break;
                default: numeros(button);
            }   
        } 
    }
}, false);