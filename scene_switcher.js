let home;
let game;
let end
let prog;
let prog1;
function set() {
    home = document.getElementById("homesn");
    game = document.getElementById("gamesn");
    end = document.getElementById("endsn");
    prog = document.getElementById("progressP");
    prog1 = document.getElementById("progressN");
}

function homeMenu(){
    set()
    game.classList.add("d-none");
    home.classList.remove("d-none");
    end.classList.add("d-none");
}
function gameStart(){
    set()
    if (mode == 2) {
        if (mode == 2) {
            prog.classList.add("d-none");
            prog1.classList.add("d-none");
        }
    }
    prog.classList.remove("d-none");
    prog1.classList.remove("d-none");
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
    document.getElementById("playTime").innerHTML = "Total play time: " + outTime
}
function back() {
    set()
    game.classList.add("d-none");
    home.classList.remove("d-none");
    end.classList.add("d-none");
}