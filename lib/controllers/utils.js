
/**
 * set Login parameters, license no etc. 
 * @param { Object } configuration object
 */
exports.setEnvironmentParams = (configObj) => {
    let config = {};
    //setting config file with the user input data
    config.licenseNo = configObj.licenseNo || '';
    config.serverUrl = configObj.serverUrl || '';
    config.lastModifiedStart = configObj.lastModifiedStart? this.encodeURLStrings(configObj.lastModifiedStart): '';
    config.lastModifiedEnd = configObj.lastModifiedEnd? this.encodeURLStrings(configObj.lastModifiedEnd): '';
    let authToken = '';
    if (configObj.userKey && configObj.vendorKey) {
        authToken = this.convertTobase64(configObj.vendorKey, configObj.userKey);
    }
    config.authorization = 'Basic ' + authToken;
    return config;
}

//convert to base64 to set auth header
/**
 * @param { string } vendorkey { string } userKey  vendorKey and UserKey
 */
exports.convertTobase64 = (vendorkey, userkey) => {
    return Buffer.from(`${vendorkey}:${userkey}`).toString('base64');
}

/**
 * 
 */
 exports.encodeURLStrings = (string) => {
    return encodeURIComponent(string);
 }