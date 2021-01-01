//TODO replace axois with native nodejs http
const axios = require("axios");
const util = require('./util');

let globalString = {};
function Config({ sandbox }) {
  if(sandbox)
    globalString.baseUrl = 'sandbox-api-ca.metrc.com';
  else
    globalString.baseUrl = 'api-ca.metrc.com';
}
function Merchant({ licenseNo, vendorkey, userkey }) {
  this.licenseNo = licenseNo;
  this.vendorkey = vendorkey;
  this.userkey = userkey;
}

Merchant.prototype.getlicenseNo = function () {
  return this.licenseNo;
};

Merchant.prototype.getAuth = function () {
  return { username: this.vendorkey, password : this.userkey}
};
function Transfer(merchant) {
  this.merchant = merchant;
  this.path = "/transfers/v1"
}

Transfer.prototype.incoming = async function ({lastModifiedEnd, lastModifiedStart}, callback) {
  const path = `${this.path}/incoming`;
  //TODO http request return await variable
  const transferRef = this;
  try {
    const licenseNo = transferRef.merchant.getlicenseNo();
    const url = `https://${globalString.baseUrl}${path}?licenseNumber=${licenseNo}&lastModifiedStart=${lastModifiedEnd}&lastModifiedEnd=${lastModifiedStart}`;
    const response = await util.get(url,transferRef.merchant.getAuth());
    callback(response.data);
  } catch (error) {
    callback({}, error);
  }
};

module.exports = {
  config: Config,
  Merchant: Merchant,
  Transfer: Transfer,
};
