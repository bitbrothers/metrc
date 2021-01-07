function PlantingPackage(package) {
    this.PackageLabel = package.PackageLabel;
    this.PackageAdjustmentAmount = package.PackageAdjustmentAmount;
    this.PackageAdjustmentUnitOfMeasureName = package.PackageAdjustmentUnitOfMeasureName;
    this.PlantBatchName = package.PlantBatchName;
    this.PlantBatchType = package.PlantBatchType;
    this.PlantCount = package.PlantCount;
    this.LocationName = package.LocationName;
    this.StrainName = package.StrainName;
    this.PatientLicenseNumber = package.PatientLicenseNumber;
    this.PlantedDate = package.PlantedDate;
    this.UnpackagedDate = package.UnpackagedDate;
}

module.exports = PlantingPackage;