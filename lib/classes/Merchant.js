const http = require("../utils/http");
const Transfer = require("./Transfer");

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
    response.data.map(function(transferData){
        transferArray.push(new Transfer(transferData));
    })
    callback(transferArray);
  } catch (error) {
    callback({}, error);
  }
};

module.exports = Merchant;
