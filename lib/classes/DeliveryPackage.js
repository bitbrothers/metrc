const Item = require("./Item.js");

function DeliveryPackage(package) {
    const {
        ProductId,
        ProductName,
        ProductCategoryName,
        ReceivedDateTime,
        ReceivedFromManifestNumber,
        ReceivedFromFacilityLicenseNumber,
        ReceivedFromFacilityName
    } = package;
    this.id = package.PackageId;
    this.label = package.PackageLabel;
    this.type = package.PackageType;
    this.sourceHarvestNames = package.SourceHarvestNames;
    this.quantity = package.Quantity;
    this.unitOfMeasureName = package.UnitOfMeasureName;
    this.unitOfMeasureAbbreviation = package.UnitOfMeasureAbbreviation;
    this.patientLicenseNumber = package.PatientLicenseNumber;
    this.itemFromFacilityLicenseNumber = package.ItemFromFacilityLicenseNumber;
    this.itemFromFacilityName = package.ItemFromFacilityName;
    this.itemStrainName = package.ItemStrainName;
    this.note = package.Note;
    this.packagedDate = package.PackagedDate;
    this.initialLabTestingState = package.InitialLabTestingState;
    this.labTestingState = package.LabTestingState;
    this.labTestingStateDate = package.LabTestingStateDate;
    this.isProductionBatch = package.IsProductionBatch;
    this.productionBatchNumber = package.ProductionBatchNumber;
    this.isTradeSample = package.IsTradeSample;
    this.isDonation = package.IsDonation;
    this.isDonationPersistent = package.IsDonationPersistent;
    this.sourcePackageIsDonation = package.SourcePackageIsDonation;
    this.isTestingSample = package.IsTestingSample;
    this.isProcessValidationTestingSample = package.IsProcessValidationTestingSample;
    this.productRequiresRemediation = package.ProductRequiresRemediation;
    this.containsRemediatedProduct = package.ContainsRemediatedProduct;
    this.remediationDate = package.RemediationDate;
    this.isOnHold = package.IsOnHold;
    this.archivedDate = package.ArchivedDate;
    this.finishedDate = package.FinishedDate;
    this.lastModified = package.LastModified;
    this.item = package.Item;
    this.recieved = new Recieved({ ReceivedDateTime, ReceivedFromManifestNumber, ReceivedFromFacilityLicenseNumber, ReceivedFromFacilityName });
    this.product = new Product({ ProductId, ProductName, ProductCategoryName });
    this.item = new Item(package);
}

/**
 * template for Recieved package
 * @param { { Date } ReceivedDateTime, { number } ReceivedFromManifestNumber,  { number } ReceivedFromFacilityLicenseNumber, { string } ReceivedFromFacilityName} 
 */
function Recieved({ ReceivedDateTime, ReceivedFromManifestNumber, ReceivedFromFacilityLicenseNumber, ReceivedFromFacilityName }) {
    this.dateTime = ReceivedDateTime;
    this.shipperManifestNumber = ReceivedFromManifestNumber;
    this.shipperFacilityLicenseNumber = ReceivedFromFacilityLicenseNumber;
    this.shippeFarcilityName = ReceivedFromFacilityName;
}

/**
 * template for generating product
 * @param { { number } ProductId, { string } ProductName, { string } ProductCategoryName} 
 */
function Product({ ProductId, ProductName, ProductCategoryName }) {
    this.productId = ProductId;
    this.productName = ProductName;
    this.productCategoryName = ProductCategoryName;
}

module.exports = DeliveryPackage;