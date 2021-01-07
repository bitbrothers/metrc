const http = require("../utils/http.js");

const Delivery = require("./Delivery.js");
const Transfer = require("./Transfer.js");
const DeliveryPackage = require("./DeliveryPackage.js");
const { Sale, DayTransaction, Transaction } = require("./Sale.js");
const Plant = require("./Plant.js");
const WholesaleDeliveryPackage = require("./WholesaleDeliveryPackage.js");
const Facility = require("./Facility.js");

function Merchant({ licenseNo, vendorkey, userkey }) {
  this.licenseNo = licenseNo;
  this.vendorkey = vendorkey;
  this.userkey = userkey;
  this.transferPath = "/transfers/v1";
  this.salesPath = "/sales/v1";
  this.plantPath = "/plants/v1";
  this.packagePath = "/packages/v1";
  this.facilityPath = "/facilities/v1";
}

/**
 * Method to get all incoming transfers
 * @param { Object }  { lastModifiedEnd, lastModifiedStart } 
 * @param { Function } callback 
 */
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
    /**Transforming the output into structured templates */
    let transferArray = [];
    response.data.map(function (transferData) {
      transferArray.push(new Transfer(transferData));
    });
    callback(transferArray);
  } catch (error) {
    callback({}, error);
  }
};

/**
 * Method to get all outging transfers
 * @param { Object }  { lastModifiedEnd, lastModifiedStart } 
 * @param { Function } callback 
 */
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
    callback({}, error);
  }
}

/**
 * Method to get all rejected transfers
 * @param { Function } callback 
 */
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
    callback({}, error);
  }
}

/**
 * Method to get all facilities 
 * @param { Function } callback 
 */
Merchant.prototype.getFacilities = async function (callback) {
  try {
    const response = await http.get(this.facilityPath, {
      username: this.vendorkey,
      password: this.userkey
    });
    let facilityArray = [];
    response.data.map((facility) => {
      facilityArray.push(new Facility(facility))
    });
    callback(facilityArray);
  } catch (error) {
    callback({}, error);
  }
}

/**
 * Method to get transfer template 
 * @param { number } transferId 
 */
Merchant.prototype.getTransfer = function (transferId) {
  let transfer = new Transfer({ Id: transferId });
  return transfer;
}

/**
 * Method to get all deliveries in a transfer 
 * @param { Transfer } transfer
 * @param { Function } callback 
 */
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
    callback({}, error);
  }
};

/**
 * Methode to get delivery template
 * @param { number } deliveryId 
 */
Merchant.prototype.getDelivery = function (deliveryId) {
  let delivery = new Delivery({ Id: deliveryId });
  delivery.id = deliveryId;
  return delivery;
}

/**
 * Method to get all packages in a transfer 
 * @param { Delivery } delivery
 * @param { Function } callback 
 */
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
    callback({}, error);
  }
}

/**
 * Method to get all deliveries in a transfer 
 * @param { Transfer } transfer
 * @param { fucntion } callback 
 */
Merchant.prototype.getWholesalePackages = async function (delivery, callback) {
  try {
    let url = `${this.transferPath}/delivery/${delivery.id}/packages/wholesale`;
    const response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    let packages = response.data.map(package => {
      return new WholesaleDeliveryPackage(package);
    });
    callback(packages);
  } catch (error) {
    callback({}, error);
  }
}
/**
 * function for geting package template
 * @param { number } packageId 
 */
Merchant.prototype.getTransferPackage = function (packageId) {
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
    callback({}, error);
  }
}



/**
 * Method to create a transfer PUT req
 * @param { Object } shipper 
 * @param { Array } destinations
 */
Merchant.prototype.createTransfer = function (
  shipper,
  destinations
) {
  /**Temperory redundant data in the POST call which is usually null */
  let tempData = {
    TransporterFacilityLicenseNumber: null,
    DriverOccupationalLicenseNumber: null,
    DriverName: null,
    DriverLicenseNumber: null,
    PhoneNumberForQuestions: null,
    VehicleMake: null,
    VehicleModel: null,
    VehicleLicensePlateNumber: null,
  };

  /**Final request data for a single transfer */
  return transferData = { ...shipper, ...tempData, Destinations: destinations };
};

/**
 * POST transfer array 
 * @param { Array } transfers 
 * @param { Function } callback 
 */
Merchant.prototype.postTransfers = async function (transfers, callback) {
  this.sendTransfersData(transfers, true, true, callback);
}

/**
 * PUT transfer array 
 * @param { Array } transfers 
 * @param { Function } callback 
 */
Merchant.prototype.putTransfers = async function (transfers, callback) {
  this.sendTransfersData(transfers, true, false, callback);
}

/**
 * POST templates array 
 * @param { Array } transfers 
 * @param { Function } callback 
 */
Merchant.prototype.postTemplates = async function (templates, callback) {
  this.sendTransfersData(templates, false, true, callback);
}

/**
 * PUT templates array 
 * @param { Array } transfers 
 * @param { Function } callback 
 */
Merchant.prototype.putTemplates = async function (templates, callback) {
  this.sendTransfersData(templates, false, false, callback);
}

/**
 * PUT / POST method for template and transfer 
 * @param { Array } data (transfersArray or templatesArray)
 * @param { Boolean } isTransfer (templates || transfers)
 * @param { Function } callback 
 */
Merchant.prototype.sendTransfersData = async function (data, isTransfer, isPost, callback) {
  try {
    let path = isTransfer ? 'external/incoming' : 'templates';
    let url = `${this.transferPath}/${path}?licenseNumber=${this.licenseNo}`;
    let response;

    //check if method is put or post
    if (isPost) {
      await http.post(url, data, {
        username: this.vendorkey,
        password: this.userkey
      });
    } else {
      await http.put(url, data, {
        username: this.vendorkey,
        password: this.userkey
      });
    }
    callback(response.data);
  } catch (error) {
    callback({}, error);
  }
}

/**
 * get template from destinations data
 * @param { Array } destinations
 */
Merchant.prototype.createTemplate = function (destinations) {
  return this.createTransfer({}, destinations);
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
    let response = await http.delete(path, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback({}, error)
  }
}

/**
 * delete a template by id
 * @param { Number } templateId 
 * @param { Function } callback 
 */
Merchant.prototype.deleteTemplate = async function (
  templateId,
  callback
) {
  try {
    const path = `${this.transferPath}/templates/${templateId}`;
    let response = await http.delete(path, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback({}, error)
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
    callback({}, error);
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
    callback({}, error);
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
    callback({}, error);
  }
}

/**
 * get Sale template
 * @param {number} receiptId 
 */
Merchant.prototype.getSale = function (receiptId) {
  return new Sale({ Id: receiptId });
}

/**
 * method to get sales receipts by Id
 * @param { Sale } sale
 * @param { Function } callback 
 */
Merchant.prototype.getSalesRecieptById = async function (sale,
  callback) {
  try {
    const path = `${this.salesPath}/receipts`;
    const url = `${path}/${sale.receipt.id}/?licenseNumber=${this.licenseNo}`;
    let response = await http.get(url, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback({}, error);
  }
}

/**
 * method to get sales transactions
 * @param { Function } callback 
 */
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
    callback({}, error);
  }
}

/**
 * method to create sales receipts
 * @param { Array } sales 
 * @param { Function } callback 
 */
Merchant.prototype.postSalesReceipt = async function (
  sales,
  callback) {
  let url = `${this.salesPath}/receipts?licenseNumber=${this.licenseNo}`;
  try {
    const response = await http.post(url, sales, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback({}, error);
  }
}

/**
 * method to put sales receipts
 * @param { Array } sales 
 * @param { Function } callback 
 */
Merchant.prototype.putSalesReceipt = async function (sales, callback) {
  let url = `${this.salesPath}/receipts?licenseNumber=${this.licenseNo}`;
  try {
    const response = await http.put(url, sales, {
      username: this.vendorkey,
      password: this.userkey
    });
    callback(response.data);
  } catch (error) {
    callback(error);
  }
}

/**
 * method to get sales transactions by range
 * @param { Object } { salesDateStart, salesDateEnd } 
 * @param { Function } callback 
 */
Merchant.prototype.getSalesTransactionsByRange = async function (
  { salesDateStart, salesDateEnd },
  callback) {
  try {
    const path = `${this.salesPath}/transactions`;
    const url = `${path}/${salesDateStart}/${salesDateEnd}?licenseNumber=${this.licenseNo}`;
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
    callback({}, error);
  }
}

/**
 * method to create transaction
 * @param { Array } transactions 
 * @param { Function } callback 
 */
Merchant.prototype.sendSalesTransaction = async function (
  transactions,
  salesDate,
  isPost,
  callback) {
  let url = `${this.salesPath}/transactions/${salesDate}?licenseNumber=${this.licenseNo}`;
  try {
    let response;
    if (isPost) {
      response = await http.post(url, transactions, {
        username: this.vendorkey,
        password: this.userkey
      });
    } else {
      response = await http.put(url, transactions, {
        username: this.vendorkey,
        password: this.userkey
      });
    }
    callback(response.data);
  } catch (error) {
    callback({}, error);
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

module.exports = Merchant;
