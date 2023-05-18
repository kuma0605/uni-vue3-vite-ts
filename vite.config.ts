import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import UnoCSS from "unocss/vite";
import path from "path-browserify";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), UnoCSS()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") // 路径别名配置
    }
  }
});
