const axios = require('axios');
const config = require('../../config.js');

module.exports = {
    /**get strain by id
     * @param {strainId}
     */
    getStrainByStrainId: (strainId) => {
        axios.get(`${config.serverUrl}/strains/v1/${strainId}?licenseNumber=${config.licenseNo}`, { headers: { 'Authorization': config.authorization, 'Content-type': 'application/json' } })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log(err);
            });
    },


    /**get active strains for a particular license no.*/
    getActiveStrains: () => {
        axios.get(`${config.serverUrl}/strains/v1/active?licenseNumber=${config.licenseNo}`, { headers: { 'Authorization': config.authorization, 'Content-type': 'application/json' } })
            .then((res) => {
                console.log(res)
                return res;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /**create a strain 
     * @param {Array[Objects]}*/
    createStrain: (strainData) => {
        axios.post(`${config.serverUrl}/strains/v1/create?licenseNumber=${config.licenseNo}`, strainData, { headers: { 'Authorization': config.authorization, 'Content-type': 'application/json' } })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /**create a strain 
     * @param {Array[Objects]}*/
    updateStrain: (strainData) => {
        axios.post(`${config.serverUrl}/strains/v1/update?licenseNumber=${config.licenseNo}`, strainData, { headers: { 'Authorization': config.authorization, 'Content-type': 'application/json' } })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    /**create a strain 
     * @param {strainId}*/
    deleteStrain: (strainId) => {
        axios.delete(`${config.serverUrl}/strains/v1/${strainId}?licenseNumber=${config.licenseNo}`, { headers: { 'Authorization': config.authorization, 'Content-type': 'application/json' } })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}