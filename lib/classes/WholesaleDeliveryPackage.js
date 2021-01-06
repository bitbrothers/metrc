function WholesaleDeliveryPackage(package) {
    this.packageId = package.PackageId;
    this.packageLabel = package.PackageLabel;
    this.shipperWholesalePrice = package.ShipperWholesalePrice;
    this.receiverWholesalePrice = package.ReceiverWholesalePrice;
}

module.exports = WholesaleDeliveryPackage;