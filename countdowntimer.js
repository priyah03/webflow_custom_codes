Countdown Timer
*Note:
Timer wrapper ID: clockdiv
individual timer text block classes: (can be a combo as well)
.days
.hours
.minutes
.seconds
Place the below code before the body tag: footer.
————————————————————————————————————
<script>
function getTimeRemaining(endtime) {
 const total = Date.parse(endtime) - Date.parse(new Date());
 const seconds = Math.floor((total / 1000) % 60);
 const minutes = Math.floor((total / 1000 / 60) % 60);
 const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
 const days = Math.floor(total / (1000 * 60 * 60 * 24));
 return {
  total,
  days,
  hours,
  minutes,
  seconds
 };
}
function initializeClock(id, endtime) {
 const clock = document.getElementById(id);
 const daysSpan = clock.querySelector(‘.days’);
 const hoursSpan = clock.querySelector(‘.hours’);
 const minutesSpan = clock.querySelector(‘.minutes’);
 const secondsSpan = clock.querySelector(‘.seconds’);
 function updateClock() {
  const t = getTimeRemaining(endtime);
  daysSpan.innerHTML = t.days;
  hoursSpan.innerHTML = (‘0’ + t.hours).slice(-2);
  minutesSpan.innerHTML = (‘0’ + t.minutes).slice(-2);
  secondsSpan.innerHTML = (‘0’ + t.seconds).slice(-2);
  if (t.total <= 0) {
   clearInterval(timeinterval);
  }
 }
 updateClock();
 const timeinterval = setInterval(updateClock, 1000);
}
const deadline = new Date(“June 3 2021 21:30:00 GMT+0530”); initializeClock(‘clockdiv’, deadline);
</script>
