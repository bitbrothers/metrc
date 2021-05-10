function LabFacility({ LabFacilityLicenseNumber, labFacilityName }) {
  this.licenseNo = LabFacilityLicenseNumber;
  this.name = labFacilityName;
}

function LabTest(labtest) {
  this.packageId = labtest.PackageId;
  this.id = labtest.LabTestResultId;
  this.sourcePackageLabel = labtest.SourcePackageLabel;
  this.productName = labtest.ProductName;
  this.productCategoryName = labtest.ProductCategoryName;
  this.testDate = labtest.TestPerformedDate;
  this.overallPassed = labtest.OverallPassed;
  this.revokedDate = labtest.RevokedDate;
  this.resultReleased = labtest.ResultReleased;
  this.resultReleaseDateTime = labtest.ResultReleaseDateTime;
  this.testTypeName = labtest.TestTypeName;
  this.testPassed = labtest.TestPassed;
  this.testResultLevel = labtest.TestResultLevel;
  this.testComment = labtest.TestComment;
  this.labTestDetailRevokedDate = labtest.LabTestDetailRevokedDate;
  this.labFacility = new LabFacility({
    LabFacilityLicenseNumber: labtest.LabFacilityLicenseNumber,
    labFacilityName: labtest.labFacilityName,
  });
}

module.exports = LabTest;
