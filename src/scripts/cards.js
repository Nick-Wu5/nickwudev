import sepImg from "../assets/sepOutside.jpg";
import embedExampleImg from "../assets/embedExample.png";
import cortevaLogoBasicImg from "../assets/cortevaLogoBasic.png";
import priceIsRightImg from "../assets/priceIsRight.png";
import pacersImg from "../assets/pacersECF.jpeg";

const workCards = [
  {
    title: "SEP - Software Engineering Intern",
    time: "Summer 2026",
    imgPath: sepImg,
    imgAlt: "SEP Building",
    pageLink: "/src/content/projects/sep.html",
  },
  {
    title: "OnlyLocalTickets - Fullstack Developer",
    time: "Spring 2026",
    imgPath: embedExampleImg,
    imgAlt: "OnlyLocalTickets Embed Example",
    pageLink: "/src/content/projects/onlylocaltickets.html",
  },
  {
    title: "Corteva Agriscience - Data Engineering Intern",
    time: "Summer 2025",
    imgPath: cortevaLogoBasicImg,
    imgAlt: "Corteva Logo",
    pageLink: "/src/content/projects/corteva.html",
  },
];

const playCards = [
  {
    title: "Price Is Right",
    time: "Spring 2026",
    imgPath: priceIsRightImg,
    imgAlt: "Price Is Right Pitch Deck Image",
    pageLink: "/src/content/projects/priceisright.html",
  },
];

const meCards = [
  {
    title: "Pacers",
    time: "Spring 2026",
    imgPath: pacersImg,
    imgAlt: "Pacers Image",
    pageLink: "/src/content/projects/pacers.html",
  },
];

function createCard(cardObj) {
  var card = document.createElement("a");
  card.className = "card";
  card.href = cardObj.pageLink;
  card.innerHTML = `
    <div class="card-header">
        <span class="left-card-header">${cardObj.title}</span>
        <span class="right-card-header">${cardObj.time}</span>
    </div>
    <div class="card-content-container">
        <div class="card-image">
            <img loading="lazy" src="${cardObj.imgPath}" alt="${cardObj.imgAlt}" />
        </div>
    </div>
    `;
  return card;
}

function renderCards(cardList) {
  console.log("tired to render cards");
  var cardSection = document.getElementById("cards-section");
  cardSection.replaceChildren();
  for (const cardObj of cardList) {
    cardSection.appendChild(createCard(cardObj));
  }
}

document.getElementById("work-button").addEventListener("click", () => {
  renderCards(workCards);
});
document.getElementById("play-button").addEventListener("click", () => {
  renderCards(playCards);
});
document.getElementById("me-button").addEventListener("click", () => {
  renderCards(meCards);
});

renderCards(workCards);
