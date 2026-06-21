import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["ibexiceaxe.com", "www.ibexiceaxe.com"], // ✅ Add both
    host: true,
    port: 3000,
  },
});
