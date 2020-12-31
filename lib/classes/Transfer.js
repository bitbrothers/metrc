function Transfer(transfer) {
    this.id = transfer.Id;
    this.manifestNumber = transfer.ManifestNumber;
    this.shipmentLicenseType = transfer.ShipmentLicenseType;
    this.shipperFacilityLicenseNumber = transfer.ShipperFacilityLicenseNumber;
    this.shipperFacilityName = transfer.ShipperFacilityName;
    this.name = transfer.Name;
    this.transporterFacilityLicenseNumber = transfer.TransporterFacilityLicenseNumber;
    this.transporterFacilityName = transfer.TransporterFacilityName;
    this.driverName = transfer.DriverName;
    this.driverOccupationalLicenseNumber = transfer.DriverOccupationalLicenseNumber;
    this.driverVehicleLicenseNumber = transfer.DriverVehicleLicenseNumber;
    this.vehicleMake = transfer.VehicleMake;
    this.vehicleModel = transfer.VehicleModel;
    this.vehicleLicensePlateNumber = transfer.VehicleLicensePlateNumber;
    this.deliveryCount = transfer.DeliveryCount;
    this.receivedDeliveryCount = transfer.ReceivedDeliveryCount;
    this.packageCount = transfer.PackageCount;
    this.receivedPackageCount = transfer.ReceivedPackageCount;
    this.containsPlantPackage = transfer.ContainsPlantPackage;
    this.containsProductPackage = transfer.ContainsProductPackage;
    this.containsTradeSample = transfer.ContainsTradeSample;
    this.containsDonation = transfer.ContainsDonation;
    this.containsTestingSample = transfer.ContainsTestingSample;
    this.containsProductRequiresRemediation = transfer.ContainsProductRequiresRemediation;
    this.containsRemediatedProductPackage = transfer.ContainsRemediatedProductPackage;
    this.createdDateTime = transfer.CreatedDateTime;
    this.createdByUserName = transfer.CreatedByUserName;
    this.lastModified = transfer.LastModified;
    this.deliveryId = transfer.DeliveryId;
    this.recipientFacilityLicenseNumber = transfer.RecipientFacilityLicenseNumber;
    this.recipientFacilityName = transfer.RecipientFacilityName;
    this.shipmentTypeName = transfer.ShipmentTypeName;
    this.shipmentTransactionType = transfer.ShipmentTransactionType;
    this.estimatedDepartureDateTime = transfer.EstimatedDepartureDateTime;
    this.actualDepartureDateTime = transfer.ActualDepartureDateTime;
    this.estimatedArrivalDateTime = transfer.EstimatedArrivalDateTime;
    this.actualArrivalDateTime = transfer.ActualArrivalDateTime;
    this.deliveryPackageCount = transfer.DeliveryPackageCount;
    this.deliveryReceivedPackageCount = transfer.DeliveryReceivedPackageCount;
    this.receivedDateTime = transfer.ReceivedDateTime;
    this.estimatedReturnDepartureDateTime = transfer.EstimatedReturnDepartureDateTime;
    this.actualReturnDepartureDateTime = transfer.ActualReturnDepartureDateTime;
    this.estimatedReturnArrivalDateTime = transfer.EstimatedReturnArrivalDateTime;
    this.actualReturnArrivalDateTime = transfer.ActualReturnArrivalDateTime;

    const incomingTransfers = () => {
        
    }
}