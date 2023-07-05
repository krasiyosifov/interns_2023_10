let difficulties = ["easy", "normal", "hard"];
let difficulty = difficulties[0];
let type;
let points =0;
let error;
let myAnswer = "";
let answer = 0;
let numFirst = 0;
let numSecond = 0;

function randomNumbers(num, ssm){
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
        case "easy": randomNumbers(10, ssm);
        break;
        case "normal": randomNumbers(100, ssm);
        break;
        case "hard": randomNumbers(1000, ssm);
        break;
    }
    console.log("first: "+ numFirst);
    console.log("second: "+ numSecond);
}
function plus(){
    getNumbers(false);
    document.getElementById("task").innerHTML = numFirst + " + " + numSecond + " = ";
    type = "+";
}
function minus(){
    getNumbers(true);
    document.getElementById("task").innerHTML = numFirst + " - " + numSecond + " = ";
    type = "-";
}
function numeros(num){
    let add = document.getElementById("task").append(num);
    myAnswer = myAnswer + "" + num;
}

function muliplication(){
    console.log("multi");
}
function division(){
    console.log("div");
}
function clearInput(){
    let task = document.getElementById("task").innerHTML.substring(0, 8);
    document.getElementById("task").innerHTML = task;
    console.log(task);
    myAnswer = "";
}
function checkAnswer(){
    if (type == "+") {
       answer = numFirst + numSecond;
    } else if (type == "-") {
        answer = numFirst - numSecond;
    } else if (type == "*") {
        answer = numFirst * numSecond;
    } else if (type == "/") {
        answer = numFirst / numSecond;
    }
    if(answer == myAnswer){
        points++;
        if(points>=5) {
            document.getElementById("gamesn").classList.add("d-none");
            document.getElementById("endsn").classList.remove("d-none");
            points=0;
        }
    } 
    myAnswer = "";

    switch(type){
        case "+": plus();
        break;
        case "-": minus();
        break;
        // case "*": muliplication();
        // break;
        // case "/": division();
        // break;
    }
}

function randomTask(){
    switch(Math.round(Math.random()*4+1)){
        case 1: plus();
        break;
        case 2: minus();
        break;
        // case 3: muliplication();
        // break;
        // case 4: division();
        // break;
    }
}
