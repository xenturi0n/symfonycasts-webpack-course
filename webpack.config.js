const path = require("path");

module.exports = {
    mode: "development",
    entry: "./web/assets/js/RepLogApp.js",
    output: {
        path: path.resolve(__dirname, "web", "build"),
        filename: "rep_log.js"
    }
};
