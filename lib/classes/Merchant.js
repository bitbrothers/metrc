const http = require("../utils/http.js");
const Delivery = require("./Delivery.js");
const Transfer = require("./Transfer.js");
const WholesaleDeliveryPackage = require("./WholesaleDeliveryPackage.js");
const DeliveryPackage = require("./DeliveryPackage.js");

function Merchant({ licenseNo, vendorkey, userkey }) {
  this.licenseNo = licenseNo;
  this.vendorkey = vendorkey;
  this.userkey = userkey;
  this.transferPath = "/transfers/v1";
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

Merchant.prototype.getPackages = async function (delivery, callback) {
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
    callback(error);
  }
}
/**
 * function for geting package template
 * @param { number } packageId 
 */
Merchant.prototype.getPackage = function (packageId) {
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

module.exports = Merchant;
