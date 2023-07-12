let difficulties = ["Easy", "Normal", "Hard"];
let level = 0;
let difficulty = difficulties[0];
let type;
let points = 0;
let progressP = 0;
let progressN = 0;
let rounds = 0;
let myAnswer;
let answer = 0;
let numFirst = 0;
let numSecond = 0;
let soundOn = true;
let modalisShown = false;
let mode = 0;
let d = new Date();
let buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace", "Enter", "+", "-", "*", "/", "f", "c", "Escape"];

function switchMode(num) {
    mode = num;
}

function switchDifficulty () {
    switch(difficulty){
        case "Easy": randomNumbers(0, 10, 0, 10);
        break;
        case "Normal": randomNumbers(10, 90, 0, 9);
        break;
        case "Hard": randomNumbers(200, 799, 10, 90);
        break;
    }
}

function switchtype() {
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

function levelSwitch() {
    reset();
    if (level != 2) {
        level++
    } else {
        level = 0;
    }
    difficulty = difficulties[level];
    document.getElementById("f").innerHTML = difficulties[level];
    switchtype()
    clearInput();
}

function plus(){
    switchDifficulty ()
    document.getElementById("task").value = numFirst + " + " + numSecond + " = ";
    type = "+";
    answer = numFirst + numSecond;
    console.log(answer);
}

function minus(){
    switchDifficulty ()
    if(numFirst<numSecond){
        let temp = numFirst;
        numFirst = numSecond;
        numSecond = temp;
    }
    document.getElementById("task").value = numFirst + " - " + numSecond + " = ";
    type = "-";
    answer = numFirst - numSecond;
    console.log(answer);
}

function multiplication(){
    switchDifficulty ()
    document.getElementById("task").value = numFirst + " * " + numSecond + " = ";
    type = "*";
    answer = numFirst * numSecond;
    console.log(answer);
}

function division(){
    switchDifficulty ()
    let finalFirstNum = numFirst * numSecond;
    if(finalFirstNum < 100  && difficulty == "Hard"){
        return division();
    }
    answer = finalFirstNum / numFirst;
    document.getElementById("task").value = finalFirstNum + " ÷ " + numFirst + " = ";
    type = "/";
    console.log(answer);
}

function closeModal(){
    modalisShown = false;
}

function openResultModal(){
    stopTimer()
    modalisShown = true;
    $('#gameResult').modal('show');
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

function reset() {
    rounds=0;
    points=0;
    progressN=0;
    progressP=0;
    let gameImage = document.getElementById("gameSceneDog");
    gameImage.src = './images/transition dog.png';
    UpdateProgressBar();
    addGame();
    stopTimer();
}

function result() {
    document.getElementById("result").innerHTML = "Result " + points + "/5";
    let endImage = document.getElementById("endSceneDog");
    checkImageAnswers(points >= 3 ? 'happy' : 'sad', endImage);
    openResultModal();
}

function randomNumbers(minFirst, maxFirst, minSecond, maxSecond){
    numFirst = Math.round(Math.random() * maxFirst + minFirst);
    numSecond = Math.round(Math.random() * maxSecond + minSecond);
    if(numFirst==0 && numSecond==0){
        randomNumbers(minFirst, maxFirst, minSecond, maxSecond);
    }
    if(numFirst==0 && (Math.round(Math.random()*100)<=50)){
        numFirst = Math.round(Math.random() * maxFirst + 1);
    }
    if(numSecond==0 && (Math.round(Math.random()*100)<=50)){
        numSecond = Math.round(Math.random() * maxFirst + 1);
    }
}

function checkAnswer(){
    rounds++;
    addRound();
    let userAnswer = document.getElementById("userInput").value;
    let gameImage = document.getElementById("gameSceneDog")
    if(userAnswer != "" && answer == Number(userAnswer)){
        points++;
        checkImageAnswers('happy', gameImage);
    }else{
        if (mode == 2) {
            result();
            document.getElementById("result").innerHTML = "Result " + points;
            progressN += 100;
        } else {
            progressN += 20;
        }
    }
    addAnswer(answer, userAnswer)
    if (answer !== Number(userAnswer)) {
        checkImageAnswers('sad', gameImage);
    }
    if(level == 2){
        document.getElementById("nextLevelBtn").classList.add("d-none")
    }else{
        document.getElementById("nextLevelBtn").classList.remove("d-none")
    }

    if(rounds == 5 && mode != 2){ 
        result();
        rounds=0;
        points=0;
    }

    switchtype()
    clearInput();
    UpdateProgressBar();
}

function checkImageAnswers(answer,imgSrc) {
    if ((imgSrc.src === './images/sad dog.png' && answer === 'sad') || (imgSrc.src === './images/mate.png' && answer === 'happy')) {
        return;
    }
    return answer === 'happy' ? imgSrc.src = './images/mate.png' : imgSrc.src = './images/sad dog.png'
}


function randomTask(){
    let a = d.getSeconds();
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

function UpdateProgressBar(){
    let width;
    width = progressP + "%";
    document.getElementById("progressP").style.width = width;
    width = progressN + "%";
    document.getElementById("progressN").style.width = width;
}

function sound(num) {
    var sound;
    if (soundOn) {
        switch(num){
            case 1: sound = new Audio('sounds/click_new.mp3')
            break;
            case 2: sound = new Audio('sounds/fade_in_new.mp3')
            break;
            case 3: sound = new Audio('sounds/fade_out_new.mp3')
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
    
    if(!$('#gameResult').hasClass('show') && !modalisShown && !document.getElementById("gamesn").classList.contains("d-none")){
        for(let i = 0; i< buttons.length; i++){
            if(buttons[i] == button){
                document.getElementById(button).classList.add("active");
                setTimeout(()=>{
                    document.getElementById(button).classList.remove("active");
                    sound(1);
                }, 150);
            }
        }
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
}, false);

document.addEventListener('keydown', (event) => {
    var button = event.key;
        switch(button){
            case "Escape": homeMenu();
            break;
        }  
}, false);