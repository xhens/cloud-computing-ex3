/**
 * import the seneca package
 */
const seneca = require('seneca')();
const Promise = require('bluebird');
const config = require('../config');
/**
 * Convert act to Promise
 */
const act = Promise.promisify(seneca.client({ host: config.product_price_service.host, port: config.product_price_service.port }).act, { context: seneca });

/**
 * ToDO: Define Service Method
 */
const GET_PRODUCT_PRICE = {role:'product', cmd: 'getProductPrice'};


/**
 * ToDO: Call Service Method
 */

const getProductPrice = (productId) => {
    /**
     * ToDO: Write act Method
     */
    return act(Object.assign({}, GET_PRODUCT_PRICE, {productId}))
};
module.exports = {
    getProductPrice
};
