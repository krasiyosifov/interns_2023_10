let difficulties = ["easy", "normal", "hard"];
let difficulty = difficulties[0];
let points = 0;
let error;
let numFirst = 0;
let numSecond = 0;
// hide scenes
document.getElementById("homesn").classList.add("d-none");
document.getElementById("endsn").classList.add("d-none");


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
    let res = numFirst + numSecond;
    document.getElementById("task").innerHTML = numFirst + " + " + numSecond + " = " + res;
}
function minus(){
    getNumbers(true);
    document.getElementById("task").innerHTML = numFirst + " - " + numSecond + " = " + (numFirst-numSecond);
}
function numeros(num){
    let task = document.getElementById("task").append(num);
}