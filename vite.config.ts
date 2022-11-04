import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import graphql from "@rollup/plugin-graphql";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss(), graphql()],
});
