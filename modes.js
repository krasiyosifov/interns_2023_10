function normalMode() {
    let modeButton = document.getElementById("modesButton").innerHTML = "Normal Mode";
    let prog = document.getElementById("progressClass");

    prog.classList.remove("d-none");
}

function extreamMode() {
    let modeButton = document.getElementById("modesButton").innerHTML = "Extream Mode";
    let prog = document.getElementById("progressClass");

    prog.classList.add("d-none");
}