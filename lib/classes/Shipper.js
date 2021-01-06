
/**
 * Template for generating Shipper (person/body/orgnization who ships) object
 * @param { Object } */
function Shipper(shipper) {
    this.facilityLicenseNo = shipper.ShipperFacilityLicenseNumber;
    this.facilityName = shipper.ShipperFacilityName;
    this.licenseNo = shipper.ShipperLicenseNumber;
    this.name = shipper.ShipperName;
    this.phoneNo = shipper.ShipperMainPhoneNumber;
    this.address1 = shipper.ShipperAddress1;
    this.addrress2 = shipper.ShipperAddress2;
    this.city = shipper.ShipperAddressCity;
    this.state = shipper.ShipperAddressState;
    this.postalCode = shipper.ShipperAddressPostalCode
}

/**
 * returns POST form data for Shipper
 */
Shipper.prototype.getFormData = function () {
    return {
        ShipperName: this.name,
        ShipperMainPhoneNumber: this.phoneNo,
        ShipperAddress1: this.address1,
        ShipperAddress2: this.addrress2,
        ShipperAddressCity: this.city,
        ShipperAddressState: this.state,
        ShipperAddressPostalCode: this.postalCode,
        ShipperLicenseNumber: this.licenseNo
    }
}

/**
 * returns GET form data for Shipper
 */
Shipper.prototype.getData = function () {
    return {
        ShipperFacilityLicenseNumber: this.facilityLicenseNo,
        ShipperFacilityName: this.facilityName
    }
}

module.exports = Shipper;