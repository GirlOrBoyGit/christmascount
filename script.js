var clicks = 0;
var refreshRate = 100; //time in milliseconds
var currentYearPrefix = 21;

function updateTime() {
  let currentTime = new Date();

  const christmasDate = new Date('12/25/20' + currentYearPrefix) //2021-2022 Copyright, GirlOrBoy

  let milliseconds;
  let days;
  let hours;
  let minutes;
  let seconds;

  milliseconds = Math.abs(currentTime - christmasDate);
  days = Math.floor(milliseconds / (1000 * 60 * 60 * 24)); 
  hours = Math.floor(milliseconds / (1000 * 60 * 60));
  minutes = Math.floor(milliseconds / (1000 * 60)); 
  seconds = Math.floor(milliseconds / (1000));



  var formattedHours = hours % 24
  var formattedMinutes = minutes % 60
  var formattedSeconds = seconds % 60

  const fullDays = (days + " days");
  const fullHours = (hours + " hours");
  const fullMinutes = (minutes + " minutes");
  const fullSeconds = (seconds + " seconds");
  const fullMilliseconds = (milliseconds + " milliseconds");
  const fullTime = (days + " days " + formattedHours + " hours " + formattedMinutes + " minutes " + formattedSeconds + " seconds.") //MAIN FORMAT

  var ft = document.getElementById("fullTime")
  var fd = document.getElementById("days")
  var fh = document.getElementById("hours")
  var fmin = document.getElementById("minutes")
  var fs = document.getElementById("seconds")
  var fmill = document.getElementById("milliseconds")

  ft.innerHTML = fullTime
  fd.innerHTML = fullDays
  fh.innerHTML = fullHours
  fmin.innerHTML = fullMinutes
  fs.innerHTML = fullSeconds
  fmill.innerHTML = fullMilliseconds

  if (seconds <= 0) {
    currentYearPrefix++;
  }

  setTimeout(updateTime, refreshRate);

  document.addEventListener('click', function() {
    clicks++;
    if (clicks == 1) {
      ft.style.display = "none"
      fd.style.display = "block"
    }
    else if (clicks == 2) {
      fd.style.display = "none"
      fh.style.display = "block"
    }
    else if (clicks == 3) {
      fh.style.display = "none"
      fmin.style.display = "block"
    }
    else if (clicks == 4) {
      fmin.style.display = "none"
      fs.style.display = "block"
    }
    else if (clicks == 5) {
      fs.style.display = "none"
      fmill.style.display = "block"
    }
    else {
      clicks = 0;
      fmill.style.display = "none"
      ft.style.display = "block"
    }
  })
  
}

updateTime();
