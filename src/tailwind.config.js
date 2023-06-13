const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
