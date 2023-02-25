
// CDN - Conten Delivery Network

// console.log("Work with ", moment);

const daysElement = document.querySelector("#timer-days-value");
const hoursElement = document.querySelector("#timer-hours-value");
const minutesElement = document.querySelector("#timer-minutes-value");
const secondsElement = document.querySelector("#timer-seconds-value");

const startCourseDateTime = moment("01-03-2023 12:54:0", "DD-MM-YYYY HH:mm:");
const intervalCancelToken = setInterval(countdown, 1000);

function countdown(){
    const dateNow = moment();
    // const diffDate = startCourseDateTime.diff(dateNow);
    // console.log(diffDate);

    const days = startCourseDateTime.diff(dateNow, "days");
    const hours = startCourseDateTime.diff(dateNow.add(days, "days"), "hours");
    const minutes = startCourseDateTime.diff(
        dateNow.add(hours, "hours"), 
        "minutes"
    );

    const seconds = startCourseDateTime.diff(
        dateNow.add(minutes, "minutes"),
         "seconds"
         );

    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
// как цвет добавить 
    if([days, hours, minutes, seconds]
     .every(element => element <= 0)){
        clearInterval(intervalCancelToken);
        [daysElement,hoursElement, minutesElement, secondsElement].forEach(element => {
            element.style.color = "red";
        })
     }
}

// setInterval(countdown, 1000);

// countdown();

//NPM - Node Package Manager
