const http = require("../utils/http.js");
const Delivery = require("./Delivery.js");
const Transfer = require("./Transfer.js");
const DeliveryPackage = require("./DeliveryPackage.js");
const { Sale, DayTransaction, Transaction } = require("./Sale.js");
const Plant = require("./Plant.js");

function Merchant({ licenseNo, vendorkey, userkey }) {
  this.licenseNo = licenseNo;
  this.vendorkey = vendorkey;
  this.userkey = userkey;
  this.transferPath = "/transfers/v1";
  this.salesPath = "/sales/v1";
  this.plantPath = "/plants/v1";
  this.packagePath = "/packages/v1";
}

Merchant.prototype.getIncomingTransfers = async function (
  { lastModifiedEnd, lastModifiedStart },
  callback
) {
  const path = `${this.transferPath}/incoming`;
  //TODO http request return await variable
  const merchantRef = this;
  try {
    const licenseNo = merchantRef.licenseNo;
    const url = `${path}?licenseNumber=${licenseNo}&lastModifiedStart=${lastModifiedEnd}&lastModifiedEnd=${lastModifiedStart}`;
    const response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey,
    });
    let transferArray = [];
    response.data.map(function (transferData) {
      transferArray.push(new Transfer(transferData));
    })
    callback(transferArray);
  } catch (error) {
    callback({}, error);
  }
};

Merchant.prototype.getOutgoingTransfers = async function (
  { lastModifiedStart, lastModifiedEnd }, callback) {
  try {
    const path = `${this.transferPath}/outgoing`;
    const url = `${path}?licenseNumber=${this.licenseNo}&lastModifiedStart=${lastModifiedStart}&lastModifiedEnd=${lastModifiedEnd}`;
    const response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    let transferArray = [];
    response.data.map((transfer) => {
      transferArray.push(new Transfer(transfer));
    });
    callback(transferArray);
  } catch (error) {
    callback(error);
  }
}

Merchant.prototype.getRejectedTransfers = async function (callback) {
  try {
    const path = `${this.transferPath}/rejected`;
    const url = `${path}?licenseNumber=${this.licenseNo}`;
    const response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    let transferArray = [];
    response.data.map((transfer) => {
      transferArray.push(new Transfer(transfer));
    });
    callback(transferArray);
  } catch (error) {
    callback(error);
  }
}


Merchant.prototype.getTransfer = function (transferId) {
  let transfer = new Transfer({});
  transfer.id = transferId;
  return transfer;
}

Merchant.prototype.getDeliveries = async function (transfer, callback) {
  try {
    const url = `${this.transferPath}/${transfer.id}/deliveries`;
    const response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    let deliveries = [];
    deliveries = response.data.map(delivery => {
      return new Delivery(delivery);
    })
    callback(deliveries);
  } catch (error) {
    callback(error);
  }
};

Merchant.prototype.getDelivery = function (deliveryId) {
  let delivery = new Delivery({ Id: deliveryId });
  delivery.id = deliveryId;
  return delivery;
}

Merchant.prototype.getTransferPackages = async function (delivery, callback) {
  try {
    let url = `${this.transferPath}/delivery/${delivery.id}/packages`;
    const response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    let packages = response.data.map(package => {
      return new DeliveryPackage(package);
    });
    callback(packages);
  } catch (error) {
    callback(error);
  }
}

/**
 * function for geting package template
 * @param { number } packageId 
 */
Merchant.prototype.getDeliveryPackage = function (packageId) {
  return new DeliveryPackage({ PackageId: packageId });
}

/**
 * function to get required lab test batches
 * @param { Package } package 
 * @param { function } callback 
 */
Merchant.prototype.getRequiredLabTestBatches = async function (package, callback) {
  try {
    let url = `${this.transferPath}/delivery/package/${package.id}/requiredlabtestbatches`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    let labtestBatches = response.data.map(labTestBatch => {
      return new labTestBatch(labTestBatch);
    });
    callback(labtestBatches);
  } catch (error) {
    callback(error);
  }
}

/**
 * delete the extrnal incoming transfer by its id
 * @param { Number } transferId 
 * @param { Function } callback 
 */
Merchant.prototype.deleteIncomingTransfer = async function (
  transferId,
  callback
) {
  try {
    const path = `${this.transferPath}/external/incoming/${transferId}`;
    let response = await http.get(path, {
      username: this.vendorkey,
      password: this.userkey
    });
    console.log(response);
  } catch (error) {

  }
}

/**
 * Method to get templates for a transfer
 * @param { Object } { lastModifiedEnd ,lastModifiedStart } 
 * @param { Function } callback 
 */

Merchant.prototype.getTemplates = async function (
  { lastModifiedEnd, lastModifiedStart },
  callback) {
  try {
    const path = `${this.transferPath}/templates`;
    const url = `${path}?licenseNumber=${this.licenseNo}&lastModifiedStart=${lastModifiedStart}&lastModifiedEnd=${lastModifiedEnd}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    /**Mapping the data with templates */
    let templateArray = [];
    response.data.map(function (template) {
      templateArray.push(new Transfer(template));
    })
    callback(templateArray);
  } catch (error) {
    callback(error);
  }

}

/**
 * create a class template of Transfertemplate
 * @param { number } templateId 
 */
Merchant.prototype.getTransferTemplate = function (templateId) {
  return new Transfer({ Id: templateId });
}


/**
 * Method to get the transfer template deliveries
 * @param { Transfer } transferTemplate 
 * @param { Function } callback 
 */
Merchant.prototype.getTransferTemplateDeliveries = async function (transferTemplate, callback) {
  try {
    const url = `${this.transferPath}/${transferTemplate.id}/deliveries`;
    const response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    let deliveries = [];
    deliveries = response.data.map(delivery => {
      return new Delivery(delivery);
    })
    callback(deliveries);
  } catch (error) {
    callback(error);
  }
};

/**
 * method to get sales receipts 
 * @param { Object } { lastModifiedEnd, lastModifiedStart } 
 * @param { Boolean } isActive
 * @param { Function } callback 
 */
Merchant.prototype.getSalesReciepts = async function (
  { lastModifiedEnd, lastModifiedStart },
  isActive,
  callback) {
  try {
    const path = `${this.salesPath}/receipts/${isActive ? 'active' : 'inactive'}`;
    const url = `${path}?licenseNumber=${this.licenseNo}&lastModifiedStart=${lastModifiedEnd}&lastModifiedEnd=${lastModifiedStart}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    let receipts = response.data.map(receipt => {
      return new Sale(receipt);
    })
    callback(receipts);
  } catch (error) {
    callback(error);
  }
}

Merchant.prototype.getSalesRecieptById = async function (receiptId,
  callback) {
  try {
    const path = `${this.salesPath}/receipts`;
    const url = `${path}/${receiptId}/?licenseNumber=${this.licenseNo}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback(error);
  }
}

Merchant.prototype.getSalesTransactions = async function (callback) {
  try {
    const url = `${this.salesPath}/transactions?licenseNumber=${this.licenseNo}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    console.log(response.data);
    let dayTransactions = [];
    response.data.map(transaction => {
      dayTransactions.push(new DayTransaction(transaction));
    });
    callback(dayTransactions);
  } catch (error) {
    callback(error);
  }
}

Merchant.prototype.getSalesTransactionsByRange = async function (
  { lastModifiedStart, lastModifiedEnd },
  callback) {
  try {
    const path = `${this.salesPath}/transactions`;
    const url = `${path}/${lastModifiedStart}/${lastModifiedEnd}?licenseNumber=${this.licenseNo}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    let transactions = [];
    response.data.map(transaction => {
      transactions.push(new Transaction(transaction));
    });
    callback(transactions);
  } catch (error) {
    callback(error);
  }
}

/**
 * method to get single plant details by key
 * key can be Id or label
 * @param { Any } key
 * @param { Function } callback 
 */
Merchant.prototype.getPlant = async function (key, callback) {
  try {
    const url = `${this.plantPath}/${key}?licenseNumber=${this.licenseNo}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(new Plant(response.data));
  } catch (error) {
    callback(error);
  }
}

/**
 * method to get plants details by key
 * key can be a state (onhold, inactive) or type (flowering, vegitative, additives)
 * @param { Any } key
 * @param { Function } callback 
 */
Merchant.prototype.getPlants = async function (
  { lastModifiedEnd, lastModifiedStart },
  key, callback) {
  try {
    const path = `${this.plantPath}/${key}`;
    const url = `${path}?licenseNumber=${this.licenseNo}&lastModifiedStart=${lastModifiedStart}&lastModifiedEnd=${lastModifiedEnd}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    let plants = response.data.map(plant => new Plant(plant));
    callback(plants);
  } catch (error) {
    callback(error);
  }
}

/**
 * method to get plant growthphases
 * @param { Function } callback 
 */
Merchant.prototype.getPlantGrowthPhases = async function (callback) {
  try {
    const url = `${this.plantPath}/growthphases?licenseNumber=${this.licenseNo}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback(error);
  }
}

/**
 * method to get plant additives type
 * @param { Function } callback 
 */
Merchant.prototype.getPlantAdditiveTypes = async function (callback) {
  try {
    const url = `${this.plantPath}/additives/types`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback(error);
  }
}

/**
 * method to get plant waste methods
 * @param { Function } callback 
 */
Merchant.prototype.getPlantWasteMethods = async function (callback) {
  try {
    const url = `${this.plantPath}/waste/methods`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback(error);
  }
}


/**
 * method to get plant waste reasons
 * @param { Function } callback 
 */
Merchant.prototype.getPlantWasteReasons = async function (callback) {
  try {
    const url = `${this.plantPath}/waste/reasons?licenseNumber=${this.licenseNo}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback(error);
  }
}

/**
 * Get a package by using key, key can be Id or Label
 * @param { Any } key 
 * @param { Function } callback 
 */
Merchant.prototype.getPackage = async function (key, callback) {
  try {
    const url = `${this.packagePath}/${key}?licenseNumber=${this.licenseNo}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(new DeliveryPackage(response.data));
  } catch (error) {
    callback(error);
  }
}

/**
 * Get a package by using key, key can be Id or Label
 * @param { Object } { lastModifiedEnd, lastModifiedStart } 
 * @param { string } key 
 * @param { Function } callback 
 */
Merchant.prototype.getPackages = async function (
  { lastModifiedEnd, lastModifiedStart },
  key, callback) {
  try {
    const path = `${this.packagePath}/${key}`;
    const url = `${path}?licenseNumber=${this.licenseNo}&lastModifiedStart=${lastModifiedStart}&lastModifiedEnd=${lastModifiedEnd}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    let packages = [];
    packages = response.data.map(package => {
      return new DeliveryPackage(package)
    });
    callback(packages);
  } catch (error) {
    callback(error);
  }
}

/**
 * Get package types 
 * @param { Function } callback 
 */
Merchant.prototype.getPackageTypes = async function (callback) {
  try {
    const url = `${this.packagePath}/types`;
    const response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback(error);
  }
}

/**
 * Get package types 
 * @param { Function } callback 
 */
Merchant.prototype.getPackageTypes = async function (callback) {
  try {
    const url = `${this.packagePath}/types`;
    const response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback(error);
  }
}

/**
 * Get package adjustment reasons 
 * @param { Function } callback 
 */
Merchant.prototype.getPackageAdjustmentReasons = async function (callback) {
  try {
    const url = `${this.packagePath}/adjust/reasons?licenseNumber=${this.licenseNo}`;
    const response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback(error);
  }
}

/**
 * method to create sales receipts
 * @param { Object }  
 * @param { Array } transacitionArray 
 * @param { Function } callback 
 */
Merchant.prototype.postSalesReceipt = async function (
  {
    SalesDateTime,
    SalesCustomerType,
    PatientLicenseNumber,
    CaregiverLicenseNumber,
    IdentificationMethod
  },
  transacitionArray,
  callback) {
  transacitionArray = transacitionArray.map(transaction => {
    return { ...transaction }
  });

  let saleRecieptData = {
    SalesDateTime: SalesDateTime,
    SalesCustomerType: SalesCustomerType,
    PatientLicenseNumber: PatientLicenseNumber,
    CaregiverLicenseNumber: CaregiverLicenseNumber,
    IdentificationMethod: IdentificationMethod,
    Transactions: transacitionArray
  };

  let url = `${this.salesPath}/receipts?licenseNumber=${this.licenseNo}`;

  try {
    const response = await http.post(url, [saleRecieptData], {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback(error);
  }
}

/**
 * method to put sales receipts
 * @param { Object }  
 * @param { Array } transacitionArray 
 * @param { Function } callback 
 */

Merchant.prototype.putSalesReceipt = async function (
  {
    SalesDateTime,
    SalesCustomerType,
    PatientLicenseNumber,
    CaregiverLicenseNumber,
    IdentificationMethod
  },
  transacitionArray,
  callback) {
  transacitionArray = transacitionArray.map(transaction => {
    return { ...transaction }
  });

  let saleRecieptData = {
    SalesDateTime: SalesDateTime,
    SalesCustomerType: SalesCustomerType,
    PatientLicenseNumber: PatientLicenseNumber,
    CaregiverLicenseNumber: CaregiverLicenseNumber,
    IdentificationMethod: IdentificationMethod,
    Transactions: transacitionArray
  };

  let url = `${this.salesPath}/receipts?licenseNumber=${this.licenseNo}`;

  try {
    const response = await http.put(url, [saleRecieptData], {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback(error);
  }
}

module.exports = Merchant;
