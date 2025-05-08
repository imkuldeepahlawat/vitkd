import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      checker({
        typescript: {
          tsconfigPath: "./tsconfig.app.json",
          buildMode: true,
          enableBuild: true,
          terminal: true
        },
      }),
    ],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
      },
    },
  };
});
