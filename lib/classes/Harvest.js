function Harvest(harvest) {
  this.id = harvest.Id;
  this.name = harvest.Name;
  this.type = harvest.HarvestType;
  this.strains = Strains;
  this.isOnHold = IsOnHold;
  this.patientLicenseNumber = PatientLicenseNumber;
  this.plantCount = PlantCount;
  this.packageCount = PackageCount;
  this.lastModified = LastModified;
}

/**
 * Template for the source strain of the harvest
 * @param {{ number } SourceStrainCount,  { string } SourceStrainNames }
 *
 */
function SourceStrain() {
  this.count = SourceStrainCount;
  this.names = SourceStrainNames;
}

/**
 * template for drying location of the product
 * @param {{ number } DryingLocationId,  { string } DryingLocationName, { string } DryingLocationTypeName }
 */
function DryingLocation({ DryingLocationId, DryingLocationName, DryingLocationTypeName }) {
  this.id = DryingLocationId;
  this.name = DryingLocationName;
  this.type = DryingLocationTypeName;
}

/**
 * template for drying location of the product
 * @param {{ number } DryingLocationId,  { string } DryingLocationName, { string } DryingLocationTypeName }
 */
function LabTesting(params) {
  this.state = LabTestingState;
  this.stateDate = LabTestingStateDate;
}

/**
 * template for weight of the product
 * @param {{ number } CurrentWeight,  { number } TotalWasteWeight, { number } TotalWetWeight, { number } TotalRestoredWeight, { number } TotalPackagedWeight,{ number } UnitOfWeightName }
 */
function Weight() {
  this.current = CurrentWeight;
  this.waste = TotalWasteWeight;
  this.wet = TotalWetWeight;
  this.restored = TotalRestoredWeight;
  this.packaged = TotalPackagedWeight;
  this.unitName = UnitOfWeightName;
}

/**
 * template for dates associated with harvesting
 * @param {{ Date } HarvestStartDate,  { Dates } FinishedDate, { Dates } ArchivedDate }
 */
function Dates() {
  this.startDate = HarvestStartDate;
  this.finishedDate = FinishedDate;
  this.archivedDate = ArchivedDate;
}
