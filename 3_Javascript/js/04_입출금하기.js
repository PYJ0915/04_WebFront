// prompt 사용 연습

function test() {
  const password = prompt("비밀번호 : ");

  console.log(password)

  // 확인 -> 입력한 값이 문자열로 저장
  // 취소 => null

  if (password == null) {
    alert("취소")
  } else {
    if (password == '1234') {
      alert("비밀번호 일치")
    } else {
      alert("비밀번호 불일치")
    }
  }
}

// -------------------------------------------------------------------------

let balance = 10000;

const password = 1234;

const result = document.getElementById("output");

const amount = document.getElementById("amount");

result.innerText = balance;

function deposit() {

  if (amount.value.length == 0) {

    alert("금액을 입력해주세요!")

  } else {

    let money = Number(amount.value)

    balance += Number(money);

    result.innerText = balance;

    amount.value ='';

    alert("입금 완료! 잔액 : " + balance + "원");
  }

  

}

function withdrawal() {

  if (amount.value.length == 0) {

    alert("금액을 입력해주세요!")

  } else {

    const pw = prompt("비밀번호 입력 : ");

    if (pw == null) {

      alert("취소");

    } else {

      if (pw == password) {

        if (balance >= Number(amount.value)) {

          balance -= Number(amount.value);

          result.innerText = balance;

          // alert(Number(amount.value) + "원이 출금 되었습니다. 남은 잔액 " + balance + "원");

          alert(`${Number(amount.value)}원이 출금 되었습니다. 남은 잔액 ${balance}원`)
          // 템플릿 리터럴 (Template Literal)
          // => 백틱(``)을 사용하여 문자열을 감싸고, ${} 안에 변수/값을 넣어 동적으로 문자열을 생성하는 방식

          amount.value ='';

        } else {

          alert("출금 금액이 잔액보다 클 수 없습니다.");

        }

      } else {

        alert("비밀번호가 일치하지 않습니다");

      }

    }

  }

  

}

