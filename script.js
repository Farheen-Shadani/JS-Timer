let isTimerRunning = false;
let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

let managingTimerDisplay = () => {

    document.querySelector("#timeUp").style.display = "none";
    document.querySelector("#time").style.display = "block";
    document.querySelector("#buttons").style.display = "flex";

    hours = 0;
    minutes = 0;
    seconds = 0;

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    document.querySelector(".hours").value = hours;
    document.querySelector(".minutes").value = minutes;
    document.querySelector(".seconds").value = seconds;
}

managingTimerDisplay();

let startTimerWatch = () => {

    hours = document.querySelector(".hours").value;
    minutes = document.querySelector(".minutes").value;
    seconds = document.querySelector(".seconds").value;

    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        minutes = (minutes < 10 ? "0" : "") + minutes;
    }
    if (minutes < 0) {
        minutes = 59;
        hours--;
        hours = (hours < 10 ? "0" : "") + hours;
    }
    seconds = (seconds < 10 ? "0" : "") + seconds;
    if (hours == 0 && minutes == 0 && seconds == 0) {
        stopTimer();
        document.querySelector("#timeUp").style.display = "flex";
        document.querySelector("#time").style.display = "none";
        document.querySelector("#buttons").style.display = "none";
    }

    document.querySelector(".hours").value = hours;
    document.querySelector(".minutes").value = minutes;
    document.querySelector(".seconds").value = seconds;
}

let startTimer = () => {
    if (isTimerRunning == false) {
        timer = setInterval(startTimerWatch, 1000);
        isTimerRunning = true;
    }
}

let stopTimer = () => {
    clearInterval(timer);
    isTimerRunning = false;
}

let resetTimer = () => {
    stopTimer();
    managingTimerDisplay();
}