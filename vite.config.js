import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {

    // allow .js (and .jsx/.ts/.tsx if you like) to be parsed as JSX
    include: /src\/.*\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
  },
});
