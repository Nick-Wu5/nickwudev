import embedExampleImg from "../assets/embedExample.png";
import cortevaLogoBasicImg from "../assets/cortevaLogoBasic.png";
import priceIsRightImg from "../assets/priceIsRight.png";
import pacersImg from "../assets/pacersECF.jpeg";
import robBellImg from "../assets/drrobbelltest.jpeg";
import sepThumbnail from "../assets/thumbnails/sepThumbnail.png";

/**
 * @typedef {Object} Card
 * @property {string} title - Display title shown on the card.
 * @property {string} time - Time period associated with the card.
 * @property {string} imgPath - Path or URL for the card image.
 * @property {string} imgAlt - Alt text for the card image.
 * @property {string} pageLink - Destination link for the card.
 * @property {string} cardId - Unique id used for DOM lookup and navigation.
 */

/** @type {Card[]} */
const workCards = [
  {
    title: "SEP - Software Engineering Intern",
    time: "May 2026 - Aug 2026",
    imgPath: sepThumbnail,
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

/** @type {Card[]} */
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

/** @type {Card[]} */
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

/**
 * Creates a clickable card element from card data.
 *
 * @param {Card} cardObj - Data used to render the card.
 * @returns {HTMLAnchorElement} The generated anchor element for the card.
 */
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

/**
 * Renders a list of cards into the cards section and waits for their images to decode.
 *
 * @param {Card[]} cardList - Cards to render for the selected category.
 * @returns {Promise<void[]>} Resolves when all card images finish decoding.
 */
export function selectCategory(cardList) {
  const imagePromises = [];

  var cardSection = document.getElementById("cards-section");

  if (!cardSection) {
    return Promise.resolve([]);
  }

  cardSection.replaceChildren();

  for (const cardObj of cardList) {
    cardSection.appendChild(createCard(cardObj));
    const imgElement = document.getElementById(`img-${cardObj.cardId}`);
    if (!(imgElement instanceof HTMLImageElement)) {
      return Promise.resolve([]);
    }

    imagePromises.push(imgElement.decode());
  }

  return Promise.all(imagePromises);
}

/**
 * Selects a content category, renders its cards, and scrolls a target card into view.
 *
 * @param {string} contentId - Category id used to choose a card list.
 * @param {string} cardId - Card id to scroll into view after rendering.
 * @returns {Promise<void>} Resolves when rendering is complete and scroll is triggered.
 */
export async function navigateCard(contentId, cardId) {
  let cardList = [];

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
      cardList = workCards;
      break;
  }

  const result = await selectCategory(cardList);

  var card = document.getElementById(cardId);

  if (!card) {
    return;
  } else {
    card.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

document.getElementById("work-button")?.addEventListener("click", () => {
  selectCategory(workCards);
});
document.getElementById("projects-button")?.addEventListener("click", () => {
  selectCategory(projectCards);
});
document.getElementById("me-button")?.addEventListener("click", () => {
  selectCategory(meCards);
});

selectCategory(workCards);
