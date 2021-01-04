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

/** get vegetative plants => plantKey = 'vegetative'
 *  get flowering plants => plantKey = 'flowering'
 *  get plants that are on hold => plantKey = 'onhold'
 *  get plants that are inactive  => plantKey = 'inactive'
 *  get additives plants => plantKey = 'additives'
 */
const plantKey = 'vegetative';
merchant.getPlants(
  {
    lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
    lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
  },
  plantKey,
  function response(data, error) {
      if(error)
        throw error
    console.log(data);
  }
);
