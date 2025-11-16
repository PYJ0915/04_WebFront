// 공통적으로 사용되는 요소를 전역 변수로 선언
const addBtn = document.querySelector("#add");
const calcBtn = document.querySelector("#calc")
const container = document.querySelector(".container");

addBtn.addEventListener("click", () => {

  // div 요소 생성하기
  const box = document.createElement("div"); // <div></div>

  // div 요소에 class 추가
  box.classList.add("row"); // <div class="row"></div>
  
  // input 요소 생성하기
  const input = document.createElement("input"); // <input>

  // input 요소에 타입, 클래스 요소 추가하기

  // input.type="number";
  input.setAttribute("type", "number"); // <input type="number">
  // input.classList.add("input-number");
  input.setAttribute("class", "input-number"); // <input type="number" class="input-number">

  // span 요소 생성하기 <span class="remove-row">&times;</span>
  const span = document.createElement("span"); // <span></span>

  // span 요소에 클래스 추가
  span.setAttribute("class", "remove-row"); // <span class="remove-row"></span>

  // span 요소 내용으로 &times; 추가 (innerHTML)
  span.innerHTML = "&times;" // <span class="remove-row">&times;</span>

  // 클릭된 X 버튼의 부모 요소를 제거
  span.addEventListener("click", (e) => { 
    
    // 현재 이벤트가 발생한 요소(클릭된 X 버튼)의 부모 요소 탐색
    const parent = e.target.parentElement; // div.box

    // 부모 요소를 제거하기
    parent.remove() 

  });
  
  // div요소에 자식으로 input 추가
  box.append(input, span);
  
  // 완성된 div를 container 마지막 자식으로 추가
  container.append(box);
  

});


// 계산 버튼 클릭 시 
calcBtn.addEventListener("click", () => {

  // 모든 input요소 얻어오기
  const numbers = document.querySelectorAll(".input-number");

  // for문으로 모든 요소 접근 하여 작성된 값을 얻어와 숫자로 변경 후 합계 저장 변수에 누적

  let sum = 0;

  for(let i = 0; i < numbers.length; i++) {

    sum += Number(numbers[i].value);

  }

  // alert() 결과 출력
  alert("결과 : " + sum);

});

