//Paint current date
const currentDate = document.querySelector(".content_top");

function paintCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateToday = date.getDate();

  currentDate.innerText = `${String(year)}. ${String(month).padStart(
    2,
    "0"
  )}. ${String(dateToday).padStart(2, "0")}`;
}
paintCurrentDate();



//Timer
const timer = document.querySelector(".content_exr");
//timer 클릭되면
function extractIndex(){
  
}
//id에서 index 추출해서

//해당 index의 time을 변경
const exrTimerTime = document.querySelector("#exr_timer_time_" + index);
const exrTimerBtn = document.querySelector("#exr_timer_" + index);
let run = 0;

function startTimer(clickedTime) {
  const date = new Date();
  const sumOfTime = parseInt((date.getTime() - clickedTime) / 1000);
  const hours = parseInt(sumOfTime / 3600);
  const minutes = parseInt((sumOfTime % 3600) / 60);
  const seconds = parseInt((sumOfTime % 3600) % 60);

  exrTimerTime.innerText = `${String(hours).padStart(2, "0")} : ${String(
    minutes
  ).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
}

function paintTime(event) {
  let timerInterval;
  if (exrTimerBtn.innerText == "정지") {
    exrTimerBtn.innerText = "재개";
    clearInterval(timerInterval);
  } else {
    exrTimerBtn.innerText = "정지";
    const date = new Date();
    const clickedTime = date.getTime();
    timerInterval = setInterval(function () {
      startTimer(clickedTime);
    }, 1000);
    console.log(timerInterval);
  }
}

exrTimerBtn.addEventListener("click", paintTime);
