import sepImg from "../assets/sepOutside.jpg";
import embedExampleImg from "../assets/embedExample.png";
import cortevaLogoBasicImg from "../assets/cortevaLogoBasic.png";
import priceIsRightImg from "../assets/priceIsRight.png";
import pacersImg from "../assets/pacersECF.jpeg";
import robBellImg from "../assets/drrobbelltest.jpeg";

const workCards = [
  {
    title: "SEP - Software Engineering Intern",
    time: "May 2026 - Aug 2026",
    imgPath: sepImg,
    imgAlt: "SEP Building",
    pageLink: "/src/content/projects/sep.html",
    cardId: "sep",
  },
  {
    title: "OnlyLocalTickets - Fullstack Developer",
    time: "Jan 2026 - May 2026",
    imgPath: embedExampleImg,
    imgAlt: "OnlyLocalTickets Embed Example",
    pageLink: "/src/content/projects/onlylocaltickets.html",
    cardId: "onlylocaltickets",
  },
  {
    title: "Corteva Agriscience - Data Engineering Intern",
    time: "Jan 2025 - May 2025",
    imgPath: cortevaLogoBasicImg,
    imgAlt: "Corteva Logo",
    pageLink: "/src/content/projects/corteva.html",
    cardId: "corteva",
  },
  {
    title: "DRB & Associates - Web Developemnt Intern",
    time: "Jun 2024 - Jun 2025",
    imgPath: robBellImg,
    imgAlt: "DRB & Associates Logo",
    pageLink: "/src/content/projects/drb.html",
    cardId: "drb",
  },
];

const projectCards = [
  {
    title: "Price Is Right",
    time: "Spring 2026",
    imgPath: priceIsRightImg,
    imgAlt: "Price Is Right Pitch Deck Image",
    pageLink: "/src/content/projects/priceisright.html",
    cardId: "priceisright",
  },
];

const meCards = [
  {
    title: "Pacers",
    time: "Spring 2026",
    imgPath: pacersImg,
    imgAlt: "Pacers Image",
    pageLink: "/src/content/projects/pacers.html",
    cardId: "pacers",
  },
];

function createCard(cardObj) {
  var card = document.createElement("a");
  card.className = "card";
  card.id = cardObj.cardId;
  card.href = cardObj.pageLink;
  card.innerHTML = `
    <div class="card-header">
        <span class="left-card-header">${cardObj.title}</span>
    </div>
    <div class="card-content-container">
        <div class="card-image">
            <img id="img-${cardObj.cardId}" src="${cardObj.imgPath}" alt="${cardObj.imgAlt}" />
        </div>
    </div>
    `;
  return card;
}

export function selectCategory(cardList) {
  const imagePromises = [];

  var cardSection = document.getElementById("cards-section");
  cardSection.replaceChildren();
  for (const cardObj of cardList) {
    cardSection.appendChild(createCard(cardObj));
    const imgElement = document.getElementById(`img-${cardObj.cardId}`);
    imagePromises.push(imgElement.decode());
  }

  return Promise.all(imagePromises);
}

export async function navigateCard(contentId, cardId) {
  let cardList;

  switch (contentId) {
    case "work":
      cardList = workCards;
      break;
    case "projects":
      cardList = projectCards;
      break;
    case "me":
      cardList = meCards;
      break;
    default:
      console.log("Something went wrong...");
      break;
  }

  const result = await selectCategory(cardList);

  var card = document.getElementById(cardId);
  card.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

document.getElementById("work-button").addEventListener("click", () => {
  selectCategory(workCards);
});
document.getElementById("projects-button").addEventListener("click", () => {
  selectCategory(projectCards);
});
document.getElementById("me-button").addEventListener("click", () => {
  selectCategory(meCards);
});

selectCategory(workCards);
