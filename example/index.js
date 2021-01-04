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


merchant.getSalesTransactionsByRange(
  {
    lastModifiedEnd: "2020-08-19",
    lastModifiedStart: "2020-08-18",
  },
  function response(data, error) {
      if(error)
        throw error
    console.log(data);
  }
);
