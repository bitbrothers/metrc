const metrc = require("../lib/metrc");
require('dotenv').config()
metrc.config({
  sandbox: process.env.sandbox,
});
const merchant = new metrc.Merchant({
  licenseNo: process.env.licenseNo,
  vendorkey: process.env.vendorkey,
  userkey: process.env.userkey,
});

let incomingTransfers = []
merchant.getIncomingTransfers(
  {
    lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
    lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
  },
  function response(data, error) {
    if (error) throw error;
    incomingTransfers = data;
    console.log(incomingTransfers)
  }
);

