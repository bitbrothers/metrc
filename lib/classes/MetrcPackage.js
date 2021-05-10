function MetrcPackage(pkg) {
  this.tag = pkg.tag;
  this.unitOfMeasure = pkg.unitOfMeasure;
  this.Location = pkg.Location;
  this.Item = pkg.Item;
  this.Quantity = pkg.Quantity;
  this.UnitOfMeasure = pkg.UnitOfMeasure;
  this.PatientLicenseNumber = pkg.PatientLicenseNumber;
  this.Note = pkg.Note;
  this.IsProductionBatch = pkg.IsProductionBatch;
  this.ProductionBatchNumber = pkg.ProductionBatchNumber;
  this.IsDonation = pkg.IsDonation;
  this.ProductRequiresRemediation = pkg.ProductRequiresRemediation;
  this.UseSameItem = pkg.UseSameItem;
  this.ActualDate = pkg.ActualDate;
  this.Ingredients = pkg.Ingredients;
}

module.exports = MetrcPackage;
