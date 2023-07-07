let home;
let game;
let end
function set() {
    home = document.getElementById("homesn");
    game = document.getElementById("gamesn");
    end = document.getElementById("endsn");
}

function homeMenu(){
    set()
    game.classList.add("d-none");
    home.classList.remove("d-none");
    end.classList.add("d-none");
}
function gameStart(){
    set()
    points = 0;
    rounds = 0;
    level = 0;
    difficulty = difficulties[level];
    document.getElementById("levelButton").innerHTML = difficulties[level];
    document.getElementById("nextLevel").classList.remove("d-none");
    document.getElementById("playAgain").classList.add("d-none");
    game.classList.remove("d-none");
    home.classList.add("d-none");  
    end.classList.add("d-none");
    randomTask();
}
function nextLevelF() {
    set()
    levelSwitch();
    game.classList.remove("d-none");
    home.classList.add("d-none");  
    end.classList.add("d-none");

}
function back() {
    set()
    game.classList.add("d-none");
    home.classList.remove("d-none");
    end.classList.add("d-none");
}