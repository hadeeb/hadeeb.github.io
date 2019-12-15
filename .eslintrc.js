module.exports = {
	env: {
		node: true
	},
	extends: ["@aerian/eslint-config-preact", "@aerian/eslint-config-typescript"],
	plugins: ["simple-import-sort"],
	rules: {
		"simple-import-sort/sort": "error",
		"sort-imports": "off",
		"import/order": "off"
	}
};
