document.getElementById("playButton").addEventListener(‘click’, ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

function pauseTimer(){
    document.getElementById(‘pauseTimer’).addEventListener(‘click’, ()=>{
        clearInterval(int);
    });
}