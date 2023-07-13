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
    reset()
    level = 0;
    difficulty = difficulties[level];
    document.getElementById("f").innerHTML = difficulties[level];
    game.classList.remove("d-none");
    home.classList.add("d-none");  
    end.classList.add("d-none");
    randomTask();
    startTimer();
}
function endGame(){
    set()
    points = 0;
    rounds = 0;
    level = 0;
    game.classList.add("d-none");
    end.classList.remove("d-none");
    setStats()
    document.getElementById("playTime").innerHTML = "Play time: " + outTime
    if(mode == 2){
        document.getElementById("totalGames").classList.add("d-none");
    }else{
        document.getElementById("totalGames").classList.remove("d-none");
    }
}
function back() {
    set()
    game.classList.add("d-none");
    home.classList.remove("d-none");
    end.classList.add("d-none");
}