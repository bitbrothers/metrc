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
 * template for generating source packahe
 * @param { { number } SourcePackageId, { string } SourcePackageLabel }
 */
function SourcePackage({ SourcePackageId, SourcePackageLabel }) {
  this.id = SourcePackageId;
  this.label = SourcePackageLabel;
}

/**
 * template for generating source plant
 * @param { {number } SourcePlantId, { string } SourcePlantLabel, { number } SourcePlantBatchId, { string } SourcePlantBatchName }
 */
function SourcePlant({ SourcePlantId, SourcePlantLabel, SourcePlantBatchId, SourcePlantBatchName }) {
  this.id = SourcePlantId;
  this.label = SourcePlantLabel;
  this.batchId = SourcePlantBatchId;
  this.batchName = SourcePlantBatchName;
}

/**
 * template for generating source plant
 * @param { {number } StrainId, { string } StrainName
 */
function Strain({ StrainId, StrainName }) {
  this.id = StrainId;
  this.name = StrainName;
}

function PlantBatch(plantBatch) {
  const {
    LocationId,
    LocationName,
    LocationTypeName,
    SourcePackageId,
    SourcePackageLabel,
    StrainId,
    StrainName,
    SourcePlantId,
    SourcePlantLabel,
    SourcePlantBatchId,
    SourcePlantBatchName,
  } = plantBatch;
  this.id = plantBatch.Id;
  this.name = plantBatch.Name;
  this.type = plantBatch.Type;
  this.patientLicenseNumber = plantBatch.PatientLicenseNumber;
  this.untrackedCount = plantBatch.UntrackedCount;
  this.trackedCount = plantBatch.TrackedCount;
  this.packagedCount = plantBatch.PackagedCount;
  this.harvestedCount = plantBatch.HarvestedCount;
  this.destroyedCount = plantBatch.DestroyedCount;
  this.plantedDate = plantBatch.PlantedDate;
  this.lastModified = plantBatch.LastModified;
  this.location = new Location({ LocationId, LocationName, LocationTypeName });
  this.strain = new Strain({ StrainId, StrainName });
  this.sourcePackage = new SourcePackage({ SourcePackageId, SourcePackageLabel });
  this.sourcePlant = new SourcePlant({ SourcePlantId, SourcePlantLabel, SourcePlantBatchId, SourcePlantBatchName });
}

module.exports = PlantBatch;
