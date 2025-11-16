const colorInput = document.getElementById("colorInput");
const box = document.querySelector("#targetBox");

document.getElementById("applyBtn").addEventListener("click", changeColor)

colorInput.addEventListener("keyup", (e) => {

  if(e.key == "Enter") {

    changeColor();

  }

});

function changeColor() {

  if(colorInput.value.trim().length == 0) {

    alert("값이 비어있습니다!");
    return;

  }

  box.style.backgroundColor = colorInput.value;
  console.log("변경된 색상 : " + colorInput.value);

}




