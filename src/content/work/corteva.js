import cortevaLogo from "../../assets/cortevaLogoBasic.png";
import cortevaScene from "../../assets/cortevaLogoBg.jpg";

/** @type {import("../../types/types.js").SubpageData} */
const corteva = {
  id: "corteva",
  kind: "work",
  org: {
    name: "Corteva Agriscience",
    logoSrc: cortevaLogo,
    logoAlt: "Corteva Logo",
  },
  title: "Data Engineering Intern",
  dateRange: "January 2025 - May 2025",
  tags: ["Python", "SQL", "PySpark", "Data Pipelines"],
  body: [
    {
      type: "paragraph",
      text: "This internship gave me my first real experience working inside a production data environment, supporting analytical workflows for a large agriculture technology organization.",
    },
    {
      type: "paragraph",
      text: "I helped build and validate internal data processes, cleaned and transformed business data, and learned how to work with large-scale datasets while balancing reliability and speed.",
    },
    {
      type: "media",
      src: cortevaScene,
      alt: "Corteva data platform preview",
      caption: "Data engineering context",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "The experience pushed me to think more systematically about data quality, pipeline structure, and how technical decisions impact downstream stakeholders.",
    },
  ],
};

export default corteva;
