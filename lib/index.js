const metrc = require("./metrc");
metrc.config({
  sandbox: true,
});
const merchant = new metrc.Merchant({
  licenseNo: "M10-0000004-LIC",
  vendorkey: "y51gXYKY2zqeiWXFh8jAJOaDtOD1VfabCdWvlGpQ3EtGqBHd",
  userkey: "FusVbe4Yv6W1DGNuxKNhByXU6RO6jSUPcbRCoRDD98VNXc4D",
});

const transfer = new metrc.Transfer(merchant);
transfer.incoming(
  {
    lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
    lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
  },
  function response(data, error) {
      if(error)
        throw error
    console.log(data);
  }
);
