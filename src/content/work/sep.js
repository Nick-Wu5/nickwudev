import sepLogo from "../../assets/logos/sepLogo.jpeg";
import sepInterns from "../../assets/content/sepInterns.jpeg";
import sepThumbnail from "../../assets/thumbnails/sepThumbnail.png";

/** @type {import("../../types/types.js").Entry} */
const sep = {
  id: "sep",
  kind: "work",
  thumbnail: {
    thumbnailSource: sepThumbnail,
    thumbnailAlt: "SEP Card Thumbnail",
  },
  org: { name: "SEP", logoSrc: sepLogo, logoAlt: "SEP Logo" },
  title: "Software Engineering Intern",
  startDate: new Date("2026-05-01"),
  endDate: new Date("2026-08-31"),
  tags: ["React (Typescript)", "NestJS", "PostgreSQL (TypeORM), AWS S3"],
  body: [
    {
      type: "paragraph",
      text: "SEP is a software consultancy in the Midwest, primarily contracting with corporations across industries like life sciences, consumer & industrial IoT, agriculture, and aviation. During my internship, I worked with a tight-knit team of six talented engineers building a modern web platform for a Fortune 500 pharmaceutical client. The platform managed shipments worth tens of millions of dollars in imports and exports through U.S. Foreign Trade Zones, built in close partnership with U.S. Customs and Border Protection.",
    },
    {
      type: "paragraph",
      text: "I grew a ton over the summer, and a lot of that comes down to how supportive my team was about getting me involved in every area of the codebase. Whether that meant creating new endpoints in the NestJS backend for specific shipment types or restructuring the flow of critical data ingestion pipelines through new React components, I was constantly learning. Along the way, I also got exposure to several new technologies our project leaned on, including Docker, Kubernetes, Temporal, and AWS S3.",
    },
    {
      type: "media",
      src: sepInterns,
      alt: "SEP Interns",
      caption: "SEP Interns Group Photo",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "My toughest technical challenge came from working in a mock server the team had built to simulate our third-party integrations without pinging the real services. My work involved debugging its 'passthrough' functionality, where you could simulate a failed request against the mock server and then a successful one against the live service. In this scenario, the mock server endpoints weren't just dummy responses. Instead,  they acted as a proxy to the real integrations. Ultimately, I traced the bug to the mock server passing 'hop-by-hop' headers into the live service requests, which caused authentication issues.",
    },
    {
      type: "paragraph",
      text: "Beyond the technical skills, I learned a lot about problem-solving in a mature, large codebase. Finding the balance of getting up to speed by asking context-rich questions to my team with tools like Claude Code to ramp up quickly on my own. A big part of that was getting reps learning a niche but vast problem domain and translating that understanding into practical solutions. Taking the time to understand supply chain relationships, intricacies, and existing stakeholder workflows mattered just as much as understanding technical principles like the dependency injection NestJS relies on. I also got to practice team development with agile methodologies and use tools like GitHub Copilot to speed up the code review process.",
    },
    {
      type: "paragraph",
      text: "My summer at SEP exploded my curiosity for solving big problems and left a mark on me, showing just how much of a difference awesome culture makes for an organization.",
    },
  ],
};

export default sep;
