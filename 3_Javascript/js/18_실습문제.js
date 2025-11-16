const size = document.querySelector("#size");
const color = document.querySelector("#color");
const content = document.getElementById("content");
const result = document.getElementById("result");


document.querySelector("#apply").addEventListener("click", () => {
  content.style.fontSize = size.value + "px";
  content.style.color = color.value;
});

document.getElementById("registration").addEventListener("click", () => {

  const p = document.createElement("p");
  p.innerText = content.value;
  p.setAttribute("style", content.getAttribute("style"));

  result.append(p);
  
});


