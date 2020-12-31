function Sale() {

}


function customerTypes() {
    return [
        "Consumer",
        "Patient",
        "Caregiver",
        "ExternalPatient"
    ]
}
/**
 * 
 * 
 */
function Recipient({ }) {
    this.id = Id;
    this.number = RecipientNo;
    this.salesDateTime = SalesDateTime;
    this.salesCustomerType = SalesCustomerType;
    this.identificationMethod = IdentificationMethod;
    this.totalPackages = TotalPackages;
    this.totalPrice = TotalPrice;
    // this.transactions = Transactions;
    this.isFinal = IsFinal;
    this.archivedDate = ArchivedDate;
    this.recordedDateTime = RecordedDateTime;
    this.recordedByUserName = RecordedByUserName;
    this.lastModified = LastModified;
}

function Patient({ PatientLicenseNumber, CaregiverLicenseNumber }) {
    this.licenseNo = PatientLicenseNumber;
    this.caregiverLicenseNo = CaregiverLicenseNumber;
}

function Transactions() {
    this.total = TotalTransactions;
    this.salesDate = SalesDate;
    this.totalPrice = TotalPrice;
    this.productName = ProductName;
    this.productCategoryName = ProductCategoryName;
    this.itemStrainName = ItemStrainName;
    this.quantitySold = QuantitySold;
    this.unitOfMeasureName = UnitOfMeasureName;
    this.unitOfMeasureAbbreviation = UnitOfMeasureAbbreviation;
    this.totalPrice = TotalPrice;
    this.salesDeliveryState = SalesDeliveryState;
    this.archivedDate = ArchivedDate;
    this.recordedDateTime = RecordedDateTime;
    this.recordedByUserName = RecordedByUserName;
    this.lastModified = LastModified;
}

/** 
 * template to generate Item Unit
 * @param { { string }ItemUnitThcPercent, { string } ItemUnitThcContent, { string } ItemUnitThcContentUnitOfMeasureName, { string } ItemUnitThcContentDose, { string } ItemUnitThcContentDoseUnitOfMeasureName, { string }ItemUnitCbdPercent, { string } ItemUnitCbdContent, { string } ItemUnitCbdContentUnitOfMeasureName, { string } ItemUnitCbdContentDose, { string } ItemUnitCbdContentDoseUnitOfMeasureName, { number } ItemUnitQuantity, { string } ItemUnitQuantityUnitOfMeasureName, { string } ItemServingSize, { string } ItemSupplyDurationDays }
*/
function ItemUnit({ ItemUnitThcPercent, ItemUnitThcContent, ItemUnitThcContentUnitOfMeasureName, ItemUnitThcContentDose, ItemUnitThcContentDoseUnitOfMeasureName, ItemUnitCbdPercent, ItemUnitCbdContent, ItemUnitCbdContentUnitOfMeasureName, ItemUnitCbdContentDose, ItemUnitCbdContentDoseUnitOfMeasureName, ItemUnitQuantity, ItemUnitQuantityUnitOfMeasureName, ItemServingSize, ItemSupplyDurationDays }) {
    this.thc = new Concentration(ItemUnitThcPercent, ItemUnitThcContent, ItemUnitThcContentUnitOfMeasureName, ItemUnitThcContentDose, ItemUnitThcContentDoseUnitOfMeasureName);
    this.cbd = new Concentration(ItemUnitCbdPercent, ItemUnitCbdContent, ItemUnitCbdContentUnitOfMeasureName, ItemUnitCbdContentDose, ItemUnitCbdContentDoseUnitOfMeasureName);
    this.quantity = ItemUnitQuantity;
    this.quantityUnitOfMeasurement = ItemUnitQuantityUnitOfMeasureName;
    this.servingSize = ItemServingSize;
    this.supplyDurationDays = ItemSupplyDurationDays;
}

/**
 * Template to determine/set content  &  concentration in items
 * @param { string } percentage 
 * @param { string } content 
 * @param { string } contentUnitOfMeasurement 
 * @param { string } contentDose 
 * @param { string } contentDoseUnitOfMeasurement 
 */
function Concentration(percentage, content, contentUnitOfMeasurement, contentDose, contentDoseUnitOfMeasurement) {
    this.percentage = percentage;
    this.content = content;
    this.contentUnitOfMeasurement = contentUnitOfMeasurement;
    this.contentDose = contentDose;
    this.doseUnitOfMeasurement = contentDoseUnitOfMeasurement
}

/**
 * Template for unit dimensions of the item
 * @param { ItemUnitVolume, ItemUnitVolumeUnitOfMeasureName, ItemUnitWeight, ItemUnitWeightUnitOfMeasureName}
 */
function ItemDimensions({ ItemUnitVolume, ItemUnitVolumeUnitOfMeasureName, ItemUnitWeight, ItemUnitWeightUnitOfMeasureName }) {
    this.volume = ItemUnitVolume;
    this.volumeUnitOfMeasurement = ItemUnitVolumeUnitOfMeasureName;
    this.weight = ItemUnitWeight;
    this.weightUnitOfMeasurement = ItemUnitWeightUnitOfMeasureName;
}

/**
 * Template for package
 * @param {{ number } TotalPackages, { number }PackageId , { string }PackageLabel} 
 */

function Package({ TotalPackages, PackageId, PackageLabel }) {
    this.totalPackages = TotalPackages;
    this.packageId = PackageId;
    this.packageLabel = PackageLabel;
}