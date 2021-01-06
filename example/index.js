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

/** 
   *  get active packages => plantKey = 'active'
   *  get packages that are on hold => plantKey = 'onhold'
   *  get inactive packages  => plantKey = 'inactive'
   */
const packageKey = "active";
merchant.getPackages(
  {
    lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
    lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
  },
  packageKey,
  function (data, error) {
    if (error)
      throw error;
    console.log(data);
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
