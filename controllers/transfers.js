const axios = require('axios');
const config = require('../config.js');

const transferUrl = `${config.config.serverUrl}/transfers/v1`;
const headers = { 'Authorization': config.config.authorization }

/*Retrives the list of incoming transfers*/
exports.getIncomingTransfers = () => {
    axios.get(`${transferUrl}/incoming?licenseNumber=${config.config.licenseNo}&lastModifiedStart=${config.config.lastModifiedStart}&lastModifiedEnd=${config.config.lastModifiedEnd}`, { headers: headers })
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((err) => {
            console.log(err);
        });
}

/*Retrives the list of outgoing transfers*/
exports.getOutgoingTransfers = (req, res) => {
    axios.get(`${transferUrl}/outgoing?licenseNumber=${config.config.licenseNo}&lastModifiedStart=${config.config.lastModifiedStart}&lastModifiedEnd=${config.config.lastModifiedEnd}`, { headers: headers })
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

/*Retrives the list of rejected transfers*/
exports.getRejectedTransfers = () => {
    axios.get(`${transferUrl}/rejected?licenseNumber=${config.config.licenseNo}`, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}


/*get the list of deliverires by transferID*/
exports.getDeliveriesById = (transferId) => {
    axios.get(`${transferUrl}/${transferId}/deliveries`, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

/* Get Delivery packages list by deliveryId*/
exports.getDeliveryPackages = (deliveryId) => {
    axios.get(`${transferUrl}/delivery/${deliveryId}/packages`, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}


/* Get wholesale delivery packages list by deliveryId*/
exports.getWholesaleDeliveryPackages = (deliveryId) => {
    axios.get(`${transferUrl}/delivery/${deliveryId}/packages/wholesale`, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}


/* Get Delivery package batches that require lab tests */
exports.getPackageRequiredLabTestBatches = (packageId) => {
    axios.get(`${transferUrl}/delivery/package/${packageId}/requiredlabtestbatches`, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}


/* get the state types of the packages | processing, Rejected, */
exports.getPackagesStateTypes = () => {
    axios.get(`${transferUrl}/delivery/packages/states`, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

/* create external incoming package*/
exports.createExternalIncomingPackage = (data) => {
    axios.post(`${transferUrl}/external/incoming?licenseNumber=${config.config.licenseNo}`, data, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}


/* update external incoming package*/
exports.updateExternalIncomingPackage = (data) => {
    axios.put(`${transferUrl}/external/incoming?licenseNumber=${config.config.licenseNo}`, data, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}


/* remove external incoming package by transferId*/
exports.removeExternalIncomingPackage = (transferId) => {
    axios.delete(`${transferUrl}/external/incoming/${transferId}?licenseNumber=${config.config.licenseNo}`, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

/* get the transfer templates*/
exports.getTransferTemplates = () => {
    axios.get(`${transferUrl}/templates?licenseNumber=${config.config.licenseNo}&lastModifiedStart=${config.config.lastModifiedStart}&lastModifiedEnd=${config.config.lastModifiedEnd}`, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

/* get the delivery templates*/
exports.getTemplateDeliveries = (transferId) => {
    axios.get(`${transferUrl}/templates/${transferId}/deliveries`, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}


/* get the template packages by template deliveryid ID*/
exports.getTemplatePackages = (deliveryId) => {
    axios.get(`${transferUrl}/templates/delivery/${deliveryId}/packages`, { headers: headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}