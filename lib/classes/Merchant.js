const utils = require("../controllers/utils.js"); 

function  Merchant(config) {
    this.configuration = utils.setEnvironmentParams(config);
}
module.exports = Merchant;