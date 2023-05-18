import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from 'path-browserify'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") // 路径别名配置
    }
  }
});
