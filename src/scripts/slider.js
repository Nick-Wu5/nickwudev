const container = document.querySelector(".slider-container");
const sliderBackground = document.getElementById("slider-bg");
const buttons = container.querySelectorAll(".slider-button");
const workButton = document.getElementById("work-button");
const projectsButton = document.getElementById("projects-button");
const meButton = document.getElementById("me-button");

export function setActiveButton(button) {
  if (!button) return;

  buttons.forEach((b) => b.classList.remove("active"));
  button.classList.add("active");

  sliderBackground.style.width = `${button.offsetWidth}px`;
  sliderBackground.style.transform = `translateX(${button.offsetLeft}px)`;
}

export function syncButton(contentId) {
  let button;

  switch (contentId) {
    case "work":
      button = workButton;
      break;
    case "projects":
      button = projectsButton;
      break;
    case "me":
      button = meButton;
      break;
    default:
      console.log("Something went wrong...");
      break;
  }

  setActiveButton(button);
  console.log("Setting button background");
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
