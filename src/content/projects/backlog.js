import backlogThumbnail from "../../assets/thumbnails/backlogThumbnail.png";
import backlogLogo from "../../assets/content/backlogSticker.png";

/** @type {import("../../types/types.js").Entry} */
const backlog = {
  id: "backlog",
  kind: "project",
  thumbnail: {
    thumbnailSource: backlogThumbnail,
    thumbnailAlt: "Ceeps Website leaderboard screenshot",
  },
  org: {
    name: "The Backlog",
    logoSrc: backlogLogo,
    logoAlt: "Backlog logo",
  },
  title: "Unfinished Ideas...",
  startDate: new Date("2024-08-03"),
  endDate: new Date(),
  pinLast: true,
  tags: ["All sorts of stuff"],
  body: [
    {
      type: "paragraph",
      text: "Here are some things I've started to build but haven't been fully fleshed out...",
    },
    {
      type: "paragraph",
      text: "What’s Your Wait? - an iOS ride sharing app specifically tuned to the needs of existing Purdue Greek life ride sharing infrastructure. This app features real-time GPS location so riders can see driver location and a queue system to reserve drivers.",
    },
    {
      type: "paragraph",
      text: "BoilerMates - started at the 2025 BoilerMake hackathon. A Purdue roommate matching application that uses a Tinder inspired swiping UI and an AI powered matching algorithm to find your perfect roommate. ",
    },
    {
      type: "paragraph",
      text: "Carmel Tutoring - a website for my friend Jaydon as he launched his local tutoring business",
    },
  ],
};

export default backlog;
