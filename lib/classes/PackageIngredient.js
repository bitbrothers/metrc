/**
 * template for package ingredient
 * @param { Object } { Package, Quantity, UnitOfMeasure} 
 */
function PackageIngredient({ Package, Quantity, UnitOfMeasure}) {
    this.Package = Package;
    this.Quantity = Quantity;
    this.UnitOfMeasure = UnitOfMeasure;
}

module.exports = PackageIngredient;