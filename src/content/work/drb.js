import drbThumbnail from "../../assets/thumbnails/drbThumbnail.png";
import drbLogo from "../../assets/logos/drbLogo.png";
import drbDemo from "../../assets/content/drbDemo.gif";

/** @type {import("../../types/types.js").Entry} */
const drb = {
  id: "drb",
  kind: "work",
  thumbnail: {
    thumbnailSource: drbThumbnail,
    thumbnailAlt: "DRB & Associates Card Thumbnail",
  },
  org: {
    name: "DRB & Associates",
    logoSrc: drbLogo,
    logoAlt: "DRB & Associates Logo",
  },
  title: "Web Development Intern",
  startDate: new Date("2023-06-03"),
  endDate: new Date("2024-06-04"),
  tags: ["WordPress", "Wondershare Filmora", "HTML/CSS"],
  body: [
    {
      type: "paragraph",
      text: "I interned under sports psychologist Dr. Rob Bell throughout high school. Over the course of the year, I worked with Dr. Bell to complete a full overhaul of his WordPress website (drrobbell.com), restructuring it to showcase his coaching services, speaking engagements, and books. The redesign focused on streamlining customer click paths to improve conversion rates, alongside an overall cleaner UI.",
    },
    {
      type: "media",
      src: drbDemo,
      alt: "Dr. Rob Bell Hero Section",
      caption: "drrobbell.com video hero",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "In addition to web development, I edited his biweekly podcast, The Mental Toughness Podcast with Dr. Rob Bell, where he hosts PGA Tour winners, Olympians, and Fortune 500 leaders to discuss their stories and insights on mental toughness. After each episode was released on audio platforms for about 3,800+ listeners, I produced short-form highlight clips for his social media channels, boosting listenership 15%.",
    },
  ],
};

export default drb;
