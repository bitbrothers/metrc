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
];

let transactionDate = '2019-01-02';
merchant.createSalesTransaction(
  transactionDate,
  transactionArray,
  function (data, error) {
    if (error)
      throw error;
    console.log(data);
  }
);