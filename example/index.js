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

const ingredientOne = new metrc.PackageIngredient(
  {
    Package: "ABCDEF012345670000010041",
    Quantity: 8.0,
    UnitOfMeasure: "Ounces"
  });

const ingredientTwo = new metrc.PackageIngredient(
  {
    Package: "ABCDEF0123234220000010041",
    Quantity: 7.0,
    UnitOfMeasure: "Ounces"
  });

const ingredientThree = new metrc.PackageIngredient(
  {
    Package: "ABCDESKDO123234220000830041",
    Quantity: 2.0,
    UnitOfMeasure: "Ounces"
  });

const packageData = new metrc.PostPackage(
  {
    Tag: "ABCDEF012345670000020201",
    Location: null,
    Item: "Buds",
    Quantity: 16.0,
    UnitOfMeasure: "Ounces",
    PatientLicenseNumber: "X00001",
    Note: "This is a note.",
    IsProductionBatch: false,
    ProductionBatchNumber: null,
    IsDonation: false,
    ProductRequiresRemediation: false,
    UseSameItem: false,
  });
packageData.addIngredient(ingredientOne);
packageData.addIngredient(ingredientTwo);

const packageTwoData = new metrc.PostPackage(
  {
    Tag: "ABCSUUYRE2345670000020201",
    Location: null,
    Item: "Buds",
    Quantity: 18.0,
    UnitOfMeasure: "Ounces",
    PatientLicenseNumber: "X00721",
    Note: "This is a note.",
    IsProductionBatch: false,
    ProductionBatchNumber: null,
    IsDonation: false,
    ProductRequiresRemediation: false,
    UseSameItem: false,
  });
packageTwoData.addIngredient(ingredientThree);

merchant.createPackage(
  [packageData, packageTwoData],
  function (data, error) {
    if (error)
      throw error;
    console.log(data);
  });