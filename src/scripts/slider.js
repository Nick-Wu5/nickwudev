const container = document.querySelector(".slider-container");
const sliderBackground = document.getElementById("slider-bg");
const buttons = container.querySelectorAll(".slider-button");

function moveSliderTo(button) {
  sliderBackground.style.width = `${button.offsetWidth}px`;
  sliderBackground.style.translate = `${button.offsetLeft}px`;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => btn.classList.remove("acitve"));
    btn.classList.add("active");
    moveSliderTo(btn);
  });
});

window.addEventListener("load", () => {
  const active = container.querySelector(".slider-button.active") || buttons[0];
  active.classList.add("active");
  moveSliderTo(active);
});

window.addEventListener("resize", () => {
  const active = container.querySelector(".slider-button.active");
  if (active) moveSliderTo(active);
});
