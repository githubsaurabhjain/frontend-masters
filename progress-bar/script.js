const prev = document.getElementById("prev");
const next = document.getElementById("nxt");
const line = document.getElementsByClassName("hrz-line");
const progress = document.getElementsByClassName("progress");

let currentStep = 0;
let totalSteps = 3;
prev.setAttribute("disabled", "");

prev.addEventListener("click", () => {
  if (currentStep >= 0) {
    currentStep--;
  }
  progress[0].style.background = "magenta";
  const width = 33 * currentStep;
  progress[0].style.width = width + "%";
});

next.addEventListener("click", () => {
  if (currentStep <= 2) {
    currentStep++;
  }
  if (currentStep > 3) {
    console.log(currentStep);
    next.setAttribute("disabled", "");
    return;
  }
  progress[0].style.background = "magenta";
  const width = 33 * currentStep;
  progress[0].style.width = width + "%";
  prev.removeAttribute("disabled");
});
