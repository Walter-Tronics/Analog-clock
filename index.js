let hourHand = document.querySelector('#hourHand'),
minuteHand = document.querySelector('#minuteHand'),
secondHand = document.querySelector('#secondHand'),
curTime;

//Setting the time function
function setTime() {
    curTime = new Date();

    //set a new date and assign the degree to the hour hand
    hourHand.style.transform = `rotate(${(curTime.getHours() * 30) + (curTime.getMinutes() / 2)}deg)`;

    //set a new date and assign the degree to the minute hand
    minuteHand.style.transform = `rotate(${curTime.getMinutes() * 6}deg)`;

    //set a new date and assign the degree to the second hand
    secondHand.style.transform = `rotate(${curTime.getSeconds() * 6}deg)`;
}

//Calling the time function
setInterval(setTime, 1000);