const axios = require('axios');
const config = require('../../config.js');

module.exports = {
    /*Retrives the list of incoming transfers*/
    getIncomingTransfers: () => {
        axios.get(`${config.serverUrl}/transfers/v1/incoming?licenseNumber=${config.licenseNo}&lastModifiedStart=${config.lastModifiedStart}&lastModifiedEnd=${config.lastModifiedEnd}`, { headers: { 'Authorization': config.authorization, 'Content-type': 'application/json' } })
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /*Retrives the list of outgoing transfers*/
    getOutgoingTransfers: (req, res) => {
        axios.get(`${config.serverUrl}/transfers/v1/outgoing?licenseNumber=${config.config.licenseNo}&lastModifiedStart=${config.config.lastModifiedStart}&lastModifiedEnd=${config.config.lastModifiedEnd}`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                console.log(res);
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /*Retrives the list of rejected transfers*/
    getRejectedTransfers: () => {
        axios.get(`${config.serverUrl}/transfers/v1/rejected?licenseNumber=${config.config.licenseNo}`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /*get the list of deliverires by transferID*/
    getDeliveriesById: (transferId) => {
        axios.get(`${config.serverUrl}/transfers/v1/${transferId}/deliveries`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* Get Delivery packages list by deliveryId*/
    getDeliveryPackages: (deliveryId) => {
        axios.get(`${config.serverUrl}/transfers/v1/delivery/${deliveryId}/packages`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* Get wholesale delivery packages list by deliveryId*/
    getWholesaleDeliveryPackages: (deliveryId) => {
        axios.get(`${config.serverUrl}/transfers/v1/delivery/${deliveryId}/packages/wholesale`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* Get Delivery package batches that require lab tests */
    getPackageRequiredLabTestBatches: (packageId) => {
        axios.get(`${config.serverUrl}/transfers/v1/delivery/package/${packageId}/requiredlabtestbatches`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* get the state types of the packages | processing, Rejected, */
    getPackagesStateTypes: () => {
        axios.get(`${config.serverUrl}/transfers/v1/delivery/packages/states`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* create external incoming package*/
    createExternalIncomingPackage: (data) => {
        axios.post(`${config.serverUrl}/transfers/v1/external/incoming?licenseNumber=${config.config.licenseNo}`, data, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* update external incoming package*/
    updateExternalIncomingPackage: (data) => {
        axios.put(`${config.serverUrl}/transfers/v1/external/incoming?licenseNumber=${config.config.licenseNo}`, data, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* remove external incoming package by transferId*/
    removeExternalIncomingPackage: (transferId) => {
        axios.delete(`${config.serverUrl}/transfers/v1/external/incoming/${transferId}?licenseNumber=${config.config.licenseNo}`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* get the transfer templates*/
    getTransferTemplates: () => {
        axios.get(`${config.serverUrl}/transfers/v1/templates?licenseNumber=${config.config.licenseNo}&lastModifiedStart=${config.config.lastModifiedStart}&lastModifiedEnd=${config.config.lastModifiedEnd}`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* get the delivery templates*/
    getTemplateDeliveries: (transferId) => {
        axios.get(`${config.serverUrl}/transfers/v1/templates/${transferId}/deliveries`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* get the template packages by template deliveryid ID*/
    getTemplatePackages: (deliveryId) => {
        axios.get(`${config.serverUrl}/transfers/v1/templates/delivery/${deliveryId}/packages`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* create templates */
    createTransferTemplates: (data) => {
        axios.post(`${config.serverUrl}/transfers/v1/templates?licenseNumber=${config.config.licenseNo}`, data, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* update existing template */
    updateTransferTemplates: (data) => {
        axios.put(`${config.serverUrl}/transfers/v1/templates?licenseNumber=${config.config.licenseNo}`, data, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* delete template */
    deleteTemplateById: (id) => {
        axios.delete(`${config.serverUrl}/transfers/v1/templates/${id}?licenseNumber=${config.config.licenseNo}`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /* get transfer types*/
    getTransferTypes: () => {
        axios.get(`${config.serverUrl}/transfers/v1/types?licenseNumber=${config.config.licenseNo}`, { headers: { 'Authorization': config.authorization } })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
