// vite.config.js
import { resolve } from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sep: resolve(__dirname, "src/content/work/sep.html"),
        onlylocaltickets: resolve(__dirname, "src/content/work/olt.html"),
        corteva: resolve(__dirname, "src/content/work/corteva.html"),
        priceisright: resolve(
          __dirname,
          "src/content/projects/priceisright.html",
        ),
      },
    },
  },
};
