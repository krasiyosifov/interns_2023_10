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
    console.log("first: "+ numFirst);
    console.log("second: "+ numSecond);
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
        level++;
    } else {
        level = 0;
    }
    difficulty = difficulties[level];
    console.log(difficulties[level]);
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
    switch(Math.round(Math.random()*4+1)){
        case 1: plus();
        break;
        case 2: minus();
        break;
        case 3: multiplication();
        break;
        case 4: division();
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

document.addEventListener('keypress', (event) => {
    var name = event.key;
    if (name === "1") {
        document.getElementById("one").click();
    }
    console.log(name);
}, false);
    

