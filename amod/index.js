const express = require('express');

const PORT = process.env.port || 5000;
const transfers = require('./lib/controllers/transfers.js');
const strains = require('./lib/controllers/strains.js');
const configParams = require('./lib/controllers/paramsConfig.js');

const app = express();

//code to test of APIs
app.get('/', (req, res) => {
    configParams.setEnvironmentParams(
        {
            userKey: "FusVbe4Yv6W1DGNuxKNhByXU6RO6jSUPcbRCoRDD98VNXc4D",
            vendorKey: "y51gXYKY2zqeiWXFh8jAJOaDtOD1VfabCdWvlGpQ3EtGqBHd",
            serverUrl: "https://sandbox-api-ca.metrc.com",
            licenseNo: "M10-0000004-LIC",
            lastModifiedEnd: "2020-08-18T06:30:00Z",
            lastModifiedStart: "2020-08-18T06:30:00Z"
        }
    )
    setTimeout(() => {
        transfers.getIncomingTransfers()
        res.send(strains.getActiveStrains());
    }, 200);
});

app.listen(PORT, () => {
    console.log('server running on port' + PORT)
});
