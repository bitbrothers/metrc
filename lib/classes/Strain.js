function Strain(strain) {
  this.id = strain.Id;
  this.name = strain.Name;
  this.testingStatus = strain.TestingStatus;
  this.thcLevel = strain.ThcLevel;
  this.cbdLevel = strain.CbdLevel;
  this.indicaPercentage = strain.IndicaPercentage;
  this.sativaPercentage = strain.SativaPercentage;
  this.isUsed = strain.IsUsed;
  this.genetics = strain.Genetics;
}

module.exports = Strain;
