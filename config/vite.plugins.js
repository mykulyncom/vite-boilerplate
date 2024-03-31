import vitePugPlugin from "vite-plugin-pug-transformer";

const pugOptions = {
    pretty: true,
};

const vitePlugins = [vitePugPlugin({ pugOptions: pugOptions })];

export default vitePlugins;
