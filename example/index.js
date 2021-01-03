const Transfer = require("../lib/classes/Transfer");
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


merchant.getTemplates({
  lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
  lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
}, function (data, error) {
  if (error) {
    console.log(error)
  } else {
    console.log(data);
  }
});
