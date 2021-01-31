const axios = require("axios");

const instance = axios.create({
	baseURL: "http://63.250.33.174/api/v1/",
});

module.exports = instance;
