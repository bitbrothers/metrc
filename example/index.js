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

const transactionOne = new metrc.PostTransaction({
  PackageLabel: "ABCDEF012345670000010331",
  Quantity: 1.0,
  UnitOfMeasure: "Ounces",
  TotalAmount: 9.99
});

const transactionTwo = new metrc.PostTransaction({
  PackageLabel: "ABBBR012345670000010331",
  Quantity: 2.0,
  UnitOfMeasure: "Ounces",
  TotalAmount: 18.99
});

let transactionArray = [
  transactionOne,
  transactionTwo
]

merchant.postSalesReceipt({
  SalesDateTime: "2016-10-04T16:44:53.000",
  SalesCustomerType: "Consumer",
  PatientLicenseNumber: null,
  CaregiverLicenseNumber: null,
  IdentificationMetho: null,
}, transactionArray, function (data, error) {
  if (error)
    throw error;
    console.log(data);
});

merchant.putSalesReceipt({
  SalesDateTime: "2016-10-04T16:44:53.000",
  SalesCustomerType: "Consumer",
  PatientLicenseNumber: null,
  CaregiverLicenseNumber: null,
  IdentificationMetho: null,
}, transactionArray, function (data, error) {
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
