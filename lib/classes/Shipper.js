
/**
 * Template for generating Shipper (person/body/orgnization who ships) object
 * @param { Object } */
function Shipper(shipper) {
    this.facilityLicenseNo = shipper.ShipperFacilityLicenseNumber;
    this.facilityName = shipper.ShipperFacilityName;
    this.name = ShipperName;
    this.phoneNo = shipper.ShipperMainPhoneNumber;
    this.address1 = shipper.ShipperAddress1;
    this.addrress2 = shipper.ShipperAddress2;
    this.city = shipper.ShipperAddressCity;
    this.state = shipper.ShipperAddressState;
    this.postalCode = shipper.ShipperAddressPostalCode
}

module.exports = Shipper;