import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/E-Commerce_Product_Page/",
  plugins: [react()],
});
