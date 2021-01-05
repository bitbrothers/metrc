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

const packageId = 41234;
merchant.getPackage(packageId,
  function (data, error) {
    if (error)
      throw error;
    console.log(data);
  });

const packageLabel = "1AWFF011232022000002578";
merchant.getPackage(packageLabel,
  function (data, error) {
    if (error)
      throw error;
    console.log(data);
  });