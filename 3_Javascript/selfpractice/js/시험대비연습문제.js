const width = document.querySelector("#input-width");
const height = document.querySelector("#input-height");
const color = document.querySelector("#input-color");
const updown = document.querySelector("[name=updown]");
const leftright = document.querySelector("[name=leftright]");
const content = document.querySelector("#input-content");
const result = document.querySelector("#result");

document.querySelector("#apply-btn").addEventListener("click", () => {

  const insertResult = document.createElement("div");
  insertResult.innerText = content.value;
  insertResult.style.color = color.value;
  insertResult.style.width = width.value + "px";
  insertResult.style.height = height.value + "px";

  if(updown.value == "mid") { 
    result.style.alignItems = "center";
  } else if(updown.value == "bottom") {
    result.style.alignItems = "end";  
  } 

  result.append(insertResult);

}); 

