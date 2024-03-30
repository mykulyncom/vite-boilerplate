import { defineConfig } from "vite";
import { resolve } from "pathe";
import vitePlugins from "./config/vite.plugins";

import {
    processAssetFileNames,
    entryFileNames,
    chunkFileNames,
    assetDir,
} from "./config/vite.assets";

export default defineConfig({
    plugins: vitePlugins,
    root: "src",
    build: {
        outDir: "../build",
        emptyOutDir: true,
        assetsDir: assetDir,
        cssMinify: false, // Deactivate minify css
        minify: false, // Deactivate minify javascript
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
