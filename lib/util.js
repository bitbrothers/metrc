const axios = require("axios");

const getHeader = ({ username, password }) => {
  return { Authorization: getBasicToken({ username, password }) };
};

const getAuthStringInBase64 = ({ username, password }) => {
  return Buffer.from(`${username}:${password}`).toString("base64");
};

const getBasicToken = ({ username, password }) =>
  `Basic ${getAuthStringInBase64({ username, password })}`;

const getOptions = ({ username, password }) => {
  return { headers: getHeader({ username, password }) };
};
const get = (url, options) => {
    return axios.get(url, getOptions(options))
}
module.exports = {
  get: get
};
