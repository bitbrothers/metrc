function WholesaleDeliveryPackage(pkg) {
  this.packageId = pkg.PackageId;
  this.packageLabel = pkg.PackageLabel;
  this.shipperWholesalePrice = pkg.ShipperWholesalePrice;
  this.receiverWholesalePrice = pkg.ReceiverWholesalePrice;
}

module.exports = WholesaleDeliveryPackage;
