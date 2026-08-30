import trecLogo from "../../assets/logos/trecLogo.png";
import trecPitch from "../../assets/content/trecPitchDeck.png";
import trecThumbnail from "../../assets/thumbnails/trecThumbnail.png";
import trecIRL from "../../assets/content/trecIRL.jpeg";

/** @type {import("../../types/types.js").Entry} */
const trec = {
  id: "trec",
  kind: "project",
  thumbnail: {
    thumbnailSource: trecThumbnail,
    thumbnailAlt: "TREC card Thumbnail",
  },
  org: {
    name: "LaunchPad Mentee Project",
    logoSrc: trecLogo,
    logoAlt: "TREC Project Logo",
  },
  title: "TREC Team Queue",
  startDate: new Date("2024-08-03"),
  endDate: new Date("2024-12-03"),
  tags: ["React (Typescript)", "Supabase", "Vercel"],
  body: [
    {
      type: "paragraph",
      text: "As an avid soccer fan and player, when I heard about Purdue's indoor pickup facility (Turf Recreational Facility, or TREC), I quickly became a regular. I've made countless great memories in that building, spending time with friends, meeting new people, and enjoying the game we all love. But with a growing student population of over 57,000, including plenty of soccer fans, the facility's single available field quickly became overwhelmed relative to demand. This consistently left 6-7 teams waiting on the sidelines to be \"next up.\"",
    },
    {
      type: "media",
      src: trecPitch,
      alt: "TREC pitch deck",
      caption:
        "Slides from the pitch (with my mentor Steven) to Purdue Recreation",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "As any recreational athlete can imagine, disputes over whose team had next right to play weren't just common, they were the norm. After conducting a survey of 41 TREC players, the data confirmed it: 80% cited the current word-of-mouth rotation system as inefficient, and 75% reported experiencing arguments over team rotation at least 3-4 times per session.",
    },
    {
      type: "paragraph",
      text: "I saw the problem, started building, and TREC Team Queue was born. Built as a React web app with a Supabase backend, the application manages team rotation in the facility in real time. It lets players see the current teams playing live, dynamically tracks team order and game time, maintains win streaks, and runs on a dual-interface setup: an iPad for game control and a TV display for the live queue.",
    },
    {
      type: "media",
      src: trecIRL,
      alt: "TREC Project On My Desk",
      caption: "IRL Project!",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "I completed this project during my first semester of college as a mentee in the LaunchPad program. My mentor, Steven Schonlau, provided incredible guidance and played a key role in my growth during this period. While the system isn't currently implemented in the facility, I've pitched the project to Purdue Recreation staff, and conversations remain ongoing to implement solutions that meet the growing demand for pickup sports on campus.",
    },
  ],
};

export default trec;
