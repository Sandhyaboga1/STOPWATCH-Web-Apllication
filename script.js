let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let lapCount = 1;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {
    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");

    display.textContent = `${h}:${m}:${s}`;
}

function stopwatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

document.getElementById("start").addEventListener("click", () => {
    if (timer !== null) return;
    timer = setInterval(stopwatch, 1000);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCount = 1;

    updateDisplay();
    laps.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
    if (timer === null) return;

    const li = document.createElement("li");
    li.textContent = `Lap ${lapCount}: ${display.textContent}`;
    laps.appendChild(li);

    lapCount++;
});

updateDisplay();
