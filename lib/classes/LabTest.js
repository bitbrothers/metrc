function LabTest(labtest) {
    this.packageId = PackageId;
    this.id = LabTestResultId;
    this.sourcePackageLabel = SourcePackageLabel;
    this.productName = ProductName;
    this.productCategoryName = ProductCategoryName;
    this.testDate = TestPerformedDate;
    this.overallPassed = OverallPassed;
    this.revokedDate = RevokedDate;
    this.resultReleased = ResultReleased;
    this.resultReleaseDateTime = ResultReleaseDateTime;
    this.testTypeName = TestTypeName;
    this.testPassed = TestPassed;
    this.testResultLevel = TestResultLevel;
    this.testComment = TestComment;
    this.labTestDetailRevokedDate = LabTestDetailRevokedDate;
    this.labFacility = new LabFacility({LabFacilityLicenseNumber, labFacilityName});
}

function LabFacility({LabFacilityLicenseNumber, labFacilityName}) {
    this.licenseNo = LabFacilityLicenseNumber;
    this.name = labFacilityName;
}