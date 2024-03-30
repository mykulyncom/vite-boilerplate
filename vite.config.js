import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
import { resolve } from "pathe";

import {
    processAssetFileNames,
    entryFileNames,
    chunkFileNames,
    assetDir,
} from "./config/vite.assets";

export default defineConfig({
    plugins: [pugPlugin({ pretty: true })],
    root: "src",
    build: {
        outDir: "../build",
        emptyOutDir: true,
        assetsDir: assetDir,
        rollupOptions: {
            input: {
                index: resolve(__dirname, "./src/index.html"),
            },
            output: {
                entryFileNames: entryFileNames,
                assetFileNames: processAssetFileNames,
                chunkFileNames: chunkFileNames,
            },
        },
    },
});
