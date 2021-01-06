//TODO replace axois with native nodejs http
const Transfer = require("./classes/Transfer");
const Merchant = require("./classes/Merchant");
const { DayTransaction, PostTransaction } = require("./classes/Sale.js");
const { globalString }  = require("./utils/config");

function Config({ sandbox }) {
  if (sandbox) globalString.baseUrl = "sandbox-api-ca.metrc.com";
  else globalString.baseUrl = "api-ca.metrc.com";
}

module.exports = {
  config: Config,
  Merchant: Merchant,
  Transfer: Transfer,
  DayTransaction: DayTransaction,
  PostTransaction: PostTransaction
};
