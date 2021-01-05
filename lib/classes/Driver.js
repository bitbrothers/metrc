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

  module.exports = Driver;