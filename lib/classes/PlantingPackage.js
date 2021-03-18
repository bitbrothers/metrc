function PlantingPackage(pkg) {
    this.PackageLabel = pkg.PackageLabel;
    this.PackageAdjustmentAmount = pkg.PackageAdjustmentAmount;
    this.PackageAdjustmentUnitOfMeasureName = pkg.PackageAdjustmentUnitOfMeasureName;
    this.PlantBatchName = pkg.PlantBatchName;
    this.PlantBatchType = pkg.PlantBatchType;
    this.PlantCount = pkg.PlantCount;
    this.LocationName = pkg.LocationName;
    this.StrainName = pkg.StrainName;
    this.PatientLicenseNumber = pkg.PatientLicenseNumber;
    this.PlantedDate = pkg.PlantedDate;
    this.UnpackagedDate = pkg.UnpackagedDate;
}

module.exports = PlantingPackage;