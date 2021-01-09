const PlantBatch = require("./PlantBatch.js");
/**
 * Template for plant
 * @param { Object } plant 
 */
function Plant(plant) {
    const {
        HarvestId,
        HarvestedUnitOfWeightName,
        HarvestedUnitOfWeightAbbreviation,
        HarvestedWetWeight,
        HarvestCount,
        PlantedDate, 
        VegetativeDate,
        FloweringDate,
        HarvestedDate,
        DestroyedDate
    } = plant;
    this.id = plant.Id;
    this.label = plant.Label;
    this.state = plant.State;
    this.growthPhase = plant.GrowthPhase;
    this.plantBatch = new PlantBatch(plant);
    this.patientLicenseNumber = plant.PatientLicenseNumber;
    this.isOnHold = plant.IsOnHold;
    this.destroyedNote = plant.DestroyedNote;
    this.destroyedByUserName = plant.DestroyedByUserName;
    this.lastModified = plant.LastModified;
    this.harvest = new Harvest({ HarvestId, HarvestedUnitOfWeightName, HarvestedUnitOfWeightAbbreviation, HarvestedWetWeight, HarvestCount });
    this.dates = new Dates({ PlantedDate, VegetativeDate, FloweringDate, HarvestedDate, DestroyedDate });
}


/**
 * template for harvest
 * @param { { number } HarvestId, { string } HarvestedUnitOfWeightName, { string } HarvestedUnitOfWeightAbbreviation, { number } HarvestedWetWeight, { number } HarvestCount}
 */
function Harvest({ HarvestId, HarvestedUnitOfWeightName, HarvestedUnitOfWeightAbbreviation, HarvestedWetWeight, HarvestCount }) {
    this.id = HarvestId;
    this.weightUnit = HarvestedUnitOfWeightName;
    this.weightUnitAbbriviation = HarvestedUnitOfWeightAbbreviation;
    this.wetWeight = HarvestedWetWeight;
    this.count = HarvestCount;
}

/**
 * template for dates for plants
 * @param { { number } HarvestId, { string } HarvestedUnitOfWeightName, { string } HarvestedUnitOfWeightAbbreviation, { number } HarvestedWetWeight, { number } HarvestCount}
 */
function Dates({ PlantedDate, VegetativeDate, FloweringDate, HarvestedDate, DestroyedDate }) {
    this.planted = PlantedDate;
    this.Vegetative = VegetativeDate;
    this.flowering = FloweringDate;
    this.harvested = HarvestedDate;
    this.destroyed = DestroyedDate;
}

module.exports = Plant;