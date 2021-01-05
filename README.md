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
    
    //A merchant makes a tranfer of Deliveries to the customer

    const transfer = merchant.getTransfer(transferId);
    let deliveries = transfer.getDeliveries();


##### Check Packages in a Delivery of a particular Transfer
    
    //A merchant makes a transfer of Deliveries containing Packages to the customer

    const transfer = merchant.getTransfer(transferId);
    const deliveries = transfer.getDelivery(deliveryId);
    let packages = delivery.getTransferPackages();

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

 ##### Get Active and Inactive sales receipts
    /* set isActive flag to true for accessing active receipts and false for inactive*/
    let isActive = true;
      merchant.getIncomingTransfers(
      {
        lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
        lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
      },
      isActive,
      function response(data, error) {
          if(error)
            throw error
        console.log(data);
      }
    );

 ##### Get receipt by Id 
    receiptId = 12345;
    merchant.getSalesRecieptById(receiptId,
      function response(data, error) {
        if (error)
          throw error
        console.log(data);
      }
    );

 ##### Get plant by Id 
    const plantId = 23245;
    merchant.getPlant(plantId,
    function response(data, error) {
        if(error)
          throw error
      console.log(data);
    });
 
  ##### Get plant by Label
    const plantLabel = '';
    merchant.getPlant(plantLabel,
    function response(data, error) {
        if(error)
          throw error
      console.log(data);
    });
 
 ##### Get Vegetative | flowering | onhold | inactive |  additives plants
    /** get vegetative plants => plantKey = 'vegetative'
    *  get flowering plants => plantKey = 'flowering'
    *  get plants that are on hold => plantKey = 'onhold'
    *  get plants that are inactive  => plantKey = 'inactive'
    *  get additives plants => plantKey = 'additives'
    */
    const plantKey = 'vegetative';
    merchant.getPlants(
      {
        lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
        lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
      },
      plantKey,
      function response(data, error) {
          if(error)
            throw error
        console.log(data);
      }
    );

  ##### Get plant growth phases
    merchant.getPlantGrowthPhases(
        function response(data, error) {
            if(error)
              throw error
          console.log(data);
        }
      );

  ##### Get plant Additive types
    merchant.getPlantAdditiveTypes(
        function response(data, error) {
            if(error)
              throw error
          console.log(data);
        }
      );

  ##### Get plant waste methods
    merchant.getPlantWasteMethods(
      function response(data, error) {
          if(error)
            throw error
        console.log(data);
      }
    );

  ##### Get plant waste reasons
    merchant.getPlantWasteReasons(
      function response(data, error) {
          if(error)
            throw error
        console.log(data);
      }
    );

 ##### Get a package by Id
    const packageId = 41234;
    merchant.getPackage(packageId,
      function (data, error) {
        if (error)
          throw error;
        console.log(data);
      });

 ##### Get a package by label
    const packageLabel = "1AWFF011232022000002578";
    merchant.getPackage(packageLabel,
      function (data, error) {
        if (error)
          throw error;
        console.log(data);
      });

 ##### Get Packages by active | onhold | inactive states
      /** 
      *  get active packages => plantKey = 'active'
      *  get packages that are on hold => plantKey = 'onhold'
      *  get inactive packages  => plantKey = 'inactive'
      */
    const packageKey = "";
    merchant.getPackages(
      {
        lastModifiedEnd: "2020-08-18T06%3A30%3A00Z",
        lastModifiedStart: "2020-08-18T17%3A30%3A00Z",
      },
      packageKey,
      function (data, error) {
        if (error)
          throw error;
        console.log(data);
      });

 ##### Get package adjustment reasons
      merchant.getPackageAdjustmentReasons(
      function (data, error) {
        if (error)
          throw error;
        console.log(data);
      });


