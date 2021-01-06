/**
 * template for destination 
 * @param { Object } destination 
 */
function Destination(destination) {
    this.recipientLicenseNo = destination.RecipientLicenseNumber;
    this.transferTypeName = destination.TransferTypeName;
    this.plannedRoute = destination.PlannedRoute;
    this.departureETA = destination.EstimatedDepartureDateTime;
    this.arrivalETA = destination.EstimatedArrivalDateTime;
    this.weight = destination.GrossWeight;
    this.weightUnitId = destination.GrossUnitOfWeightId;
    this.transporters = destination.Transporters;
    this.Packages = destination.Packages;
}

/**
 * Method to get POST formdata for destination in transfer
 */
Destination.prototype.getFormData = function () {
    return {
        RecipientLicenseNumber: this.recipientLicenseNo,
        TransferTypeName: this.transferTypeName,
        PlannedRoute: this.plannedRoute,
        EstimatedDepartureDateTime: this.departureETA,
        EstimatedArrivalDateTime: this.arrivalETA,
        GrossWeight: this.weight,
        GrossUnitOfWeightId: this.weightUnitId,
        Transporters: this.transporters,
        Packages: this.Packages
    }
}


module.exports = Destination;