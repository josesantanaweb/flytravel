const path = require("path");
require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  // publicRuntimeConfig: {
  //   API_URL: process.env.API_URL
  // },
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "src/components"); //Components
    config.resolve.alias["theme"] = path.join(__dirname, "src/theme"); //Theme
    config.resolve.alias["data"] = path.join(__dirname, "src/data"); //Data
    config.resolve.alias["utils"] = path.join(__dirname, "src/utils"); //Utils
    config.resolve.alias["store"] = path.join(__dirname, "src/store"); //Store
    return config;
  },
};
