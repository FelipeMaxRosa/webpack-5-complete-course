const path = require("path");

// 4 Types of Asset Modules
// - asset/resource
// - asset/inline
// - asset
// - asset/source

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./dist"),
	},
	mode: "none",
};
