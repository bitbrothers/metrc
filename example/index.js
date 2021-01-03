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

let transfer = new metrc.Transfer({});
let delivery = transfer.getDelivery(34601);
merchant.getPackages(delivery, function (data, error) {
  if (error) {
    console.log(error)
  } else {
    console.log(data);
  }
})
