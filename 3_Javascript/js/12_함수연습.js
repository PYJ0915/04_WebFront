// 1. name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오

function practice1(name) {
  console.log(`Hello [${name}]`);
}

practice1("홍길동");

// 2. 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오

function practice2(a, b) {
  return a + b;
}

console.log(practice2(3, 9));

// 3. 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성

console.log((a, b) => a * b);

// 4. 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 "첫 번째 숫자가 더 큽니다"를 출력하고,
//     그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오

function practice4(a, b) {

  if(Number(a) > Number(b)){
    console.log("첫 번째 숫자가 더 큽니다");
  } else {

    console.log("두 번째 숫자가 더 크거나 같습니다")

  }

}

// 5. 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오

function practice5(str){

  console.log(str.length);

}

practice5("안녕하세요 제가 LA에 있을때...");

// 6. 문자열과 반복 횟수를 매개변수로 받아, 해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오

function practice6(str, count) {

  for(let i = 0; i < count; i++){

    console.log(str);

  }

}

practice6("헬로우 에브리원", 10);

// 7. 숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를 true 또는 false로 반환하는 함수를 선언 및 정의하고 호출하시오

function practice7(num) {

  if(num % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }

}

practice7(17);

// 8. 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 함수를 선언 및 정의하고 호출하시오

function practice8(num1, num2, num3) {



}

// 9. 배열을 매개변수로 받아 첫 번째 요소를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오

function practice9(arr) {

return arr[0];

}

const arr1 = ["사과", "딸기", "포도"];

console.log(practice9(arr1));


// 10. 배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오

function practice10(arr) {

  let sum = 0;
  let avg = 0;

  for(let i = 0; i < arr.length; i++) {

    sum += arr[i];

  }

  avg = (sum / arr.length);

  const obj = {"sum" : sum, "avg" : avg};

  return obj

}

const arr2 = [10, 20, 30, 40, 50];
console.log(practice10(arr2));

// 11. 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오

// 12. 1. 사람의 이름과 2. 인사말을 출력하는 함수를 [매개변수]로 받아, 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오