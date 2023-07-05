function game(){
    let home = document.getElementById("homesn");
    let game = document.getElementById("gamesn");
    game.classList.remove("d-none");
    home.classList.add("d-none");
}
function gameStart(){
    let home = document.getElementById("homesn");
    let game = document.getElementById("endsn");
    game.classList.add("d-none");
    home.classList.remove("d-none");
}