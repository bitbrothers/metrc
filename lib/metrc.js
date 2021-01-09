//TODO replace axois with native nodejs http
const Transfer = require("./classes/Transfer.js");
const Merchant = require("./classes/Merchant.js");
const { DayTransaction, Transaction, Sale } = require("./classes/Sale.js");
const { globalString }  = require("./utils/config.js");
const Shipper = require("./classes/Shipper.js");
const Driver = require("./classes/Driver.js");
const ShipmentTransporter = require("./classes/ShipmentTransporter.js");
const Vehicle = require("./classes/Vehicle.js");
const DeliveryPackage = require("./classes/DeliveryPackage.js");
const Destination = require("./classes/Destination.js");
const Ingredient = require("./classes/Ingredient.js");
const PlantingPackage = require("./classes/PlantingPackage.js");

function Config({ sandbox }) {
  if (sandbox) globalString.baseUrl = "sandbox-api-ca.metrc.com";
  else globalString.baseUrl = "api-ca.metrc.com";
}

module.exports = {
  config: Config,
  Merchant: Merchant,
  Transfer: Transfer,
  DayTransaction: DayTransaction,
  Shipper: Shipper,
  Driver: Driver,
  ShipmentTransporter: ShipmentTransporter,
  Vehicle: Vehicle,
  DeliveryPackage: DeliveryPackage,
  Destination: Destination,
  Transaction: Transaction,
  Sale: Sale,
  Ingredient: Ingredient,
  PlantingPackage: PlantingPackage
};
