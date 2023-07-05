function homeMenu(){
    let home = document.getElementById("homesn");
    let game = document.getElementById("gamesn");
    game.classList.add("d-none");
    home.classList.remove("d-none");
}
function gameStart(){
    let home = document.getElementById("homesn");
    let game = document.getElementById("gamesn");
    game.classList.remove("d-none");
    home.classList.add("d-none");  
    randomTask();
}