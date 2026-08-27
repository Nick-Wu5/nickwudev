import priceIsRightLogo from "../../assets/priceIsRightSquare.png";
import priceIsRightPreview from "../../assets/priceIsRight.png";
import slideshow from "../../assets/content/priceisrightSlideshow.jpeg";
import demo from "../../assets/content/priceisrightDemo.gif";

/** @type {import("../../types/types.js").Entry} */
const priceIsRight = {
  id: "priceisright",
  kind: "project",
  thumbnail: {
    thumbnailSource: priceIsRightPreview,
    thumbnailAlt: "Price Is Right Card Thumbnail",
  },
  org: {
    name: "Price Is Right",
    logoSrc: priceIsRightLogo,
    logoAlt: "Price Is Right Project Logo",
  },
  title: "Price Is Right",
  startDate: new Date("2026-04-03"),
  endDate: new Date("2026-04-29"),
  tags: [
    "SwiftUI (Meta Wearables Device Access Kit)",
    "eBay API",
    "Gemini Vision",
    "ElevenLabs",
  ],
  body: [
    {
      type: "paragraph",
      text: "Built during the world's largest hardware hackathon, Price Is Right is a tool built for the Ray-Ban Meta glasses that gives resellers hands-free item valuation for when speed matters most in busy thrifting environments.",
    },
    {
      type: "media",
      src: demo,
      alt: "Price Is Right Demo",
      caption: "Demo (Buffering time removed)",
      kind: "gif",
    },
    {
      type: "paragraph",
      text: 'Using the Meta Wearables Device Access Toolkit, my team and I built a companion iOS app that lets users simply say, "Computa, how much is this worth?" and get a hands-free price check read back into their ear via Eleven Labs voice. The trigger phrase kicks off the evaluation workflow, which takes a snapshot from the glasses\' live video feed, analyzes it with Gemini Vision, then queries secondary marketplace APIs like eBay, Discogs, and TCGplayer to generate a price estimate.',
    },
    {
      type: "media",
      src: slideshow,
      alt: "Price Is Right Hackathon pitch deck",
      caption: "Slides from the pitch deck ",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "As a reselling enthusiast in high school, my brother and I would often visit busy garage sales, estate sales, flea markets, and Goodwills to search for treasures we could turn a profit on. We soon realized a major bottleneck in the process was determining how fairly an item was priced, which required cross-referencing it against listings on secondary marketplaces. This ate up time at each sale, giving other competitors first dibs on checking out other items. That bottleneck sparked the idea my teammates and I ran with at the hackathon: Esequiel Linares, Maxwell Meytin, and Andrew Xiao.",
    },
    {
      type: "paragraph",
      text: "Check out our interview with Lenovo Legion -- https://lnkd.in/g5vNrhUE",
    },
  ],
};

export default priceIsRight;
