/**
 * Template for Location
 */
function Location(locationData) {
  this.id = locationData.Id;
  this.name = locationData.Name;
  this.typeId = locationData.LocationTypeId;
  this.typeName = locationData.LocationTypeName;
  this.forPlantBatches = locationData.ForPlantBatches;
  this.forPlants = locationData.ForPlants;
  this.forHarvests = locationData.ForHarvests;
  this.forPackages = locationData.ForPackages;
}

module.exports = Location;
