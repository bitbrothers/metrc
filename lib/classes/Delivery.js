function Delivery(delivery) {
  const {
    EstimatedDepartureDateTime,
    ActualDepartureDateTime,
    EstimatedArrivalDateTime,
    ActualArrivalDateTime,
    ReceivedDateTime,
    EstimatedReturnDepartureDateTime,
    ActualReturnDepartureDateTime,
    EstimatedReturnArrivalDateTime,
    ActualReturnArrivalDateTime,

    DeliveryPackageCount,
    DeliveryReceivedPackageCount,

    RecipientFacilityLicenseNumber,
    RecipientFacilityName,

    GrossWeight,
    GrossUnitOfWeightId,
    GrossUnitOfWeightName,

    ShipmentTypeName,
    ShipmentTransactionType,
    ShipmentLicenseType,
  } = delivery;
  this.id = delivery.Id || delivery.DeliveryId;
  this.count = delivery.DeliveryCount;
  this.recievedCount = delivery.ReceivedDeliveryCount;
  this.plannedRoute = delivery.PlannedRoute;
  this.rejectedPackagesReturned = delivery.RejectedPackagesReturned;
  this.shipment = new Shipment({
    ShipmentTypeName,
    ShipmentTransactionType,
    ShipmentLicenseType,
  });
  this.eta = new ETA({
    EstimatedDepartureDateTime,
    ActualDepartureDateTime,
    EstimatedArrivalDateTime,
    ActualArrivalDateTime,
    ReceivedDateTime,
    EstimatedReturnDepartureDateTime,
    ActualReturnDepartureDateTime,
    EstimatedReturnArrivalDateTime,
    ActualReturnArrivalDateTime,
  });
  this.deliveryPackage = new DeliveryPackage({
    DeliveryPackageCount,
    DeliveryReceivedPackageCount,
  });
  this.shipmentReceiver = new ShipmentReceiver({
    RecipientFacilityLicenseNumber,
    RecipientFacilityName,
  });
  this.weight = new Weight({
    GrossWeight,
    GrossUnitOfWeightId,
    GrossUnitOfWeightName,
  });
}

/**
 * Template for generating Shipper (person/body/orgnization who ships) object
 * @param { { Date } EstimatedDepartureDateTime, { Date } ActualDepartureDateTime, { Date } EstimatedArrivalDateTime,
 * { Date } ActualArrivalDateTime , { Date } ReceivedDateTime, { Date } EstimatedReturnDepartureDateTime, { Date } ActualReturnDepartureDateTime, { Date } EstimatedReturnArrivalDateTime, { Date } ActualReturnArrivalDateTime,  }
 */
function ETA({
  EstimatedDepartureDateTime = null,
  ActualDepartureDateTime = null,
  EstimatedArrivalDateTime = null,
  ActualArrivalDateTime = null,
  ReceivedDateTime = null,
  EstimatedReturnDepartureDateTime = null,
  ActualReturnDepartureDateTime = null,
  EstimatedReturnArrivalDateTime = null,
  ActualReturnArrivalDateTime = null,
}) {
  this.arrival = new transferActionTime(EstimatedArrivalDateTime, ActualArrivalDateTime);
  this.departure = new transferActionTime(EstimatedDepartureDateTime, ActualDepartureDateTime);
  this.returnTransfer = {
    arrival: new transferActionTime(EstimatedReturnArrivalDateTime, ActualReturnArrivalDateTime),
    departure: new transferActionTime(EstimatedReturnDepartureDateTime, ActualReturnDepartureDateTime),
  };
  this.recieved = ReceivedDateTime;
}

/**
 * transfer action i.e arrival and departure time
 * @param { Date } eta estimatedtime
 * @param { Date } actual actualtime
 */
function transferActionTime(eta, actual) {
  this.eta = eta;
  this.actual = actual;
}

/**
 * template for generating delivery package object
 * @param {{ number } DeliveryPackageCount, { number } DeliveryReceivedPackageCount }
 */
function DeliveryPackage({ DeliveryPackageCount, DeliveryReceivedPackageCount }) {
  this.deliveryCount = DeliveryPackageCount;
  this.deliveryRecievedCount = DeliveryReceivedPackageCount;
}

/**
 * Template for generating Shipment reciever (person/body/orgnization who recieves) object
 * @param {{ string } RecipientFacilityLicenseNumber, { string } RecipientFacilityName }
 * RecipientFacilityLicenseNumber - unique number of recieient's facility
 * RecipientFacilityName - name of reciepient's facility
 */
function ShipmentReceiver({ RecipientFacilityLicenseNumber, RecipientFacilityName }) {
  this.facilityLicenseNo = RecipientFacilityLicenseNumber;
  this.facilityName = RecipientFacilityName;
}

/**
 * Template for generating Shipment  object
 * @param {{ string } ShipmentTypeName, { string } ShipmentTransactionType, { string } ShipmentLicenseType}
 * ShipmentTypeName - type of shipment
 * ShipmentTransactionType - type of transaction associated with the shipment
 * ShipmentLicenseType - tyepe of shipment license
 */
function Shipment({ ShipmentTypeName = null, ShipmentTransactionType = null, ShipmentLicenseType = null }) {
  this.type = ShipmentTypeName;
  this.transactionType = ShipmentTransactionType;
  this.licenseType = ShipmentLicenseType;
}

/**
 * Template for generating Shipment  object
 * @param {{ string } GrossWeight, { string } GrossUnitOfWeightId, { string } GrossUnitOfWeightName}
 * GrossWeight - total weight
 * GrossUnitOfWeightId -id of unit of weight
 * GrossUnitOfWeightName - unit of weight
 */
function Weight({ GrossWeight = null, GrossUnitOfWeightId = null, GrossUnitOfWeightName = null }) {
  this.weight = GrossWeight;
  this.unitId = GrossUnitOfWeightId;
  this.unitName = GrossUnitOfWeightName;
}

module.exports = Delivery;
