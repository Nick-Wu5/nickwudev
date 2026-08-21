import priceIsRightLogo from "../../assets/priceIsRightSquare.png";
import priceIsRightPreview from "../../assets/priceIsRight.png";

/** @type {import("../../types/types.js").SubpageData} */
const priceIsRight = {
  id: "priceisright",
  kind: "project",
  org: {
    name: "Personal Project",
    logoSrc: priceIsRightLogo,
    logoAlt: "Price Is Right Project Logo",
  },
  title: "Price Is Right",
  dateRange: "Spring 2026",
  tags: ["React", "TypeScript", "Game Logic", "UI/UX"],
  body: [
    {
      type: "paragraph",
      text: "This project was an interactive web experience inspired by the classic game show format, designed to explore playful UI patterns and game logic in a lightweight, engaging build.",
    },
    {
      type: "media",
      src: priceIsRightPreview,
      alt: "Price Is Right project preview",
      caption: "Game concept preview",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "The work focused on creating a polished front-end, balancing challenge and simplicity, and making the interaction feel fun and intuitive while maintaining clean code structure.",
    },
    {
      type: "paragraph",
      text: "It was a good exercise in rapid product iteration: refining the game flow, adjusting visual hierarchy, and turning a simple concept into a more complete experience.",
    },
  ],
};

export default priceIsRight;
