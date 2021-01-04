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


merchant.getPlantWasteMethods(
  function response(data, error) {
      if(error)
        throw error
    console.log(data);
  }
);

merchant.getPlantWasteReasons(
  function response(data, error) {
      if(error)
        throw error
    console.log(data);
  }
);
