const config = require('../../config.js');

/**
 * set Login parameters, license no etc. 
 * @param { Object } configuration object
 */
exports.setEnvironmentParams = (configObj) => {
    //setting config file with the user input data
    config.licenseNo = configObj.licenseNo || '';
    config.serverUrl = configObj.serverUrl || '';
    config.lastModifiedStart = configObj.lastModifiedStart || '';
    config.lastModifiedEnd = configObj.lastModifiedEnd || '';
    let authToken = '';
    if (configObj.userKey && configObj.vendorKey) {
        authToken = this.convertTobase64(configObj.vendorKey, configObj.userKey);
    }
    config.authorization = 'Basic ' + authToken;
}

//convert to base64 to set auth header
/**
 * @param {vendorkey, userKey} vendorKey and UserKey
 */
exports.convertTobase64 = (vendorkey, userkey) => {
    return Buffer.from(`${vendorkey}:${userkey}`).toString('base64');
}