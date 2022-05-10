module.exports = {
	content: ["./public/**/*.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
			},
			colors: {
				red: {
					30: "#d9665b",
					20: "#d9665bb3",
					10: "#d9665b33",
				},
				yellow: {
					30: "#ffa305",
					20: "#ffa305b3",
					10: "#ffa30533",
				},
				green: {
					30: "#03a678",
					20: "#03a678b3",
					10: "#03a67833",
				},
				blue: {
					30: "#5593c9",
					20: "#5593c9b3",
					10: "#5593c933",
				},
				/* primary colors */
				title: {
					primary: "#012340",
					dark: "#d6d6d6",
					dark2: "#c0d9ee",
				},
				1: {
					"body-dark-mode": "#d5d5d5",
					body: "#707070",
					print: "#606060",
					"body-lighter": "#b0b0b0",
				},

				/* theme colors */

				background: "#fafafa",
			},
		},
	},
	plugins: [],
};
