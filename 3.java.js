// JavaScript (in script.js file)
let startTime;
let elapsedTime;
let intervalId;
let lapTimes = [];

function start() {
    startTime = Date.now();
    intervalId = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").innerHTML = timeToString(elapsedTime);
    }, 10);
    showButton("PAUSE");
}

function pause() {
    clearInterval(intervalId);
    showButton("PLAY");
}

function reset() {
    startTime = 0;
    elapsedTime = 0;
    lapTimes = [];
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("lap-times").innerHTML = "";
    showButton("PLAY");
}

function showButton(buttonType) {
    if (buttonType === "PLAY") {
        document.getElementById("playButton").style.display = "inline-block";
        document.getElementById("pauseButton").style.display = "none";
    } else if (buttonType === "PAUSE") {
        document.getElementById("playButton").style.display = "none";
        document.getElementById("pauseButton").style.display = "inline-block";
    }
}

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function recordLapTime() {
    let lapTime = timeToString(elapsedTime);
    lapTimes.push(lapTime);
    let lapList = document.getElementById("lap-times");
    let lapListItem = document.createElement("li");
    lapListItem.textContent = lapTime;
    lapList.appendChild(lapListItem);
}

document.getElementById("playButton").addEventListener("click", start);
document.getElementById("pauseButton").addEventListener("click", pause);
document.getElementById("resetButton").addEventListener("click", reset);