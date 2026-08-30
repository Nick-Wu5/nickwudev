import ceepsThumbnail from "../../assets/thumbnails/ceepsThumbnail.png";
import ceepsLogo from "../../assets/logos/ceepsLogo.png";
import ceepsLeaderboard from "../../assets/content/ceepsLeaderboard.png";
import ceepsScreens from "../../assets/content/ceepsScreens.png";

/** @type {import("../../types/types.js").Entry} */
const ceeps = {
  id: "ceeps",
  kind: "project",
  thumbnail: {
    thumbnailSource: ceepsThumbnail,
    thumbnailAlt: "Ceeps Website leaderboard screenshot",
  },
  org: {
    name: "Ceeps Website",
    logoSrc: ceepsLogo,
    logoAlt: "Ceeps Website logo",
  },
  title: "Fraternity Scoreboard",
  startDate: new Date("2025-12-03"),
  endDate: new Date("2026-01-31"),
  tags: ["JavaScript", "Firebase (Firestore + Storage)", "HTML/CSS"],
  body: [
    {
      type: "paragraph",
      text: "Being involved in Greek life at Purdue has allowed me to find some of my closest friends, given me a diverse range of new experiences, and surprisingly grown my faith (talk to me about the house Bible study). There's a game that's a huge part of my house's culture, ceeps. I've come to appreciate the game and love creating memories with my friends playing every so often.",
    },
    {
      type: "media",
      src: ceepsLeaderboard,
      alt: "Ceeps Leaderboard",
      caption: "Live Ceeps Leaderboard",
      kind: "image",
    },
    {
      type: "paragraph",
      text: 'I had fun creating this simple but meaningful project with people close to me. The site is vanilla HTML/CSS/JS using Firebase for the backend, tracking individual stats like total games, win rate, and average cups hit per player. After a game wraps up, the highest-performing player (the "scorecard") submits the match stats, which updates every involved player\'s stats automatically. Every submission also requires a photo of the official physical scorecard, so results can be audited.',
    },
    {
      type: "media",
      src: ceepsScreens,
      alt: "Ceeps Recent Games + Submission Screens",
      caption: "Ceeps Recent Games + Submission Screens",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "The leaderboard is probably the most engaging part for users as house members can see exactly how they stack up against the 145+ registered players across four member classes, sorting by any of the tracked stats and filtering by pledge class. On top of that, the site hosts the official posted rulebook and a crowdsourced Hall of Fame, where players submit pictures and write-ups of their most memorable moments.",
    },
    {
      type: "paragraph",
      text: "This wasn't the most technically involved project I've built, but it was one of the most fun. As I got live feedback from over 80 friends at house-wide chapter meetings, iterated on it, and then watched the new features get used the very next weekend.",
    },
  ],
};

export default ceeps;
