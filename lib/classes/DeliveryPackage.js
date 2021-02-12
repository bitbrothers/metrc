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
    this.label = package.PackageLabel || package.Label;
    this.type = package.PackageType;
    this.sourceHarvestNames = package.SourceHarvestNames;
    this.sourcePackageLabels = package.SourcePackageLabels;
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
    this.remediationMethodName = package.RemediationMethodName;
    this.RemediationSteps = package.RemediationSteps;
    this.isOnHold = package.IsOnHold;
    this.archivedDate = package.ArchivedDate;
    this.finishedDate = package.FinishedDate;
    this.lastModified = package.LastModified;
    this.itemTitle = package.Item;
    this.weight = package.GrossWeight;
    this.receivedWeightUnit = package.GrossUnitOfWeightName;
    this.wholesalePrice = package.WholesalePrice;
    this.itemName = package.ItemName;
    this.tag = package.Tag;
    this.location = package.Location;
    this.unitOfMeasure = package.UnitOfMeasure;
    this.useSameItem = package.UseSameItem;
    this.actualDate = package.ActualDate;
    this.ingredients = package.Ingredients;
    this.moveDate = package.MoveDate;
    this.adjustment = new AdjustmentPackage(package);
    this.recieved = new Recieved({ ReceivedDateTime, ReceivedFromManifestNumber, ReceivedFromFacilityLicenseNumber, ReceivedFromFacilityName });
    this.product = new Product({ ProductId, ProductName, ProductCategoryName });
    this.item = new Item(package);
    this.shippedQuantity = package.ShippedQuantity;
    this.shippedUnitOfMeasureName = package.ShippedUnitOfMeasureName;
    this.receivedQuantity = package.ReceivedQuantity;
    this.receivedUnitOfMeasureName = package.ReceivedUnitOfMeasureName;
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

/**
 * template for adjustment of package
 */
function AdjustmentPackage(packageAdjustmentData) {
    this.Label = packageAdjustmentData.Label,
        this.Quantity = packageAdjustmentData.Quantity,
        this.UnitOfMeasure = packageAdjustmentData.UnitOfMeasure,
        this.AdjustmentReason = packageAdjustmentData.AdjustmentReason,
        this.AdjustmentDate = packageAdjustmentData.AdjustmentDate,
        this.ReasonNote = packageAdjustmentData.ReasonNote;
}

/**
 * Method to get POST data for a package in transfer
 */
DeliveryPackage.prototype.getTransferFormData = function () {
    return {
        ItemName: this.itemName,
        Quantity: this.quantity,
        UnitOfMeasureName: this.unitOfMeasureName,
        PackagedDate: this.packagedDate,
        GrossWeight: this.weight,
        GrossUnitOfWeightName: this.receivedWeightUnit,
        WholesalePrice: this.wholesalePrice
    }
}

/*Method to get POST data for package
*/
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

/**
 * method to get item data for change item
 */
DeliveryPackage.prototype.getItemFormData = function () {
    return {
        Label: this.label,
        Item: this.itemTitle
    }
}

/**
 * method to get notes data for change note
 */
DeliveryPackage.prototype.getNoteFormData = function () {
    return {
        PackageLabel: this.packageLabel,
        Note: this.note
    }
}

/**
 * method to get location data for change location
 */
DeliveryPackage.prototype.getLocationFormData = function () {
    return {
        Label: this.label,
        Location: this.location,
        MoveDate: this.moveDate
    }
}

/**
 * method to get adjustment data
 */
DeliveryPackage.prototype.getAdjustmentData = function () {
    return { ...this.adjustment };
}

/**
 * method to get remediation data
 */
DeliveryPackage.prototype.getRemediationData = function () {
    return {
        PackageLabel: "ABCDEF012345670000020201",
        RemediationMethodName: "Further Drying",
        RemediationDate: "2016-10-17",
        RemediationSteps: "Used hair dryer"
    };
}

/**
 * method to get Finished packages data
 */
DeliveryPackage.prototype.getFinishedPackageData = function () {
    return {
        Label: this.label,
        ActualDate: this.actualDate
    };
}

/**
 * method to get unFinished packages data
 */
DeliveryPackage.prototype.getUnFinishedPackageData = function () {
    return {
        Label: this.label
    };
}

module.exports = DeliveryPackage;