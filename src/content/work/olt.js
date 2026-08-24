import oltLogo from "../../assets/logos/oltLogo.jpeg";
import oltThumbnail from "../../assets/thumbnails/oltThumbnail.png";
import embedExample from "../../assets/content/embedExample.gif";
import oltBackendSchema from "../../assets/content/oltBackendSchema.png";

/** @type {import("../../types/types.js").Entry} */
const olt = {
  id: "olt",
  kind: "work",
  thumbnail: {
    thumbnailSource: oltThumbnail,
    thumbnailAlt: "OnlyLocalTickets Card Thumbnail",
  },
  org: {
    name: "OnlyLocalTickets",
    logoSrc: oltLogo,
    logoAlt: "OnlyLocalTickets Logo",
  },
  title: "Software Engineer",
  startDate: new Date("2026-01-05"),
  endDate: new Date("2026-05-31"),
  tags: [
    "React (TypeScript)",
    "Supabase Edge Functions",
    "Recharts",
    "Ticket Evolution API",
  ],
  body: [
    {
      type: "paragraph",
      text: "Only Local Tickets is an event ticketing startup that I completed contract work for, aligned with a World Cup 2026 marketing push. Due to the high demand and volatility surrounding ticket markets, the company saw an opportunity to provide value to customers by aggregating price data from their ticketing connector, Victory Live, built on the Ticket Evolution API.",
    },
    {
      type: "media",
      src: embedExample,
      alt: "Only Local Tickets embedded pricing widget",
      caption: "Only Local Tickets Widget",
      kind: "gif",
    },
    {
      type: "paragraph",
      text: "I was hired to build a widget that could be embedded into their existing web infrastructure on a platform called MarketSnare. To do this, I created a cron-triggered data ingestion pipeline that, every hour, loops over tracked events and fetches available listings. It then filters those listings down to buyable, event-type tickets with valid quantity, aggregates min/max/average pricing, and writes the results to the database.",
    },
    {
      type: "media",
      src: oltBackendSchema,
      alt: "Only Local Tickets data pipeline schema",
      caption: "Data Pipeline Schema",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "For long-term scalability, I added a daily rollup function that condensed hourly data into daily totals once it aged out of the 14-day collection window, keeping storage costs down, along with poller metadata tracking to capture error and success rates on every run.",
    },
    {
      type: "paragraph",
      text: "I also built an internal platform for managing the tracked events database, so non-technical admins could add new events in bulk by performer, sport, team, or venue type. All of this data was surfaced through a React widget using the Recharts library for the graphs.",
    },
    {
      type: "paragraph",
      text: "This experience let me grow professionally in so many ways, taking an idea during a coffee chat to a production-quality product that has now scaled to track over 2,000+ events beyond just the World Cup. That data was leveraged in event listing pages and blog post graphics,, on OnlySoccerTickets.com and OnlyLocalTickets.com.",
    },
  ],
};

export default olt;
