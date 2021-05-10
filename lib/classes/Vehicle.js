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

/** Method to return POST form data for vehicle */
Vehicle.prototype.getFormData = function () {
  return {
    VehicleMake: this.make,
    VehicleModel: this.model,
    VehicleLicensePlateNumber: this.licensePlateNo,
  };
};

module.exports = Vehicle;
