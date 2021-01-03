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

let package = merchant.getPackage(98202);
merchant.getRequiredLabTestBatches(package, function (data, error) {
  if (error) {
    console.log(error)
  } else {
    console.log(data);
  }
})
