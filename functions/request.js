const axios = require('axios')

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
});

// Alter defaults after instance has been created
instance.defaults.headers.common["Content-Type"] = "application/json";

module.exports = { 
  instance
}