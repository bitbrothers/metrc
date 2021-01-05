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
    
##### Check Merchant's Incoming Transfers
    
    merchant.getIncomingTransfers(
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
##### Check Merchant's Outgoing Transfers
    
    merchant.getOutgoingTransfers(
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
##### Check Merchant's Rejected Transfers
    
    merchant.getRejectedTransfers(
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

##### Check Deliveries of a particular Transfer by Id
    
    let transfer = merchant.getTransfer(1234);
    merchant.getDeliveries(transfer, function (data, error) {
        if (error) {
          console.log(error)
        } else {
          console.log(data);
        }
   });


##### Check Packages in a Delivery of a particular Transfer
    
    //A merchant makes a transfer of Deliveries containing Packages to the customer

    const transfer = merchant.getTransfer(transferId);
    const deliveries = transfer.getDelivery(deliveryId);
    let packages = delivery.getPackages();

##### Check Wholesale Packages in a Delivery of a particular Transfer 
    
    //A merchant makes a transfer of Deliveries containing wholesale Packages to the customer

    const transfer = merchant.getTransfer(transferId);
    const deliveries = transfer.getDelivery(deliveryId);
    let wholesalePackages = delivery.getWholesalePackages();

##### Check Packages which requires labtest, in a Delivery of a particular Transfer 
    
    //A merchant makes a transfer of Deliveries containing Packages to the customer

    const transfer = merchant.getTransfer(transferId);
    const deliveries = transfer.getDelivery(deliveryId);
    let labTestBatchPackages = delivery.getlabTestBatchPackages();

##### Check Package states in a Delivery of a particular Transfer 
    
    //A merchant makes a transfer of Deliveries containing Packages to the customer

    const transfer = merchant.getTransfer(transferId);
    const deliveries = transfer.getDelivery(deliveryId);
    let packageStates = delivery.getPackageStates();

##### Check templates for transfers
    
    //A merchant makes a transfer to a customer

    let templates = merchant.getTransferTemplates();

##### Check deliveries in a template
    
    //A merchant makes a transfer to a customer

    const template = merchant.getTransferTemplate(templateId);
    let deliveries = template.getDeliveries();


##### Check Packages in a delivery in a template
    
    //A merchant makes a transfer to a customer

    const template = merchant.getTransferTemplate(templateId);
    const delivery = template.getDelivery();
    let packages = delivery.packages();
##### Check transfer types
    
    //A merchant makes a transfer to a customer

    let transfetTypes = merchant.getTransferTypes();
