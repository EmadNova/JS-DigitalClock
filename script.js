let hour = document.querySelector("#hours");
let minute = document.querySelector("#minutes");
let second = document.querySelector("#seconds");

function displayTime () {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if (sec <= 9) {
        second.textContent = "0" + sec;
    }
    if (sec > 9) {
        second.textContent = sec;
    }
    if (min <= 9) {
        minute.textContent = "0" + min;
    }
    if (min > 9) {
        minute.textContent = min;
    }
    if (hr <= 9) {
        hour.textContent = "0" + hr;
    }
    if (hr > 9) {
        hour.textContent = hr;
    }
}

setInterval(displayTime, 10)