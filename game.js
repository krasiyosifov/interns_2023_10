let difficulties = ["easy", "normal", "hard"];
let difficulty = difficulties[0];
let points = 0;
let error;
let numFirst;
let numSecond;
function randomNumbers(num){
    numFirst = Math.floor(Math.random()*num);
    numSecond = Math.floor(Math.random()*num);
}

function getNumbers(){
    switch(difficulty){
        case "easy": randomNumbers(10);
        break;
        case "normal": randomNumbers(100);
        break;
        case "hard": randomNumbers(1000);
    }
    console.log(numFirst);
    console.log(numSecond);
}

function plus(){
    getNumbers();
    document.getElementById("task").innerHTML = numFirst + " + " + numSecond + " = ";
}