function PlantBatch() {
    this.id = Id;
    this.name = Name;
    this.type = Type;
    this.patientLicenseNumber = PatientLicenseNumber;
    this.untrackedCount = UntrackedCount;
    this.trackedCount = TrackedCount;
    this.packagedCount = PackagedCount;
    this.harvestedCount = HarvestedCount;
    this.destroyedCount = DestroyedCount;
    this.plantedDate = PlantedDate;
    this.lastModified = LastModified;
}

/**
 * template for generating location
 * @param { { number } LocationId, { string } LocationName, { string } LocationTypeName }
 */
function Location({ LocationId, LocationName, LocationTypeName}) {
    this.id = LocationId;
    this.name = LocationName;
    this.type = LocationTypeName;
}

/**
 * template for generating source packahe
 * @param { { number } SourcePackageId, { string } SourcePackageLabel }
 */
function SourcePackage({ SourcePackageId, SourcePackageLabel}) {
    this.id = SourcePackageId;
    this.label = SourcePackageLabel;
}

/**
 * template for generating source plant 
 * @param { {number } SourcePlantId, { string } SourcePlantLabel, { number } SourcePlantBatchId, { string } SourcePlantBatchName }
 */
function sourcePlant({ SourcePlantId, SourcePlantLabel, SourcePlantBatchId, SourcePlantBatchName }) {
    this.id = SourcePlantId;
    this.label = SourcePlantLabel;
    this.batchId = SourcePlantBatchId;
    this.batchName = SourcePlantBatchName;
}

/**
 * template for generating source plant 
 * @param { {number } StrainId, { string } StrainName
 */
function Strain({ StrainId, StrainName}) {
    this.id = StrainId;
    this.name = StrainName;
}