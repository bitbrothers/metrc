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

let transfer = merchant.getTransfer(1234);
merchant.getDeliveries(transfer, function (data, error) {
    if (error) {
      console.log(error)
    } else {
      console.log(data);
    }
});

