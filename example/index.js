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


merchant.getPlantWasteMethods(
  function response(data, error) {
      if(error)
        throw error
    console.log(data);
});

merchant.deleteIncomingTransfer(12344, function (data, error) {
let package = merchant.getPackage(98202);
merchant.getRequiredLabTestBatches(package, function (data, error) {
let delivery = merchant.getDelivery(34601);
merchant.getWholesalePackages(delivery, function (data, error) {
  if(error)
        throw error
    console.log(data);
});

merchant.getPlantWasteReasons(
  function response(data, error) {
      if(error)
        throw error
    console.log(data);
  });
  
let transfer = merchant.getTransfer(1234);
merchant.getDeliveries(transfer, function (data, error) {
    if (error) {
      console.log(error)
    } else {
      console.log(data);
    }
});
