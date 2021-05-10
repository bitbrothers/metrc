const Item = require('./Item.js');

function customerTypes() {
  return ['Consumer', 'Patient', 'Caregiver', 'ExternalPatient'];
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

/**
 * template for a Patient
 * @param { PatientLicenseNumber, CaregiverLicenseNumber}
 */
function Patient({ PatientLicenseNumber, CaregiverLicenseNumber }) {
  this.licenseNo = PatientLicenseNumber;
  this.caregiverLicenseNo = CaregiverLicenseNumber;
}

/**
 * template for Receipt
 *
 */

function Receipt(receipt) {
  const { PatientLicenseNumber, CaregiverLicenseNumber } = receipt;
  this.id = receipt.Id;
  this.number = receipt.RecipientNo;
  this.salesDateTime = receipt.SalesDateTime;
  this.salesCustomerType = receipt.SalesCustomerType;
  this.identificationMethod = receipt.IdentificationMethod;
  this.totalPackages = receipt.TotalPackages;
  this.totalPrice = receipt.TotalPrice;
  this.transactions = receipt.Transactions;
  this.isFinal = receipt.IsFinal;
  this.archivedDate = receipt.ArchivedDate;
  this.recordedDateTime = receipt.RecordedDateTime;
  this.recordedByUserName = receipt.RecordedByUserName;
  this.lastModified = receipt.LastModified;
  this.patient = new Patient({ PatientLicenseNumber, CaregiverLicenseNumber });
}

Receipt.prototype.getTransactions = function (transactions) {
  return transactions.map((transactionItem) => {
    return (transactionItem = new Transaction(transactionItem));
  });
};

function Sale(reciept) {
  this.receipt = new Receipt(reciept);
}

/**
 * template for a Transaction
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
    ItemSupplyDurationDays,
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
  this.recordedByUserName = transaction.RecordedByUserName;
  this.lastModified = transaction.LastModified;
  this.quantity = transaction.Quantity;
  this.amount = transaction.TotalAmount;
  this.measureUnit = transaction.UnitOfMeasure;
  this.package = new Package({
    TotalPackages,
    PackageId,
    PackageLabel,
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
    ItemSupplyDurationDays,
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

Sale.prototype.getFormData = function (isPost, Id) {
  const salesData = {
    SalesDateTime: this.receipt.salesDateTime,
    SalesCustomerType: this.receipt.salesCustomerType,
    PatientLicenseNumber: this.receipt.patient.licenseNo,
    CaregiverLicenseNumber: this.receipt.patient.caregiverLicenseNo,
    IdentificationMethod: this.receipt.identificationMethod,
    Transactions: this.receipt.transactions,
  };
  if (isPost) {
    return salesData;
  }
  return { ...salesData, Id };
};

Transaction.prototype.getFormData = function () {
  return {
    PackageLabel: this.package.packageLabel,
    Quantity: this.quantity,
    UnitOfMeasure: this.measureUnit,
    TotalAmount: this.amount,
  };
};

module.exports = {
  Sale,
  DayTransaction,
  Transaction,
};
