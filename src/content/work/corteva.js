import cortevaLogo from "../../assets/logos/cortevaLogo.jpeg";
import cortevaThumbnail from "../../assets/thumbnails/cortevaThumbnail.jpg";
import cortevaInterns from "../../assets/content/cortevaInterns.jpeg";
import cortevaWall from "../../assets/content/cortevaWall.jpeg";

/** @type {import("../../types/types.js").Entry} */
const corteva = {
  id: "corteva",
  kind: "work",
  thumbnail: {
    thumbnailSource: cortevaThumbnail,
    thumbnailAlt: "Corteva Card Thumbnail",
  },
  org: {
    name: "Corteva Agriscience",
    logoSrc: cortevaLogo,
    logoAlt: "Corteva Logo",
  },
  title: "Data Engineering Intern",
  startDate: new Date("2025-05-13"),
  endDate: new Date("2025-08-13"),
  tags: [
    "Python",
    "Power Automate",
    "Power BI",
    "Alteryx",
    "SAP Analytics Cloud",
  ],
  body: [
    {
      type: "paragraph",
      text: "Corteva Agriscience is a Fortune 500 agriculture company focused on seed and crop protection products. During my internship, I worked with the IT & Supply Chain Operations team.",
    },
    {
      type: "paragraph",
      text: "Over the course of the summer, my work centered on building internal tools across a variety of domains within the organization. The first project stemmed from a weekly standup meeting where the whole team reviewed ServiceNow ticket resolution performance and updates. Previously, the meeting host relied on an extensive manual ServiceNow-to-Excel workflow to prepare the relevant data. After discussions and iteration with various team members, I built and deployed a Power Automate workflow that eliminated most of the manual data preparation steps, and set it up to become fully automated once the team's ServiceNow API access was unblocked. By the end of the summer, this reduced monthly ticket-analytics reporting prep time by 50%.",
    },
    {
      type: "media",
      src: cortevaInterns,
      alt: "Corteva Interns at work",
      caption: "Me + Corteva Interns",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "I also applied my Python skills to build a file organization automation that indexed and cleaned up metadata for files scattered across several local, network, and SharePoint file systems, consolidating them into a single source of truth.",
    },
    {
      type: "paragraph",
      text: "Finally, I developed a tool for the Volume Planners on the business side of the organization. They often received seed data via SAP that was incorrect or incomplete. With the volume involved, hundreds of thousands of records each week, the existing manual quality checks could set the planning process back 2-3 days. After sitting down with various business stakeholders, I built a data pipeline and Power BI visualization that let planners track the most recent incoming data, filtered by product, country, manufacturing source, and more. It also automatically notified business and technical stakeholders by email when data quality issues came up, before planning ever started.",
    },
    {
      type: "paragraph",
      text: "One of the biggest takeaways from this experience was the global team I was part of. While I was based at Corteva's Indianapolis headquarters, much of my team worked abroad, including in India, Switzerland, and Italy. Collaborating across timezones and geographies pushed me to grow. Having those conversations with people from such different backgrounds helped me develop my own understanding of existing problems before applying automated solutions.",
    },
    {
      type: "media",
      src: cortevaWall,
      alt: "Me standing in front of the corteva logo wall",
      caption: "Corteva logo wall",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "It was also interesting to pick up domain knowledge around the agriculture industry and a supply chain of that scale. With so many stakeholders involved and the seasonal constraints of agricultural products, I became acutely aware of how critical high-quality data pipelines are to keeping everything running smoothly. Overall, this summer marked my first offical internship experience and I'm grateful to have had the opportunity to grow around such driven peers!",
    },
  ],
};

export default corteva;
