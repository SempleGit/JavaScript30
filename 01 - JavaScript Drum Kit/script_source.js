
window.addEventListener("keydown", playKey);
window.addEventListener("click", playClick);

function playAudio(audio) {
    audio.currentTime = 0;
    audio.play();
}

function playKey(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    playAudio(audio);
    const currentKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
    currentKey.classList.add("playing");

}; 

function playClick(e) {
    if(e.target.parentElement.className === "key") {
        e.target.parentElement.classList.add("playing");
        const audioKey = e.target.parentElement.getAttribute("data-key");
        const audio = document.querySelector(`audio[data-key="${audioKey}"]`);
        playAudio(audio);
    }
}



function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}


const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));