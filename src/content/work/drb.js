import drbLogo from "../../assets/drrobbelltest.jpeg";

/** @type {import("../../types/types.js").SubpageData} */
const drb = {
  id: "drb",
  kind: "work",
  org: {
    name: "DRB & Associates",
    logoSrc: drbLogo,
    logoAlt: "DRB & Associates Logo",
  },
  title: "Web Development Intern",
  dateRange: "June 2024 - June 2025",
  tags: ["HTML", "CSS", "JavaScript", "Web Design"],
  body: [
    {
      type: "paragraph",
      text: "At DRB & Associates, I supported the redesign and maintenance of web experiences used to communicate services, projects, and client information.",
    },
    {
      type: "paragraph",
      text: "I worked on front-end updates, improved content layouts, and learned how to balance design polish with practical implementation details in a real business setting.",
    },
    {
      type: "paragraph",
      text: "This role helped me grow comfortable translating design ideas into working web pages and understanding the value of clear, user-friendly interfaces.",
    },
  ],
};

export default drb;
