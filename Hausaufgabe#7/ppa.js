// const secondsElement = document.querySelector("#timer-seconds-value");
// const stopElement = document.querySelector("#end")

// const startCourseTime = moment(
//      "01-03-2023 20:00:00",
//      "DD-MM-YYYY HH:mm:ss"
// );

// function countdown(){
//     const timeNow = moment();
//     const diffTime = startTime.diff(timeNow)
//     console.log(diffTime);

//     const seconds = startCourseTime.diff(timeNow.add(minutes, "minutes"),
//      "seconds"
//      );
//     secondsElement.innerText = seconds;

// }

// 2 сработало
const btnStart = document.querySelector('#start')
const btnStop = document.querySelector('#stop')
const time = document.querySelector('h1')
const timer = document.querySelector('img')
time.innerHTML = 60
let stop = false

timer.classList.add('timerStop')
const animate = () => {
    timer.classList.add('timerStart')
    timer.classList.remove('timerStop')

}

const animateStop = () => {
    timer.classList.remove('timerStart')
    timer.classList.add('timerStop')
}

btnStart.onclick = () => {
    stop = false


        const timer = setInterval(() => {
            if (stop) {
                animateStop()
                clearInterval(timer)
            } else  if(time.innerHTML > 0) {
                time.innerHTML--
                animate()
            }  else {
                animateStop()
            }
            
        },1000)
    
}

btnStop.onclick = () => {
    stop = true 
    start = false
    
}