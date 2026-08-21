import oltLogo from "../../assets/embedExample.png";

/** @type {import("../../types/types.js").SubpageData} */
const onlyLocalTickets = {
  id: "onlylocaltickets",
  kind: "work",
  org: {
    name: "OnlyLocalTickets",
    logoSrc: oltLogo,
    logoAlt: "OnlyLocalTickets logo",
  },
  title: "Fullstack Developer",
  dateRange: "January 2026 - May 2026",
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
