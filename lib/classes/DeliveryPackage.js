/**Merchant or facility  */

function DeliveryPackage(params) {
    this.id = Id;
    this.label = Label;
    this.type = PackageType;
    this.sourceHarvestNames = SourceHarvestNames;
    this.quantity = Quantity;
    this.unitOfMeasureName = UnitOfMeasureName;
    this.unitOfMeasureAbbreviation = UnitOfMeasureAbbreviation;
    this.patientLicenseNumber = PatientLicenseNumber;
    this.itemFromFacilityLicenseNumber = ItemFromFacilityLicenseNumber;
    this.itemFromFacilityName = ItemFromFacilityName;
    this.itemStrainName = ItemStrainName;
    this.note = Note;
    this.packagedDate = PackagedDate;
    this.initialLabTestingState = InitialLabTestingState;
    this.labTestingState = LabTestingState;
    this.labTestingStateDate = LabTestingStateDate;
    this.isProductionBatch = IsProductionBatch;
    this.productionBatchNumber = ProductionBatchNumber;
    this.isTradeSample = IsTradeSample;
    this.isDonation = IsDonation;
    this.isDonationPersistent = IsDonationPersistent;
    this.sourcePackageIsDonation = SourcePackageIsDonation;
    this.isTestingSample = IsTestingSample;
    this.isProcessValidationTestingSample = IsProcessValidationTestingSample;
    this.productRequiresRemediation = ProductRequiresRemediation;
    this.containsRemediatedProduct = ContainsRemediatedProduct;
    this.remediationDate = RemediationDate;
    this.isOnHold = IsOnHold;
    this.archivedDate = ArchivedDate;
    this.finishedDate = FinishedDate;
    this.lastModified = LastModified;
    this.item = Item;
}

/**
 * template for Recieved package
 * @param { { Date } ReceivedDateTime, { number } ReceivedFromManifestNumber,  { number } ReceivedFromFacilityLicenseNumber, { string } ReceivedFromFacilityName} 
 */
function Recieved({ReceivedDateTime, ReceivedFromManifestNumber, ReceivedFromFacilityLicenseNumber, ReceivedFromFacilityName}) {
    this.dateTime = ReceivedDateTime;
    this.shipperManifestNumber = ReceivedFromManifestNumber;
    this.shipperFacilityLicenseNumber = ReceivedFromFacilityLicenseNumber;
    this.shippeFarcilityName = ReceivedFromFacilityName;
}

/**
 * template for generating product
 * @param { { number } ProductId, { string } ProductName, { string } ProductCategoryName} 
 */
function Product({ ProductId, ProductName, ProductCategoryName}) {
    this.productId = ProductId;
    this.productName = ProductName;
    this.productCategoryName = ProductCategoryName;
}

module.exports = DeliveryPackage;