function normalMode() {
    let modeButton = document.getElementById("modesButton").innerHTML = "Normal";
    let prog = document.getElementById("progressClass");

    prog.classList.remove("d-none");
}

function extreamMode() {
    let modeButton = document.getElementById("modesButton").innerHTML = "Extream";
    let prog = document.getElementById("progressClass");

    prog.classList.add("d-none");
}