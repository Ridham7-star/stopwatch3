
let running = false;
let timer;
let seconds = 0;

function formatTime(sec) {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const secs = String(sec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`; // fixed template literal
}

function updateDisplay() {
    document.getElementById("display").textContent = formatTime(seconds);
}

function start() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function stop() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

function reset() {
    stop();
    seconds = 0;
    updateDisplay();
}

// Initialize display when page loads
document.addEventListener('DOMContentLoaded', updateDisplay);
