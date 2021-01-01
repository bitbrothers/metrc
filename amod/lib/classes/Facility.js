function Facility(faciliy) {
    this.name = facility.Name;
    this.type = faciliy.FacilityType;
    this.alias = Alias;
    this.hireDate = HireDate;
    this.occupations = Occupations;
    this.displayName = DisplayName;
    this.license = License;
}


/**
 * Template for important dates for facility suppport
 * @param {{ Date } SupportActivationDate, { Date } SupportExpirationDate, { Date } SupportLastPaidDate, { Date } CredentialedDate }
 */
function SupportDates({ SupportActivationDate, SupportExpirationDate, SupportLastPaidDate, CredentialedDate}) {
    this.activation = SupportActivationDate;
    this.expiration = SupportExpirationDate;
    this.lastPaid = SupportLastPaidDate;
    this.credentialed = CredentialedDate;
}


/**
 * User template
 * @param {{ Date } SupportActivationDate, { Date } SupportExpirationDate, { Date } SupportLastPaidDate, { Date } CredentialedDate }
 */
function SupportDates({ SupportActivationDate, SupportExpirationDate, SupportLastPaidDate, CredentialedDate}) {
    this.activation = SupportActivationDate;
    this.expiration = SupportExpirationDate;
    this.lastPaid = SupportLastPaidDate;
    this.credentialed = CredentialedDate;

}

/**
 * User template
 * @param {{ Boolean } IsOwner, { Boolean } IsManager  }
 */
function User({ isOwner, IsManager}) {
    this.isOwner = IsOwner;
    this.isManager = IsManager;
}

