const dateInput = document.getElementById("dateInput");
const result = document.querySelector("#result");

dateInput.addEventListener("keyup", (e) => {

  if(dateInput.value.trim().length == 0) {

    result.innerText = "";

  }

  const regExp = /^[0-9]{4}-(0[1-9]|1[0-2])-([0][1-9]|[12][0-9]|3[01])$/;

  if(regExp.test(dateInput.value)) {

    result.innerText = "유효한 입력형식입니다.";
    result.style.color = "green";
    dateInput.style.border = "1px solid green";
    dateInput.style.outline = "none";

  } else {

    result.innerText = "형식이 올바르지 않습니다";
    result.style.color = "red";
    dateInput.style.border = "3px solid red";
    dateInput.style.outline = "none";

  }


});

function currentTime() {

  const time = new Date();

  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  if(hour < 10) hour = "0" + hour;
  if(min < 10) min = "0" + min;
  if(sec < 10) sec = "0" + sec;

  return hour + " : " + min + " : " + sec;
}

const now = document.getElementById("now");

setInterval(() => {
  now.innerText = currentTime();
}, 1000)

document.getElementById("updateClock").addEventListener("click", () => {
  now.innerText = currentTime();
});