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
    this.itemText = package.Item;
    this.weight = package.GrossWeight;
    this.weightUnit = package.GrossUnitOfWeightName;
    this.wholesalePrice = package.WholesalePrice;
    this.itemName = package.ItemName;
    this.tag = package.Tag;
    this.location = package.Location;
    this.unitOfMeasure = package.UnitOfMeasure;
    this.useSameItem = package.UseSameItem;
    this.actualDate = package.ActualDate;
    this.ingredients = package.Ingredients;
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

DeliveryPackage.prototype.getTransferFormData = function () {
    return {
        ItemName: this.itemName,
        Quantity: this.quantity,
        UnitOfMeasureName: this.unitOfMeasureName,
        PackagedDate: this.packagedDate,
        GrossWeight: this.weight,
        GrossUnitOfWeightName: this.weightUnit,
        WholesalePrice: this.wholesalePrice
    }
}

DeliveryPackage.prototype.getFormData = function () {
    return {
        Tag: this.tag,
        Location: this.location,
        Item: this.itemText,
        Quantity: this.quantity,
        UnitOfMeasure: this.unitOfMeasure,
        PatientLicenseNumber: this.patientLicenseNumber,
        Note: this.note,
        IsProductionBatch: this.isProductionBatch,
        ProductionBatchNumber: this.productionBatchNumber,
        IsDonation: this.isDonation,
        ProductRequiresRemediation: this.productRequiresRemediation,
        UseSameItem: this.useSameItem,
        ActualDate: this.actualDate,
        Ingredients: this.ingredients
    }
}
module.exports = DeliveryPackage;