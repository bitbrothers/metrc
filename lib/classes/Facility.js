/**
 * Template for important dates for facility suppport
 * @param {{ Date } SupportActivationDate, { Date } SupportExpirationDate, { Date } SupportLastPaidDate, { Date } CredentialedDate }
 */
function SupportDates({ SupportActivationDate, SupportExpirationDate, SupportLastPaidDate, CredentialedDate }) {
  this.activation = SupportActivationDate;
  this.expiration = SupportExpirationDate;
  this.lastPaid = SupportLastPaidDate;
  this.credentialed = CredentialedDate;
}

/**
 * user Role template
 * @param {{ Boolean } IsOwner, { Boolean } IsManager  }
 */
function Role({ IsOwner, IsManager }) {
  this.isOwner = IsOwner;
  this.isManager = IsManager;
}

/**
 * Template for the license
 * @param {{ Number } Number, { String } StartDate, { String } EndDate, { String } LicenseType  }
 */
function License({ Number, StartDate, EndDate, LicenseType }) {
  this.number = Number;
  this.startDate = StartDate;
  this.endDate = EndDate;
  this.licenseType = LicenseType;
}

/** Facility type template
 * @param { Object } facilityType
 */
function FacilityType(facilityType) {
  this.isMedical = facilityType.IsMedical;
  this.isRetail = facilityType.IsRetail;
  this.isHemp = facilityType.IsHemp;
  this.restrictHarvestPlantRestoreTimeHours = facilityType.RestrictHarvestPlantRestoreTimeHours;
  this.totalMemberPatientsAllowed = facilityType.TotalMemberPatientsAllowed;
  this.canGrowPlants = facilityType.CanGrowPlants;
  this.canCreateOpeningBalancePlantBatches = facilityType.CanCreateOpeningBalancePlantBatches;
  this.canTagPlantBatches = facilityType.CanTagPlantBatches;
  this.canAssignLocationsToPlantBatches = facilityType.CanAssignLocationsToPlantBatches;
  this.plantsRequirePatientAffiliation = facilityType.PlantsRequirePatientAffiliation;
  this.plantBatchesCanContainMotherPlants = facilityType.PlantBatchesCanContainMotherPlants;
  this.canUpdatePlantStrains = facilityType.CanUpdatePlantStrains;
  this.canTrackVegetativePlants = facilityType.CanTrackVegetativePlants;
  this.canCreateImmaturePlantPackagesFromPlants = facilityType.CanCreateImmaturePlantPackagesFromPlants;
  this.canPackageVegetativePlants = facilityType.CanPackageVegetativePlants;
  this.canReportHarvestSchedules = facilityType.CanReportHarvestSchedules;
  this.canSubmitHarvestsForTesting = facilityType.CanSubmitHarvestsForTesting;
  this.canRequireHarvestSampleLabTestBatches = facilityType.CanRequireHarvestSampleLabTestBatches;
  this.canCreateOpeningBalancePackages = facilityType.CanCreateOpeningBalancePackages;
  this.canCreateDerivedPackages = facilityType.CanCreateDerivedPackages;
  this.canAssignLocationsToPackages = facilityType.CanAssignLocationsToPackages;
  this.canUpdateLocationsOnPackages = facilityType.CanUpdateLocationsOnPackages;
  this.packagesRequirePatientAffiliation = facilityType.PackagesRequirePatientAffiliation;
  this.canCreateTradeSamplePackages = facilityType.CanCreateTradeSamplePackages;
  this.canDonatePackages = facilityType.CanDonatePackages;
  this.canSubmitPackagesForTesting = facilityType.CanSubmitPackagesForTesting;
  this.canCreateProcessValidationPackages = facilityType.CanCreateProcessValidationPackages;
  this.canRequirePackageSampleLabTestBatches = facilityType.CanRequirePackageSampleLabTestBatches;
  this.canRequestProductRemediation = facilityType.CanRequestProductRemediation;
  this.canRemediatePackagesWithFailedLabResults = facilityType.CanRemediatePackagesWithFailedLabResults;
  this.canInfuseProducts = facilityType.CanInfuseProducts;
  this.canTestPackages = facilityType.CanTestPackages;
  this.canTransferFromExternalFacilities = facilityType.CanTransferFromExternalFacilities;
  this.canSellToConsumers = facilityType.CanSellToConsumers;
  this.canSellToPatients = facilityType.CanSellToPatients;
  this.canSellToExternalPatients = facilityType.CanSellToExternalPatients;
  this.canSellToCaregivers = facilityType.CanSellToCaregivers;
  this.advancedSales = facilityType.AdvancedSales;
  this.salesRequirePatientNumber = facilityType.SalesRequirePatientNumber;
  this.salesRequireExternalPatientNumber = facilityType.SalesRequireExternalPatientNumber;
  this.salesRequireExternalPatientIdentificationMethod = facilityType.SalesRequireExternalPatientIdentificationMethod;
  this.salesRequireCaregiverNumber = facilityType.SalesRequireCaregiverNumber;
  this.salesRequireCaregiverPatientNumber = facilityType.SalesRequireCaregiverPatientNumber;
  this.canDeliverSalesToConsumers = facilityType.CanDeliverSalesToConsumers;
  this.salesDeliveryRequireConsumerId = facilityType.SalesDeliveryRequireConsumerId;
  this.canDeliverSalesToPatients = facilityType.CanDeliverSalesToPatients;
  this.salesDeliveryRequirePatientNumber = facilityType.SalesDeliveryRequirePatientNumber;
  this.salesDeliveryRequireRecipientName = facilityType.SalesDeliveryRequireRecipientName;
  this.canHaveMemberPatients = facilityType.CanHaveMemberPatients;
  this.canReportPatientCheckIns = facilityType.CanReportPatientCheckIns;
  this.canSpecifyPatientSalesLimitExemption = facilityType.CanSpecifyPatientSalesLimitExemption;
  this.canReportPatientsAdverseResponses = facilityType.CanReportPatientsAdverseResponses;
  this.canReportStrainProperties = facilityType.CanReportStrainProperties;
}

function Facility(facility) {
  const {
    SupportActivationDate,
    SupportExpirationDate,
    SupportLastPaidDate,
    CredentialedDate,
    IsOwner,
    IsManager,
  } = facility;
  this.name = facility.Name;
  this.type = new FacilityType(facility.FacilityType);
  this.alias = facility.Alias;
  this.hireDate = facility.HireDate;
  this.occupations = facility.Occupations;
  this.displayName = facility.DisplayName;
  this.license = new License({
    Number: facility.License.Number,
    StartDate: facility.License.StartDate,
    EndDate: facility.License.EndDate,
    LicenseType: facility.License.LicenseType,
  });
  this.supportDates = new SupportDates({
    SupportActivationDate,
    SupportExpirationDate,
    SupportLastPaidDate,
    CredentialedDate,
  });
  this.role = new Role({
    IsOwner,
    IsManager,
  });
}

module.exports = Facility;
