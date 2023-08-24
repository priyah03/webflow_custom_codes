!-- EXIT INTENT POPUP -->
<script>
const CookieService = {
    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = days ? '; expires=' + date.toUTCString() : '';
        document.cookie = name + '=' + (value || '')  + expires + ';';
    },
    getCookie(name) {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith(name))
            ?.split('=')[1];
        return cookieValue || null;
    }
};
const exitPopup = document.querySelector('[ms-code-popup="exit-intent"]');
const mouseEvent = e => {
    const shouldShowExitIntent =
        !e.toElement &&
        !e.relatedTarget &&
        e.clientY < 10;
    if (shouldShowExitIntent) {
        document.removeEventListener('mouseout', mouseEvent);
        exitPopup.style.display = 'flex';
        CookieService.setCookie('exitIntentShown', true, 30);
    }
};
if (!CookieService.getCookie('exitIntentShown')) {
    document.addEventListener('mouseout', mouseEvent);
    document.addEventListener('keydown', exit);
    exitPopup.addEventListener('click', exit);
}
</script>
<!-- :blue_heart: MEMBERSCRIPT #9 v0.1 :blue_heart: COUNTDOWN BY USER -->
<script>
// Step 1: Get the current date and time
const currentDate = new Date();
// Step 2: Calculate the new date and time based on the attribute values
const addTime = (date, unit, value) => {
  const newDate = new Date(date);
  switch (unit) {
    case 'hour':
      newDate.setHours(newDate.getHours() + value);
      break;
    case 'minute':
      newDate.setMinutes(newDate.getMinutes() + value);
      break;
    case 'second':
      newDate.setSeconds(newDate.getSeconds() + value);
      break;
    case 'millisecond':
      newDate.setMilliseconds(newDate.getMilliseconds() + value);
      break;
  }
  return newDate;
};
// Retrieve attribute values and calculate the new date and time
const hourAttr = document.querySelector('[ms-code-time-hour]');
const minuteAttr = document.querySelector('[ms-code-time-minute]');
const secondAttr = document.querySelector('[ms-code-time-second]');
const millisecondAttr = document.querySelector('[ms-code-time-millisecond]');
const countdownDateTime = localStorage.getItem('countdownDateTime');
let newDate;
if (countdownDateTime) {
  newDate = new Date(countdownDateTime);
} else {
  newDate = currentDate;
  if (hourAttr.hasAttribute('ms-code-time-hour')) {
    const hours = parseInt(hourAttr.getAttribute('ms-code-time-hour'));
    newDate = addTime(newDate, 'hour', isNaN(hours) ? 0 : hours);
  }
  if (minuteAttr.hasAttribute('ms-code-time-minute')) {
    const minutes = parseInt(minuteAttr.getAttribute('ms-code-time-minute'));
    newDate = addTime(newDate, 'minute', isNaN(minutes) ? 0 : minutes);
  }
  if (secondAttr.hasAttribute('ms-code-time-second')) {
    const seconds = parseInt(secondAttr.getAttribute('ms-code-time-second'));
    newDate = addTime(newDate, 'second', isNaN(seconds) ? 0 : seconds);
  }
  if (millisecondAttr.hasAttribute('ms-code-time-millisecond')) {
    const milliseconds = parseInt(millisecondAttr.getAttribute('ms-code-time-millisecond'));
    newDate = addTime(newDate, 'millisecond', isNaN(milliseconds) ? 0 : milliseconds);
  }
  localStorage.setItem('countdownDateTime', newDate);
}
// Step 4: Update the text of the elements to show the continuous countdown
const countdownElements = [hourAttr, minuteAttr, secondAttr, millisecondAttr];
const updateCountdown = () => {
  const currentTime = new Date();
  const timeDifference = newDate - currentTime;
  if (timeDifference > 0) {
    const timeParts = [
      Math.floor(timeDifference / (1000 * 60 * 60)) % 24, // Hours
      Math.floor(timeDifference / (1000 * 60)) % 60, // Minutes
      Math.floor(timeDifference / 1000) % 60, // Seconds
      Math.floor(timeDifference) % 1000, // Milliseconds
    ];
    // Update the text of the elements with the countdown values
    countdownElements.forEach((element, index) => {
      const timeValue = timeParts[index];
      if (index === 3) {
        element.innerText = timeValue.toString().padStart(2, '0').slice(0, 2); // Display only two digits for milliseconds
      } else {
        element.innerText = timeValue < 10 ? `0${timeValue}` : timeValue;
      }
    });
    // Update the countdown every 10 milliseconds
    setTimeout(updateCountdown, 10);
  } else {
    // Countdown has reached zero or has passed
    countdownElements.forEach((element) => {
      element.innerText = '00';
    });
    // Remove elements with ms-code-countdown="hide-on-end" attribute
    const hideOnEndElements = document.querySelectorAll('[ms-code-countdown="hide-on-end"]');
    hideOnEndElements.forEach((element) => {
      element.remove();
    });
    // JavaScript code to hide the element with class .coupon-wrap
    const couponElement = document.querySelector('.coupon-wrap');
    if (couponElement) {
    couponElement.style.display = 'none';
    }
  }
};
// Start the countdown
updateCountdown();
</script>
<!-- :blue_heart: MEMBERSCRIPT #8 v0.1 :blue_heart: SIMPLE COPY ELEMENT TO CLIPBOARD -->
<script>
// Step 1: Click the element with the attribute ms-code-copy="trigger"
const triggerElement = document.querySelector('[ms-code-copy="trigger"]');
triggerElement.addEventListener('click', () => {
  // Step 2: Copy text from the element with the attribute ms-code-copy="subject" to the clipboard
  const subjectElement = document.querySelector('[ms-code-copy="subject"]');
  const subjectText = subjectElement.innerText;
  // Create a temporary textarea element to facilitate the copying process
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = subjectText;
  document.body.appendChild(tempTextArea);
  // Select the text within the textarea and copy it to the clipboard
  tempTextArea.select();
  document.execCommand('copy');
  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);
});
</script>
