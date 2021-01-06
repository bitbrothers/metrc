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

##### Create sales receipt
    const transactionOne = new metrc.PostTransaction({
      PackageLabel: "ABCDEF012345670000010331",
      Quantity: 1.0,
      UnitOfMeasure: "Ounces",
      TotalAmount: 9.99
    });

    const transactionTwo = new metrc.PostTransaction({
      PackageLabel: "ABBBR012345670000010331",
      Quantity: 2.0,
      UnitOfMeasure: "Ounces",
      TotalAmount: 18.99
    });

    let transactionArray = [
      transactionOne,
      transactionTwo
    ]

    /*Post sales receipt data*/
    merchant.postSalesReceipt({
      SalesDateTime: "2016-10-04T16:44:53.000",
      SalesCustomerType: "Consumer",
      PatientLicenseNumber: null,
      CaregiverLicenseNumber: null,
      IdentificationMetho: null,
    }, transactionArray, function (data, error) {
      if (error)
        throw error;
        console.log(data);
    });

    /*Put sales receipt data*/
    merchant.putSalesReceipt({
      SalesDateTime: "2016-10-04T16:44:53.000",
      SalesCustomerType: "Consumer",
      PatientLicenseNumber: null,
      CaregiverLicenseNumber: null,
      IdentificationMetho: null,
    }, transactionArray, function (data, error) {
      if (error)
        throw error;
        console.log(data);
    });

 ##### Delete Sales receipt by id
    const receiptId = 12324;
    merchant.deleteReceipt(receiptId, function (data, error) {
      if (error)
        throw error;
      console.log(data);
    });


 ##### Create sales transaction
      const transactionOne = new metrc.PostTransaction({
      PackageLabel: "ABCDEF012345670000010331",
      Quantity: 1.0,
      UnitOfMeasure: "Ounces",
      TotalAmount: 9.99
    });

    const transactionTwo = new metrc.PostTransaction({
      PackageLabel: "ABBBR012345670000010331",
      Quantity: 2.0,
      UnitOfMeasure: "Ounces",
      TotalAmount: 18.99
    });

    let transactionArray = [
      transactionOne,
      transactionTwo
    ];

    let transactionDate = '2019-01-02';

    //create sales transaction
    merchant.createSalesTransaction(
      transactionDate,
      transactionArray,
      function (data, error) {
        if (error)
          throw error;
        console.log(data);
      }
    );

    //put sales transaction
    merchant.createSalesTransaction(
      transactionDate,
      transactionArray,
      function (data, error) {
        if (error)
          throw error;
        console.log(data);
      }
    );

 ##### Create a package / packages

    const ingredientOne = new metrc.PackageIngredient(
      {
        Package: "ABCDEF012345670000010041",
        Quantity: 8.0,
        UnitOfMeasure: "Ounces"
      });

    const ingredientTwo = new metrc.PackageIngredient(
      {
        Package: "ABCDEF0123234220000010041",
        Quantity: 7.0,
        UnitOfMeasure: "Ounces"
      });

    const ingredientThree = new metrc.PackageIngredient(
      {
        Package: "ABCDESKDO123234220000830041",
        Quantity: 2.0,
        UnitOfMeasure: "Ounces"
      });

    const packageData = new metrc.PostPackage(
      {
        Tag: "ABCDEF012345670000020201",
        Location: null,
        Item: "Buds",
        Quantity: 16.0,
        UnitOfMeasure: "Ounces",
        PatientLicenseNumber: "X00001",
        Note: "This is a note.",
        IsProductionBatch: false,
        ProductionBatchNumber: null,
        IsDonation: false,
        ProductRequiresRemediation: false,
        UseSameItem: false,
      });
    packageData.addIngredient(ingredientOne);
    packageData.addIngredient(ingredientTwo);

    const packageTwoData = new metrc.PostPackage(
      {
        Tag: "ABCSUUYRE2345670000020201",
        Location: null,
        Item: "Buds",
        Quantity: 18.0,
        UnitOfMeasure: "Ounces",
        PatientLicenseNumber: "X00721",
        Note: "This is a note.",
        IsProductionBatch: false,
        ProductionBatchNumber: null,
        IsDonation: false,
        ProductRequiresRemediation: false,
        UseSameItem: false,
      });
    packageTwoData.addIngredient(ingredientThree);

    /*Create a packege*/
    merchant.createPackage(
      [packageData, packageTwoData],
      function (data, error) {
        if (error)
          throw error;
        console.log(data);
      });

      /*Create a testing packege*/
    merchant.createTestingPackage(
      [packageData, packageTwoData],
      function (data, error) {
        if (error)
          throw error;
        console.log(data);
      });

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


