const width = document.getElementById("width");
const height = document.getElementById("height");
const fontSize = document.getElementById("font-size");
const fontWeight = document.getElementsByName("font-weight:checked");
const color = document.getElementById("color");
const backgroundColor = document.getElementById("background-color");
const leftright = document.getElementsByName("leftright");
const updown = document.getElementsByName("updown");
const content = document.getElementById("content")
const result = document.getElementById("result")
const p = document.createElement("p");

console.log(fontWeight);

document.getElementById("apply-btn").addEventListener("click", () => {
  
  result.style.border = "3px solid black";

  p.innerText = content.value;
  result.style.width = width.value +"px";
  result.style.height = height.value + "px";
  p.style.fontSize = fontSize.value + "px";
  p.style.color = color.value;
  result.style.backgroundColor = backgroundColor.value;

  for(let i = 0; i < fontWeight.length; i++) {

    if(fontWeight[i].checked) {

      p.style.fontWeight = fontWeight[i].value;

    }

  }

  for(let i = 0; i < leftright.length; i++) {

    if(leftright[i].checked) {

      result.style.justifyContent = leftright[i].value;

    }

  }

  for(let i = 0; i < updown.length; i++) {

    if(updown[i].checked) {

      result.style.alignItems = updown[i].value;

    }

  }

  result.append(p);

  
});



