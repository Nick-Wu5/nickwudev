/** @typedef {import("../types/types.js").Entry} Entry */
import { compareEntriesByDateDesc } from "./dates.js";

const workCards = Object.values(
  /** @type {Record<string, {default: Entry}>} */ (
    import.meta.glob("../content/work/*.js", { eager: true })
  ),
)
  .map((module) => module.default)
  .sort(compareEntriesByDateDesc);

const projectCards = Object.values(
  /** @type {Record<string, {default: Entry}>} */ (
    import.meta.glob("../content/projects/*.js", { eager: true })
  ),
)
  .map((module) => module.default)
  .sort(compareEntriesByDateDesc);

const meHTML = document.createElement("p");
meHTML.innerHTML =
  "Purdue Computer Science student who likes to watch Tottenham and Pacers in his free time";

/**
 * Creates a clickable card element from card data.
 *
 * @param {Entry} entry - Data used to render the card.
 * @returns {HTMLAnchorElement} The generated anchor element for the card.
 */
function createCard(entry) {
  var card = document.createElement("a");
  card.className = "card";
  card.id = entry.id;
  card.href = `/src/content/subpage.html?id=${card.id}`;
  card.innerHTML = `
    <div class="card-header">
        <span class="left-card-header">${entry.org.name} - ${entry.title}</span>
    </div>
    <div class="card-content-container">
        <div class="card-image">
            <img id="img-${entry.id}" src="${entry.thumbnail.thumbnailSource}" alt="${entry.thumbnail.thumbnailAlt}" />
        </div>
    </div>
    `;
  return card;
}

/**
 * Renders a list of cards into the cards section and waits for their images to decode.
 *
 * @param {"work" | "projects" | "me"} category - Cards to render for the selected category.
 * @returns {Promise<void[]> | undefined} Resolves when all card images finish decoding.
 */
export function selectCategory(category) {
  // Delete exisiting content in card section
  var cardSection = document.getElementById("cards-section");
  if (!cardSection) {
    return Promise.resolve([]);
  }
  cardSection.replaceChildren();

  // Fill card section with new content
  if (category === "me") {
    cardSection.appendChild(meHTML);
  } else {
    let cardList = workCards;

    if (category === "projects") {
      cardList = projectCards;
    } else if (category === "work") {
      cardList = workCards;
    }

    const imagePromises = [];
    for (const cardObj of cardList) {
      cardSection.appendChild(createCard(cardObj));
      const imgElement = document.getElementById(`img-${cardObj.id}`);
      if (!(imgElement instanceof HTMLImageElement)) {
        return Promise.resolve([]);
      }

      imagePromises.push(imgElement.decode());
    }

    return Promise.all(imagePromises);
  }
}

/**
 * Selects a content category, renders its cards, and scrolls a target card into view.
 *
 * @param {"work" | "projects" | "me"} category - Category id used to choose a card list.
 * @param {string} cardId - Card id to scroll into view after rendering.
 * @returns {Promise<void>} Resolves when rendering is complete and scroll is triggered.
 */
export async function navigateCard(category, cardId) {
  const result = await selectCategory(category);

  if (category != "me") {
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
}

document.getElementById("work-button")?.addEventListener("click", () => {
  selectCategory("work");
});
document.getElementById("projects-button")?.addEventListener("click", () => {
  selectCategory("projects");
});
document.getElementById("me-button")?.addEventListener("click", () => {
  selectCategory("me");
});

selectCategory("work");
