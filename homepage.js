document.querySelector(".Upper").style.visibility = "hidden";
document.querySelector(".pupper-1").style.visibility = "hidden";
const home = document.querySelector("#L2");
home.addEventListener("click", () => {
  document.querySelector(".Upper").style.visibility = "hidden";
  document.querySelector(".pupper-1").style.visibility = "visible";
});
const homee = document.querySelector("#L1");
homee.addEventListener("click", () => {
  document.querySelector(".Upper").style.visibility = "visible";
  document.querySelector(".pupper-1").style.visibility = "hidden";
});
const nextEl = document.querySelector(".right");

const prevEl = document.querySelector(".left");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".Lower");

let currentImg = 1;
let timeout;
nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
const containerEl = document.querySelector(".container");
const careers = ["WELCOME TO OUR WEBSITE"];
let careerIndex = 0;
let characterIndex = 0;
updateText();
function updateText() {
  characterIndex++;
  containerEl.innerHTML = ` <h1> ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex== careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}