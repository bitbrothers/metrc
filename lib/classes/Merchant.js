const http = require("../utils/http.js");
const Delivery = require("./Delivery.js");
const Transfer = require("./Transfer.js");
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
  let transfer = new Transfer({Id: transferId});
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

module.exports = Merchant;
