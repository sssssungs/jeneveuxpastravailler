module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		"airbnb",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {},
};
