const countdown = document.querySelector('.countdown');
let launchDate = new Date(1606514400000);
const interval = setInterval(()=>{
    updateTimer();
},1000);
updateTimer();
function updateTimer() {
    let currentDate = new Date();
    if(currentDate > launchDate) {
        launchDate.setFullYear(currentDate.getFullYear()+1);
    }
    let diffSeconds = Math.floor((launchDate.getTime() - currentDate.getTime()) / 1000);
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    days = Math.floor(diffSeconds / (3600 * 24));
    diffSeconds -= days * 3600 * 24;
    hours = Math.floor(diffSeconds / 3600);
    diffSeconds -= hours * 3600;
    minutes = Math.floor(diffSeconds / 60);
    diffSeconds -= minutes * 60;
    seconds = diffSeconds;
    let days_text = ``;
    let hours_text = ``;
    let minutes_text = ``;
    let seconds_text = ``;
    if(days > 1 || days == 0) {
        days_text = `${days} Days`;
    }
    else {
        days_text = `${days} Day`;
    }

    if(hours > 1 || hours == 0) {
        hours_text = `${hours} Hours`;
    }
    else {
        hours_text = `${hours} Hour`;
    }

    if(minutes > 1 || minutes == 0) {
        minutes_text = `${minutes} Minutes`;
    }
    else {
        minutes_text = `${minutes} Minute`;
    }

    if(seconds > 1 || seconds == 0) {
        seconds_text = `${seconds} Seconds`;
    }
    else {
        seconds_text = `${seconds} Second`;
    }
    countdown.innerHTML = `
        <div class="days">${days_text}</div>
        <div class="hours">${hours_text}</div>
        <div class="minutes">${minutes_text}</div>
        <div class="seconds">${seconds_text}</div>
    `;
}