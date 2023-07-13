let gameHour = 0;
let gameMinute = 0;
let gameSecond = 0;
let gameCount = 0;
let gameDura;

function resetGameTimer(){
    gameHour = 0;
    gameMinute = 0;
    gameSecond = 0;
    gameCount = 0;
}

function startGameTimer(){
    timer = true;
    gameDuration();
}

function stopGameTimer(){
    timer = false;
}

function gameDuration() {
    if (timer) {
        gameCount++;
 
        if (gameCount == 100) {
            gameSecond++;
            gameCount = 0;
        }
 
        if (gameSecond == 60) {
            gameMinute++;
            gameSecond = 0;
        }
 
        if (gameMinute == 60) {
            gameHour++;
            gameMinute = 0;
            gameSecond = 0;
        }
 
        let hrString = gameHour;
        let minString = gameMinute;
        let secString = gameSecond;
        let gameCountString = gameCount;
 
        if (gameHour < 10) {
            hrString = "0" + hrString;
        }
 
        if (gameMinute < 10) {
            minString = "0" + minString;
        }
 
        if (gameSecond < 10) {
            secString = "0" + secString;
        }
 
        if (gameCount < 10) {
            gameCountString = "0" + gameCountString;
        }
        gameDura = hrString + " " + minString + " " + secString;
        gameDura = gameDura.replaceAll("0", "");
        if(gameSecond == 0){
            gameDura = "." + gameCountString;
        }
        gameDura += "s";
        
        setTimeout(gameDuration, 10);
    }
}