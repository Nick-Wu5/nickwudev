// vite.config.js
import { resolve } from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        subpage: resolve(__dirname, "src/content/subpage.html"),
      },
    },
  },
};
