function Sale(merchant) {

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
 * Template for package
 * @param {{ number } TotalPackages, { number }PackageId , { string }PackageLabel} 
 */

function Package({ TotalPackages, PackageId, PackageLabel }) {
    this.totalPackages = TotalPackages;
    this.packageId = PackageId;
    this.packageLabel = PackageLabel;
}