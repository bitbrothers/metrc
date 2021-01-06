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
    DriverLicenseNumber
  }) {
    this.name = DriverName;
    this.licenseNo = DriverLicenseNumber;
    this.occupationalLicenseNo = DriverOccupationalLicenseNumber
    this.vehicleLicenseNo = DriverVehicleLicenseNumber;
  }

  /**
   * returns form data for driver for POST call
   */
  Driver.prototype.getFormData =  function () {
    return {
      DriverName: this.name,
      DriverOccupationalLicenseNumber: this.occupationalLicenseNo,
      DriverLicenseNumber: this.licenseNo
    }
  }

  module.exports = Driver;