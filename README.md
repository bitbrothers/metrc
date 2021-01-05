## Metrc Node Wrapper
This module helps you intregrate metrc REST APIs to your node project.

    const  metrc = require("metrc"); 
    
    metrc.config({
      sandbox:  true,
    }); 
    

##### Create Merchant Object
     const merchant = new Merchant({
      licenseNo: "licenseNo",
      vendorkey: "vendor-key",
      userkey:"user-key"
     });
    
##### Check Merchant's Incoming Transfer
    
    const transfer = new metrc.Transfer(merchant);
    transfer.getIncomingTransfers(
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
##### Check Merchant's Outgoing Transfer
    
    const transfer = new metrc.Transfer(merchant);
    transfer.getOutgoingTransfers(
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
