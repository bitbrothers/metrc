const Delivery = require('./Delivery.js');
const Shipper = require('./Shipper.js');
const Driver = require('./Driver.js');
const ShipmentTransporter = require("./ShipmentTransporter.js");
const Vehicle = require("./Vehicle.js");
function Transfer(transfer) {
  const {
    VehicleMake,
    VehicleModel,
    VehicleLicensePlateNumber,
    DriverName,
    DriverOccupationalLicenseNumber,
    DriverVehicleLicenseNumber,
    ShipperFacilityLicenseNumber,
    ShipperFacilityName,
    RecipientFacilityLicenseNumber,
    RecipientFacilityName,
    TransporterFacilityLicenseNumber,
    TransporterFacilityName,
    ShipmentTypeName,
    ShipmentTransactionType,
    ShipmentLicenseType,
    EstimatedDepartureDateTime,
    ActualDepartureDateTime,
    EstimatedArrivalDateTime,
    ActualArrivalDateTime,
    ReceivedDateTime,
    EstimatedReturnDepartureDateTime,
    ActualReturnDepartureDateTime,
    EstimatedReturnArrivalDateTime,
    ActualReturnArrivalDateTime,

    DeliveryId,
    DeliveryCount,
    ReceivedDeliveryCount,
    PackageCount,
    ReceivedPackageCount,

    ContainsPlantPackage,
    ContainsProductPackage,
    ContainsTradeSample,
    ContainsDonation,
    ContainsTestingSample,
    ContainsProductRequiresRemediation,
    ContainsRemediatedProductPackage,
  } = transfer;

  this.id = transfer.Id;
  this.manifestNumber = transfer.ManifestNumber;
  this.name = transfer.Name;
  this.createdDateTime = transfer.CreatedDateTime;
  this.createdBy = transfer.CreatedByUserName;
  this.lastModified = transfer.LastModified;
  this.path = "/transfers/v1";
  this.vehicle = new Vehicle({
    VehicleMake,
    VehicleModel,
    VehicleLicensePlateNumber,
  });
  this.driver = new Driver({
    DriverName,
    DriverOccupationalLicenseNumber,
    DriverVehicleLicenseNumber,
  });
  this.shipper = new Shipper({
    ShipperFacilityLicenseNumber,
    ShipperFacilityName,
  });
  this.shipmentTransporter = new ShipmentTransporter({
    TransporterFacilityLicenseNumber,
    TransporterFacilityName,
  });
  this.delivery = new Delivery({
    DeliveryId,
    DeliveryCount,
    ReceivedDeliveryCount,

    EstimatedDepartureDateTime,
    ActualDepartureDateTime,
    EstimatedArrivalDateTime,
    ActualArrivalDateTime,
    ReceivedDateTime,
    EstimatedReturnDepartureDateTime,
    ActualReturnDepartureDateTime,
    EstimatedReturnArrivalDateTime,
    ActualReturnArrivalDateTime,

    ShipmentTypeName,
    ShipmentTransactionType,
    ShipmentLicenseType,

    RecipientFacilityLicenseNumber,
    RecipientFacilityName,
  });
  this.package = new Package({
    PackageCount,
    ReceivedPackageCount,
  });
  this.transferContent = new TransferContent({
    ContainsPlantPackage,
    ContainsProductPackage,
    ContainsTradeSample,
    ContainsDonation,
    ContainsTestingSample,
    ContainsProductRequiresRemediation,
    ContainsRemediatedProductPackage,
  });
}

/**
 * template for generating package object with delivery ids and counts
 * @param { { number } PackageCount, { number } ReceivedPackageCount
 */
function Package({ PackageCount, ReceivedPackageCount }) {
  this.count = PackageCount;
  this.receivedCount = ReceivedPackageCount;
}

/**
 * template to check contents of the transfer
 * @param { { boolean } ContainsPlantPackage, { boolean } ContainsProductPackage, { boolean } ContainsTradeSample, { boolean } ContainsDonation, { boolean }  ContainsTestingSample, { boolean } ContainsProductRequiresRemediation, { boolean } ContainsRemediatedProductPackage }
 */
function TransferContent({
  ContainsPlantPackage,
  ContainsProductPackage,
  ContainsTradeSample,
  ContainsDonation,
  ContainsTestingSample,
  ContainsProductRequiresRemediation,
  ContainsRemediatedProductPackage,
}) {
  this.plantPackage = ContainsPlantPackage;
  this.productPackage = ContainsProductPackage;
  this.tradeSample = ContainsTradeSample;
  this.donation = ContainsDonation;
  this.testingSample = ContainsTestingSample;
  this.requiresRemediation = ContainsProductRequiresRemediation;
  this.remdiationProductPackage = ContainsRemediatedProductPackage;
}

Transfer.prototype.setVehicle = function (vehicle) {
  this.vehicle = vehicle;
};

module.exports = Transfer;
