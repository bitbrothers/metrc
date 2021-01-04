const Item = require("./Item.js");

function Sale(reciept) {
    this.receipt = new Receipt(reciept);
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
 * template for Receipt
 * 
 */
function Receipt(receipt) {
    const {
        PatientLicenseNumber,
        CaregiverLicenseNumber
    } = receipt;
    this.id = receipt.Id;
    this.number = receipt.RecipientNo;
    this.salesDateTime = receipt.SalesDateTime;
    this.salesCustomerType = receipt.SalesCustomerType;
    this.identificationMethod = receipt.IdentificationMethod;
    this.totalPackages = receipt.TotalPackages;
    this.totalPrice = receipt.TotalPrice;
    this.transactions = this.getTransactions(receipt.Transaction);
    this.isFinal = receipt.IsFinal;
    this.archivedDate = receipt.ArchivedDate;
    this.recordedDateTime = receipt.RecordedDateTime;
    this.recordedByUserName = receipt.RecordedByUserName;
    this.lastModified = receipt.LastModified;
    this.patient = new Patient({ PatientLicenseNumber, CaregiverLicenseNumber });
}

Receipt.prototype.getTransactions = function (transactions) {
    return transactions.map(transactionItem => {
        return transactionItem = new Transaction(transactionItem);
    });
}

/**
 * template for a Patient
 * @param { PatientLicenseNumber, CaregiverLicenseNumber}
 */
function Patient({ PatientLicenseNumber, CaregiverLicenseNumber }) {
    this.licenseNo = PatientLicenseNumber;
    this.caregiverLicenseNo = CaregiverLicenseNumber;
}

/**
 * template for a Patient
 * @param { object } transaction
 */
function Transaction(transaction) {
    const {
        TotalPackages,
        PackageId,
        PackageLabel,
        ItemUnitThcPercent,
        ItemUnitThcContent,
        ItemUnitThcContentUnitOfMeasureName,
        ItemUnitThcContentDose,
        ItemUnitThcContentDoseUnitOfMeasureName,
        ItemUnitCbdPercent,
        ItemUnitCbdContent,
        ItemUnitCbdContentUnitOfMeasureName,
        ItemUnitCbdContentDose,
        ItemUnitCbdContentDoseUnitOfMeasureName,
        ItemUnitQuantity,
        ItemUnitQuantityUnitOfMeasureName,
        ItemServingSize,
        ItemSupplyDurationDays
    } = transaction;
    this.total = transaction.TotalTransactions;
    this.salesDate = transaction.SalesDate;
    this.totalPrice = transaction.TotalPrice;
    this.productName = transaction.ProductName;
    this.productCategoryName = transaction.ProductCategoryName;
    this.itemStrainName = transaction.ItemStrainName;
    this.quantitySold = transaction.QuantitySold;
    this.unit = transaction.UnitOfMeasureName;
    this.unitAbbriviation = transaction.UnitOfMeasureAbbreviation;
    this.salesDeliveryState = transaction.SalesDeliveryState;
    this.archivedDate = transaction.ArchivedDate;
    this.recordedDateTime = transaction.RecordedDateTime;
    this.recordedByUserName = Rtransaction.ecordedByUserName;
    this.lastModified = transaction.LastModified;
    this.package = new Package({
        TotalPackages,
        PackageId,
        PackageLabel
    });
    this.item = new Item({
        TotalPackages,
        PackageId,
        PackageLabel,
        ItemUnitThcPercent,
        ItemUnitThcContent,
        ItemUnitThcContentUnitOfMeasureName,
        ItemUnitThcContentDose,
        ItemUnitThcContentDoseUnitOfMeasureName,
        ItemUnitCbdPercent,
        ItemUnitCbdContent,
        ItemUnitCbdContentUnitOfMeasureName,
        ItemUnitCbdContentDose,
        ItemUnitCbdContentDoseUnitOfMeasureName,
        ItemUnitQuantity,
        ItemUnitQuantityUnitOfMeasureName,
        ItemServingSize,
        ItemSupplyDurationDays
    });

}

/**
 * Template for day transaction
 * @param { object } transaction
 */
function DayTransaction(transaction) {
    this.salesDate = transaction.SalesDate;
    this.totalTransactions = transaction.TotalTransactions;
    this.totalPackages = transaction.TotalPackages;
    this.price = transaction.TotalPrice;
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


Sale.prototype.getActiveReciepts = async function () {
}

Sale.prototype.getInactiveReciepts = async function () {

}
Sale.prototype.getRecieptById = async function () {

}
Sale.prototype.getTransactions = async function () {

}

module.exports = {
    Sale,
    DayTransaction,
    Transaction
};