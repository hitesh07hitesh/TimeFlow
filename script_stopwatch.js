let startTime = 0;
let isRunning = false;
let interval;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStopButton");
const resetButton = document.getElementById("resetButton");

function formatTime(ms) {
    const date = new Date(ms);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
    const currentTime = new Date() - startTime;
    display.textContent = formatTime(currentTime);
}

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        startStopButton.textContent = "Start";
    } else {
        startTime = new Date() - (startTime ? startTime : 0);
        interval = setInterval(updateDisplay, 1000);
        startStopButton.textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    display.textContent = "00:00:00";
    startStopButton.textContent = "Start";
    isRunning = false;
    startTime = 0;
}

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);