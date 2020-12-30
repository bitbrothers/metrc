const axios = require('axios');
const config = require('../config.js');

const transferUrl = `${config.config.serverUrl}/transfers/v1`;
const headers = { 'Authorization': config.config.authorization }

/*Retrives the list of incoming transfers*/
exports.incomingTransfers = (req, res) => {
    axios.get(`${transferUrl}/incoming?licenseNumber=${config.config.licenseNo}&lastModifiedStart=${config.config.lastModifiedStart}&lastModifiedEnd=${config.config.lastModifiedEnd}`, { headers: headers })
        .then((res) => {
           return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

/*Retrives the list of outgoing transfers*/
exports.outgoingTransfers = (req, res) => {
    axios.get(`${transferUrl}/outgoing?licenseNumber=${config.config.licenseNo}&lastModifiedStart=${config.config.lastModifiedStart}&lastModifiedEnd=${config.config.lastModifiedEnd}`, { headers: headers })
    .then((res) => {
       return res.data;
    })
    .catch((err) => {
        console.log(err);
    });
}

/*Retrives the list of rejected transfers*/
exports.rejectedTransfers = () => {
    axios.get(`${transferUrl}/rejected?licenseNumber=${config.config.licenseNo}`, { headers: headers })
    .then((res) => {
       return res.data;
    })
    .catch((err) => {
        console.log(err);
    });
}