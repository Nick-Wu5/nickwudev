import oltLogo from "../../assets/embedExample.png";

/** @type {import("../../types/types.js").Entry} */
const onlyLocalTickets = {
  id: "onlylocaltickets",
  kind: "work",
  thumbnail: {
    thumbnailSource: oltLogo,
    thumbnailAlt: "OnlyLocalTickets Card Thumbnail",
  },
  org: {
    name: "OnlyLocalTickets",
    logoSrc: oltLogo,
    logoAlt: "OnlyLocalTickets logo",
  },
  title: "Fullstack Developer",
  startDate: new Date("2026-01-01"),
  endDate: new Date("2026-05-31"),
  tags: ["React", "Node.js", "PostgreSQL", "UX"],
  body: [
    {
      type: "paragraph",
      text: "OnlyLocalTickets was my first opportunity to work across the full stack and contribute to a product with real end-user impact.",
    },
    {
      type: "paragraph",
      text: "I built and refined features that improved the user flow, connected front-end interactions to backend logic, and helped shape the experience for event ticketing users.",
    },
    {
      type: "paragraph",
      text: "This role gave me a much stronger sense of how product decisions, system design, and front-end polish need to work together in a cohesive product experience.",
    },
  ],
};

export default onlyLocalTickets;
