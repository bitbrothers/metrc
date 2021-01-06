//TODO replace axois with native nodejs http
const axios = require("axios");
const { globalString }  = require("./config");

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
    return axios.get(`https://${globalString.baseUrl}${url}`, getOptions(options))
}
const post = (url, data, options) => {
  return axios.post(`https://${globalString.baseUrl}${url}`, data, getOptions(options));
}
const put = (url, data, options) => {
  return axios.put(`https://${globalString.baseUrl}${url}`, data, getOptions(options));
}
module.exports = {
  get: get,
  post: post,
  put: put
};
