module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //ToDO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);


    //ToDO: add the pattern functions and describe the logic inside the function
    function productPrice(msg, response) {
        var foundProduct = false;
        for (var i = 0; i < mockData.length; i++) {
            if (mockData[i].product_id == msg.productId) {
                foundProduct = true;
                response(null, {result: mockData[i].product_price});
                break;
            }
        }

        if (!foundProduct) {
            response(null, {result: ''})
        }
    };
};