const axios = require("axios");

const instance = axios.create({
  baseURL: "http://server.methodmelody.com/api/v1/",
});

module.exports = instance;
