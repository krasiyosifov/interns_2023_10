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
}
function endGame(){
    set()
    points = 0;
    rounds = 0;
    level = 0;
    game.classList.add("d-none");
    end.classList.remove("d-none");
    setStats()
}
function back() {
    set()
    game.classList.add("d-none");
    home.classList.remove("d-none");
    end.classList.add("d-none");
}