// eslint-disable-next-line import/no-commonjs
module.exports = {
	important: false,
	theme: {
		screens: { sm: "640px" },
		colors: {
			black: "#24292e",
			white: "#fff",
			gray: { light: "#e1e4e8", mid: "#d1d5da", dark: "#666666" },
			blue: "#0366d6"
		},
		spacing: { "4": "4px", "8": "8px", "16": "16px", "24": "24px" },
		backgroundColor: theme => theme("colors"),
		fontSize: { "14": "14px", "16": "16px", "18": "18px", "26": "26px" },
		padding: theme => theme("spacing"),
		margin: theme => theme("spacing"),
		textColor: theme => theme("colors"),
		borderWidth: { "0": "0px", "1": "1px" }
	},
	variants: {
		backgroundColor: [],
		textColor: [],
		boxShadow: []
	},
	corePlugins: [
		"display",
		"position",
		"textColor",
		"backgroundColor",
		"margin",
		"padding",
		"fontSize",
		"fontWeight",
		"alignContent",
		"alignItems",
		"borderColor",
		"borderRadius",
		"borderStyle",
		"borderWidth",
		"boxShadow",
		"flex",
		"flexDirection",
		"justifyContent",
		"flexWrap",
		"width",
		"height"
	]
};
