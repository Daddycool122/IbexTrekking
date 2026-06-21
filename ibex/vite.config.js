import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePrerender from "vite-plugin-prerender-esm-fix";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/Trekking',
        '/valley-of-flowers-trek',
        '/chopta-chandrashilla-trek',
        '/Rafting',
        '/Tours'
      ]
    })
  ],
  server: {
    allowedHosts: ["ibexiceaxe.com", "www.ibexiceaxe.com"], // ✅ Add both
    host: true,
    port: 3000,
  },
});
