const workCards = [
  {
    title: "SEP - SWE Intern",
    time: "Summer 2026",
    imgPath: "/src/assets/sepOutside.jpg",
    imgAlt: "SEP Building",
    pageLink: "/projects/sep.html",
  },
  {
    title: "OnlyLocalTickets - Freelance Dev",
    time: "Spring 2026",
    imgPath: "/src/assets/embedExample.png",
    imgAlt: "OnlyLocalTickets Embed Example",
    pageLink: "/projects/onlylocaltickets.html",
  },
];

function createCard(cardObj) {
  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-header">
        <span class="left-card-header">${cardObj.title}</span>
        <span class="right-card-header">${cardObj.time}</span>
    </div>
    <div class="card-content-container">
        <div class="card-image">
            <img src="${cardObj.imgPath}" alt="${cardObj.imgAlt}" />
        </div>
    </div>
    `;
  return card;
}

function renderCards(cardList) {
  var cardSection = document.getElementById("cards-section");
  for (const cardObj of cardList) {
    cardSection.appendChild(createCard(cardObj));
  }
}

renderCards(workCards);
