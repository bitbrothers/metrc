/**
 * Template for lab test batch
 * @param {object} labTestBatch
 */
function LabTestBatch(labTestBatch) {
  this.packageId = labTestBatch.PackageId;
  this.labTestBatchId = labTestBatch.LabTestBatchId;
  this.labTestBatchName = labTestBatch.LabTestBatchName;
}

module.exports = LabTestBatch;
