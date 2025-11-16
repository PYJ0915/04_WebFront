// window.setTimeOut()

document.getElementById("btn1").addEventListener("click", () => {

  window.setTimeout(function() {

    alert("해당 메세지는 3초 후 출력됩니다.")

  }, 3000);
});

// window.setInterval()

// 현재 시간을 문자열로 반환하는 함수
function currentTime() {

  const now = new Date();

  let hour = now.getHours(); // 시
  let min = now.getMinutes(); // 분
  let sec = now.getSeconds(); // 초
  // 디지털 시계의 모양으로 맞추기 위해 01, 02 .. 처럼 표현

  if(hour < 10) hour = "0" + hour;
  if(min < 10) min = "0" + min;
  if(sec < 10) sec = "0" + sec;
 
  return hour + " : " + min + " : " + sec;
}

let interval; // setInterval을 저장하기 위한 변수

function clockFn() {

  const clock = document.getElementById("clock");
  clock.innerText = currentTime();

interval = setInterval(() => {
  clock.innerText = currentTime();
}, 1000);

}

clockFn();

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
});
