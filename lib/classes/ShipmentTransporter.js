/**
 * Template for generating Shipment transporter (person/body/orgnization who transports) object
 * @param { Object } transporter
 */
function ShipmentTransporter(transporter) {
  this.facilityLicenseNo = transporter.TransporterFacilityLicenseNumber;
  this.facilityName = transporter.TransporterFacilityName;
  this.phone = transporter.PhoneNumberForQuestions;
  this.isLayover = transporter.IsLayover;
  this.departureETA = transporter.EstimatedDepartureDateTime;
  this.arrivalETA = transporter.EstimatedArrivalDateTime;
  this.details = transporter.TransporterDetails;
  this.driver = transporter.Driver;
  this.vehicle = transporter.Vehicle;
}

ShipmentTransporter.prototype.getFormData = function () {
  const transporterData = {
    TransporterFacilityLicenseNumber: this.facilityLicenseNo,
    IsLayover: this.isLayover,
    EstimatedDepartureDateTime: this.departureETA,
    EstimatedArrivalDateTime: this.arrivalETA,
    TransporterDetails: this.details,
    PhoneNumberForQuestions: this.phone,
  };
  return { ...transporterData, ...this.vehicle, ...this.driver };
};

module.exports = ShipmentTransporter;
