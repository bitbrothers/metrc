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


// merchant.getIncomingTransfers({
//   lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
//   lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
// }, function (data, error) {
//   if (error){
//     console.log(error);
//     throw error;
//   } else {
//     console.log(data);
//   }
// });

// merchant.getOutgoingTransfers({
//   lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
//   lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
// }, function (data, error) {
//   if (error) 
//     throw error;
//     console.log(data);
//   });

// merchant.getRejectedTransfers(function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });

// merchant.getFacilities(function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });

// const transfer = merchant.getTransfer(34601);
// merchant.getDeliveries(transfer, function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });

// const delivery = merchant.getDelivery(34701);
// merchant.getTransferPackages(delivery, function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });

// const delivery = merchant.getDelivery(34701);
// merchant.getWholesalePackages(delivery, function (data, error) {
//     if (error)
//       throw error;
//     console.log(data);
//   });

// const package = merchant.getTransferPackage(196611);
// merchant.getRequiredLabTestBatches(package, function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });

// merchant.deleteIncomingTransfer(34601, function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });

// merchant.getTemplates({
//   lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
//   lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
// }, function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });

// const transferTemplate = merchant.getTransferTemplate(12234);
// merchant.getTransferTemplateDeliveries(transferTemplate, function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });

// merchant.getSalesReciepts({
//   lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
//   lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
// }, false, function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });

// const sale = merchant.getSale(12321);
// merchant.getSalesRecieptById(sale, function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });

// merchant.getSalesTransactions(function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });

// merchant.getSalesTransactionsByRange({
//   salesDateStart: "2019-01-08",
//   salesDateEnd: "2019-01-10",
// }, function (data, error) {
//   if (error)
//     throw error;
//   console.log(data);
// });


/**Create a Transfer | POST */

//step1: create a shipper
const shipper = new metrc.Shipper({
  ShipperLicenseNumber: "123-ABC",
  ShipperName: "Lofty Med-Cultivation B",
  ShipperMainPhoneNumber: "123-456-7890",
  ShipperAddress1: "123 Real Street",
  ShipperAddress2: null,
  ShipperAddressCity: "Somewhere",
  ShipperAddressState: "CO",
  ShipperAddressPostalCode: null
});

const shipperFormData = shipper.getFormData();

//step 2: create driver object
const driver = new metrc.Driver({
  DriverName: null,
  DriverOccupationalLicenseNumber: null,
  DriverLicenseNumber: null
});
const driverFormData = driver.getFormData();

//step 3: create vehicle object
const vehicle = new metrc.Vehicle({
  VehicleMake: null,
  VehicleModel: null,
  VehicleLicensePlateNumber: null
});
const vehicleFormData = vehicle.getFormData();

//step 4: create a transporter object and add relevant vehicles and drivers
const transporterOne = new metrc.ShipmentTransporter({
  TransporterFacilityLicenseNumber: null,
  PhoneNumberForQuestions: "18005555555",
  IsLayover: false,
  EstimatedDepartureDateTime: "",
  EstimatedArrivalDateTime: "",
  TransporterDetails: null,
  Driver: driverFormData,
  Vehicle: vehicleFormData
});
const transporterOneFormData = transporterOne.getFormData();

const transporterTwo = new metrc.ShipmentTransporter({
  TransporterFacilityLicenseNumber: null,
  PhoneNumberForQuestions: "7772876327",
  IsLayover: false,
  EstimatedDepartureDateTime: "",
  EstimatedArrivalDateTime: "",
  TransporterDetails: null,
  Driver: driverFormData,
  Vehicle: vehicleFormData
});
const transporterTwoFormData = transporterTwo.getFormData();

//step 5: create packages needed for the transfer
const packageOne = new metrc.DeliveryPackage({
  ItemName: "Buds",
  Quantity: 10.0,
  UnitOfMeasureName: "Ounces",
  PackagedDate: "2018-02-04T00:00:00Z",
  GrossWeight: null,
  GrossUnitOfWeightName: null,
  WholesalePrice: null
});
const packageOneData = packageOne.getTransferFormData();

const packageTwo = new metrc.DeliveryPackage({
  ItemName: "Buds",
  Quantity: 7.0,
  UnitOfMeasureName: "Ounces",
  PackagedDate: "2019-02-04T00:00:00Z",
  GrossWeight: null,
  GrossUnitOfWeightName: null,
  WholesalePrice: null
});
const packageTwoData = packageTwo.getTransferFormData();

//step 6: create destination object and add transporters and packages as an array (separately)
const destination = new metrc.Destination({
  RecipientLicenseNumber: "123-XYZ",
  TransferTypeName: "Transfer",
  PlannedRoute: "I will drive down the road to the place.",
  EstimatedDepartureDateTime: "2018-03-06T09:15:00.000",
  EstimatedArrivalDateTime: "2018-03-06T12:24:00.000",
  GrossWeight: null,
  GrossUnitOfWeightId: null,
  Transporters: [transporterOneFormData, transporterTwoFormData],
  Packages: [packageOneData, packageTwoData]
});
const destinationData = destination.getFormData();
// const destinations = [destinationData1, destinationData2, destinationData3....];
const destinations = [destinationData];
//step 7: call create transfer function with shipper and destination data as parameters
const transfer1 = merchant.createTransfer(shipperFormData, destinations);
const transfer2 = merchant.createTransfer(shipperFormData, destinations);
//step 8: call POST / PUT request with array of transfers
merchant.postTransfers([transfer1, transfer2], function (data, error) {
  if (error)
    throw error;
  console.log(data);
});

merchant.putTransfers([transfer1, transfer2], function (data, error) {
  if (error)
    throw error;
  console.log(data);
});


// -----

// const transactionOne = new metrc.PostTransaction({
//   PackageLabel: "ABCDEF012345670000010331",
//   Quantity: 1.0,
//   UnitOfMeasure: "Ounces",
//   TotalAmount: 9.99
// });

// const transactionTwo = new metrc.PostTransaction({
//   PackageLabel: "ABBBR012345670000010331",
//   Quantity: 2.0,
//   UnitOfMeasure: "Ounces",
//   TotalAmount: 18.99
// });

// let transactionArray = [
//   transactionOne,
//   transactionTwo
// ];

// merchant.postSalesReceipt({
//   SalesDateTime: "2016-10-04T16:44:53.000",
//   SalesCustomerType: "Consumer",
//   PatientLicenseNumber: null,
//   CaregiverLicenseNumber: null,
//   IdentificationMetho: null,
// }, transactionArray, function (data, error) {
//   if (error)
//     throw error;
//     console.log(data);
// });

// merchant.putSalesReceipt({
//   SalesDateTime: "2016-10-04T16:44:53.000",
//   SalesCustomerType: "Consumer",
//   PatientLicenseNumber: null,
//   CaregiverLicenseNumber: null,
//   IdentificationMetho: null,
// }, transactionArray, function (data, error) {
//   if (error)
//     throw error;
//     console.log(data);
//   });

// merchant.getPlantWasteMethods(
//   function response(data, error) {
//       if(error)
//         throw error
//     console.log(data);
// });

// merchant.deleteIncomingTransfer(12344, function (data, error) {
//   if(error)
//   throw error
// console.log(data);
// });

// let package = merchant.getPackage(98202);
// merchant.getRequiredLabTestBatches(package, function (data, error) {
//   if(error)
//   throw error
// console.log(data);
// });

// let delivery = merchant.getDelivery(34601);
// merchant.getWholesalePackages(delivery, function (data, error) {
//   if(error)
//         throw error
//     console.log(data);
// });

// merchant.getPlantWasteReasons(
//   function response(data, error) {
//       if(error)
//         throw error
//     console.log(data);
//   });

// let transfer = merchant.getTransfer(1234);
// merchant.getDeliveries(transfer, function (data, error) {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(data);
//     }
// });
