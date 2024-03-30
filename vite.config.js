import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";

export default defineConfig({
    plugins: [pugPlugin({ pretty: true })],
    root: "src",
    build: {
        outDir: "../build",
        emptyOutDir: true,
    },
});
