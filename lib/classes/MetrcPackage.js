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

// {
//     "Tag": "ABCDEF012345670000020201",
//     "Location": null,
//     "Item": "Buds",
//     "Quantity": 16.0,
//     "UnitOfMeasure": "Ounces",
//     "PatientLicenseNumber": "X00001",
//     "Note": "This is a note.",
//     "IsProductionBatch": false,
//     "ProductionBatchNumber": null,
//     "IsDonation": false,
//     "ProductRequiresRemediation": false,
//     "UseSameItem": false,
//     "ActualDate": "2015-12-15",
//     "Ingredients": [
//       {
//         "Package": "ABCDEF012345670000010041",
//         "Quantity": 8.0,
//         "UnitOfMeasure": "Ounces"
//       },
//       {
//         "Package": "ABCDEF012345670000010042",
//         "Quantity": 8.0,
//         "UnitOfMeasure": "Ounces"
//       }
//     ]
//   },
