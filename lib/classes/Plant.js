function Plant(Merchant) {
    this.id = Id;
    this.label = Label;
    this.state = State;
    this.growthPhase = GrowthPhase;
    /**plant batch type, id, name */
    this.patientLicenseNumber = PatientLicenseNumber;
    this.isOnHold = IsOnHold;
    this.destroyedNote = DestroyedNote;
    this.destroyedByUserName = DestroyedByUserName;
    this.lastModified = LastModified;
}

/**
 * template for generating a strain
 * @param { { number } StrainId, { string } StrainName}
 */
function Strain({ StrainId, StrainName }) {
    this.id = StrainId;
    this.name = StrainName;
}

/**
 * template for generating location
 * @param { { number } LocationId, { string } LocationName, { string } LocationTypeName }
 */
function Location({ LocationId, LocationName, LocationTypeName }) {
    this.id = LocationId;
    this.name = LocationName;
    this.type = LocationTypeName;
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
function Dates({ PlantedDate, VegetativeDate, FloweringDate, HarvestedDate, DestroyedDate}) {
    this.planted = PlantedDate;
    this.Vegetative = VegetativeDate;
    this.flowering = FloweringDate;
    this.harvested = HarvestedDate;
    this.destroyed = DestroyedDate;
}