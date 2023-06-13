import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		cors: false,
		proxy: {
			"/api": {
				target: "https://webservice.fanart.tv/v3/",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
