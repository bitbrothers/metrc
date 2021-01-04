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
        SourcePlantBatchName
    } = plantBatch;
    this.id = plantbBatch.Id;
    this.name = plantbBatch.Name;
    this.type = plantbBatch.Type;
    this.patientLicenseNumber = plantbBatch.PatientLicenseNumber;
    this.untrackedCount = plantbBatch.UntrackedCount;
    this.trackedCount = plantbBatch.TrackedCount;
    this.packagedCount = plantbBatch.PackagedCount;
    this.harvestedCount = plantbBatch.HarvestedCount;
    this.destroyedCount = plantbBatch.DestroyedCount;
    this.plantedDate = plantbBatch.PlantedDate;
    this.lastModified = plantbBatch.LastModified;
    this.location = new Location({ LocationId, LocationName, LocationTypeName });
    this.strain = new Strain({ StrainId, StrainName });
    this.sourcePackage = new SourcePackage({ SourcePackageId, SourcePackageLabel });
    this.sourcePlant = new SourcePlant({ SourcePlantId, SourcePlantLabel, SourcePlantBatchId, SourcePlantBatchName })
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

module.exports = PlantBatch;