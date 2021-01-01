let merchant = new metrcs.Merchant(
    {
        userKey: "FusVbe4Yv6W1DGNuxKNhByXU6RO6jSUPcbRCoRDD98VNXc4D",
        vendorKey: "y51gXYKY2zqeiWXFh8jAJOaDtOD1VfabCdWvlGpQ3EtGqBHd",
        serverUrl: "https://sandbox-api-ca.metrc.com",
        licenseNo: "M10-0000004-LIC"
    }
);

let transfer = new metrcs.Transfer(merchant);
transfer.getIncoming();
// transfer.outgoing();
// transfer.reject();