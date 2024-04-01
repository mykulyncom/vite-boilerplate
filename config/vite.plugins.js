import pug from "@vituum/vite-plugin-pug";

const vitePlugins = [
    pug({
        root: "src/pug",
        options: {
            pretty: true,
        },
    }),
];

export default vitePlugins;
