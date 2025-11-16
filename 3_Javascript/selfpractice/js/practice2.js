const input = document.getElementById("insert");
const ul = document.querySelector("#todoList");
let num = 0;

document.getElementById("applyBtn").addEventListener("click", () => {
  
  if(input.value.trim().length == 0) {
    
    alert("입력한 내용이 비어있습니다.")
    return;
    
  }
  
  num++;
  const li = document.createElement("li");
  li.innerText = `[${num}번] ${input.value}`;
  ul.append(li);

  li.addEventListener("click", (e) => {

    e.target.remove();

  });

});
