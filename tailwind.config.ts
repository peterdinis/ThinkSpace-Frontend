const { fontFamily } = require("tailwindcss/defaultTheme");
const {nextui} = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}",     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extends: {},
	},
	plugins: [nextui()],
};
