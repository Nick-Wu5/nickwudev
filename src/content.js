const modules = import.meta.glob("./content/*.md", {
  query: "?raw",
});

const files = [
  { id: "work", title: "Work", path: "./content/work.md", content: "" },
  {
    id: "projects",
    title: "Projects",
    path: "./content/projects.md",
    content: "",
  },
  { id: "school", title: "Purdue", path: "./content/school.md", content: "" },
  { id: "me", title: "Me", path: "./content/me.md", content: "" },
];

const promiseArray = Object.entries(modules).map(([path, loader]) => {
  return loader().then((mod) => ({ path, content: mod.default }));
});

const filesReady = Promise.all(promiseArray).then((results) => {
  for (const entry of results) {
    const file = files.find((f) => f.path === entry.path);
    file.content = entry.content;
  }
  return files;
});

filesReady.then((res) => {
  console.log(res);
});
