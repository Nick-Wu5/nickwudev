const container = document.querySelector(".slider-container");
const sliderBackground = document.getElementById("slider-bg");
const buttons = container.querySelectorAll(".slider-button");

export function setActiveButton(button) {
  buttons.forEach((b) => b.classList.remove("active"));
  button.classList.add("active");

  sliderBackground.style.width = `${button.offsetWidth}px`;
  sliderBackground.style.translate = `${button.offsetLeft}px`;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveButton(btn);
  });
});

window.addEventListener("load", () => {
  const active = container.querySelector(".slider-button.active") || buttons[0];
  setActiveButton(active);
});

window.addEventListener("resize", () => {
  const active = container.querySelector(".slider-button.active");
  if (active) setActiveButton(active);
});
