// 메뉴 주문
function check1() {

  // 메뉴 가격
  const gimbap = 3000;
  const ramyun = 3500;
  const dongasu = 5000;

  // 주문 개수 카운트
  let gCount = 0;
  let rCount = 0;
  let dCount = 0;

  // prompt로 입력한 값을 저장할 변수
  let input; // undefined

  // 비교연산자
  // == (값이 동일한 경우)
  // === (동일 비교 연산자 => 값, 자료형이 모두 동일해야함!)
  // !== (값, 자료형이 모두 다른 경우 false)

  // undefined == null (==로 비교 시 같은 값으로 인식)
  // undefined === null (===로 비교 시 자료형까지 비교 thus false)

  while (input !== null) { // 취소 버튼을 눌렀을 때만 멈춤

    input = prompt("메뉴 번호를 입력하세요!")

    switch (input) {
      case "1":
        gCount++;
        break;
      case "2":
        rCount++;
        break;
      case "3":
        dCount++;
        break;
      case null:
        alert("주문 완료!");
        break;
      default: alert("메뉴에 있는 번호로만 입력해주세요!")
    }

  }

  alert(`김밥 : ${gCount}개, 라면 ${rCount}개, 돈가스 ${dCount}개`)

  let sum = (gCount * gimbap) + (rCount * ramyun) + (dCount * dongasu);
  alert(`총 가격 : ${sum}원`)

}

  // Up & Down Game
 function startGame() {
    // 맞혀야하는 난수(1~200) 발생시켜 저장
    const answer = Math.floor(Math.random() * 200) + 1;

    // 정답 시도 횟수를 세기 위한 변수
    let count = 0;

    // prompt에 출력할 문자열
    let str = "1부터 200사이 숫자 입력";

    while (true) {

      let input = prompt(str);

      if (input === null) {
        alert("게임 포기");
        break;
      }

      const value = Number(input);

      // 숫자가 아닌 문자열이 잘못 입력된 경우
      // NaN (Not a Number : 숫자가 아니다)
      // isNaN(값) : 값이 NaN이면 true

      if (isNaN(value)) { // 숫자가 아닌 값을 입력한 경우

        alert("숫자만 입력해주세요");
        continue;

      }

      if (value < 1 || value > 200) { // 범위를 초과한 경우

        alert("1부터 200사이의 숫자만 입력해주세요!");
        continue;

      } 

      // 정답을 맞추기 위한 시도를 했기 때문에 count를 1 증가
      count++;

      if(value === answer){ // 정답인 경우
        alert(`정답!!! (${answer}) / 시도 횟수 : ${count}`)
        break;
      }

      // 정답이 아닌 경우
      if(value > answer) { // 내가 입력한 값이 더 큰 경우
        str = `${value} [Down] 시도 횟수 : ${count}`;

      } else { // 작은 경우
        str = `${value} [UP] 시도 횟수 : ${count}`;

      }
      

    }
  }