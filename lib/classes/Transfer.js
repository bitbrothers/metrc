const Delivery = require('./Delivery.js');
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
 * Template for generating Vehicle object
 *  VehicleMake - manufacturer of vehicle 
 *  VehicleModel - model of the vehicle , 
 *  VehicleLicensePlateNumber - license plate no. assigned by the government body
 * @param { { string } VehicleMake, { string } VehicleModel, { string } VehicleLicensePlateNumber }
 */
function Vehicle({ VehicleMake, VehicleModel, VehicleLicensePlateNumber }) {
  this.make = VehicleMake;
  this.model = VehicleModel;
  this.licensePlateNo = VehicleLicensePlateNumber;
}

/**
 * Template for generating Driver object
 * DriverName - driver's name
 * DriverOccupationalLicenseNumber - driver's license no.
 * DriverVehicleLicenseNumber - vehicle license no
 * @param { { string } DriverName, { string } DriverOccupationalLicenseNumber, { string } DriverVehicleLicenseNumber }
 */
function Driver({
  DriverName,
  DriverOccupationalLicenseNumber,
  DriverVehicleLicenseNumber,
}) {
  this.name = DriverName;
  this.licenseNo = DriverOccupationalLicenseNumber;
  this.vehicleLicenseNo = DriverVehicleLicenseNumber;
}

/**
 * Template for generating Shipper (person/body/orgnization who ships) object
 * @param { { string } ShipperFacilityLicenseNumber, { string } ShipperFacilityName }
 * ShipmentLicenseType - type of license of shipment ,
 * ShipperFacilityLicenseNumber - unique number of shipper's facility ,
 * ShipperFacilityName - name of shipper's facility
 */
function Shipper({ ShipperFacilityLicenseNumber, ShipperFacilityName }) {
  this.facilityLicenseNo = ShipperFacilityLicenseNumber;
  this.facilityName = ShipperFacilityName;
}



/**
 * Template for generating Shipment transporter (person/body/orgnization who transports) object
 * @param {{ string } TransporterFacilityLicenseNumber, { string } TransporterFacilityName }
 * TransporterFacilityLicenseNumber - unique number of transporter's facility
 * TransporterFacilityName - name of transporter's facility
 */
function ShipmentTransporter({
  TransporterFacilityLicenseNumber,
  TransporterFacilityName,
}) {
  this.facilityLicenseNo = TransporterFacilityLicenseNumber;
  this.facilityName = TransporterFacilityName;
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

Transfer.prototype.getDelivery = function (deliveryId) {
  let delivery = new Delivery({});
  delivery.id = deliveryId;
  return delivery;
}
module.exports = Transfer;
