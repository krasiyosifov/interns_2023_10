function homeMenu(){
    let home = document.getElementById("homesn");
    let game = document.getElementById("gamesn");
    let end = document.getElementById("endsn");
    game.classList.add("d-none");
    home.classList.remove("d-none");
    end.classList.add("d-none");
}
function gameStart(){
    let home = document.getElementById("homesn");
    let game = document.getElementById("gamesn");
    let end = document.getElementById("endsn");
    game.classList.remove("d-none");
    home.classList.add("d-none");  
    end.classList.add("d-none");
    randomTask();
}
function playAgain() {
    points = 0;
    rounds = 0;
    let home = document.getElementById("homesn");
    let game = document.getElementById("gamesn");
    let end = document.getElementById("endsn");
    game.classList.remove("d-none");
    home.classList.add("d-none");  
    end.classList.add("d-none");
    randomTask();
}
function back() {
    let home = document.getElementById("homesn");
    let game = document.getElementById("gamesn");
    let end = document.getElementById("endsn");
    game.classList.remove("d-none");
    home.classList.add("d-none");
    end.classList.remove("d-none");
}