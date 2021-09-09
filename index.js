let boom = document.getElementById("boomSound")
let clap = document.getElementById("clapSound")
let hihat = document.getElementById("hihatSound")
let kick = document.getElementById("kickSound")
let openhat = document.getElementById("openhatSound")
let ride = document.getElementById("rideSound")
let snare = document.getElementById("snareSound")
let tink = document.getElementById("tinkSound")
let tom = document.getElementById("tomSound")

const boomButton = document.getElementById("boom")
const clapButton = document.getElementById("clap")
const hihatButton = document.getElementById("hihat")
const kickButton = document.getElementById("kick")
const openhatButton = document.getElementById("openhat")
const rideButton = document.getElementById("ride")
const snareButton = document.getElementById("snare")
const tinkButton = document.getElementById("tink")
const tomButton = document.getElementById("tom")



// function keydown(event) {
//     let eventKey = event.key;
//     let eventKeyCode = event.keyCode;
//     let keyCode = event.code;
//     console.log("event key: ", eventKey);
//     console.log("event key code: ", eventKeyCode);
//     console.log("event code: ", keyCode);
// }

document.addEventListener('keydown', (event) => {
    let code = event.code;

    if (code == "KeyA") {
        boom.pause();
        boom.currentTime = 0;
        boom.play();
    }
    else if (code == "KeyZ") {
        clap.pause();
        clap.currentTime = 0;
        clap.play();
    }
    else if (code == "KeyX") {
        hihat.pause();
        hihat.currentTime = 0;
        hihat.play();
    }
    else if (code == "KeyC") {
        kick.pause();
        kick.currentTime = 0;
        kick.play();
    }
    else if (code == "KeyD") {
        openhat.pause();
        openhat.currentTime = 0;
        openhat.play();
    }
    else if (code == "KeyE") {
        ride.pause();
        ride.currentTime = 0;
        ride.play();
    }
    else if (code == "KeyS") {
        snare.pause();
        snare.currentTime = 0;
        snare.play();
    }
    else if (code == "KeyW") {
        tink.pause();
        tink.currentTime = 0;
        tink.play();

    } else if (code == "KeyQ") {
        tom.pause();
        tom.currentTime = 0;
        tom.play();
    }
});

boomButton.addEventListener("click", () => {
    boom.pause();
    boom.currentTime = 0;
    boom.play();
});
clapButton.addEventListener("click", () => {
    clap.pause();
    clap.currentTime = 0;
    clap.play();
});
hihatButton.addEventListener("click", () => {
    hihat.pause();
    hihat.currentTime = 0;
    hihat.play();
});
kickButton.addEventListener("click", () => {
    kick.pause();
    kick.currentTime = 0;
    kick.play();
});
openhatButton.addEventListener("click", () => {
    openhat.pause();
    openhat.currentTime = 0;
    openhat.play();
});
rideButton.addEventListener("click", () => {
    ride.pause();
    ride.currentTime = 0;
    ride.play();
});
snareButton.addEventListener("click", () => {
    snare.pause();
    snare.currentTime = 0;
    snare.play();
});
tinkButton.addEventListener("click", () => {
    tink.pause();
    tink.currentTime = 0;
    tink.play();
});
tomButton.addEventListener("click", () => {
    tom.pause();
    tom.currentTime = 0;
    tom.play();
});







