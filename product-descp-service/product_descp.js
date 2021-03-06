module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //ToDO: add the pattern functions and describe the logic inside the function
    function productURL(msg, response) {
        var foundProduct = false;
        for (var i = 0; i < mockData.length; i++) {
            if (mockData[i].product_id == msg.productId) {
                foundProduct = true;
                response(null, {result: mockData[i].product_url})
                break;
            }
        }

        if (!foundProduct) {
            response(null, {result: ''})
        }
    };

    function productName(msg, response) {
        var foundProduct = false;
        for (var i = 0; i < mockData.length; i++) {
            if (mockData[i].product_id == msg.productId) {
                foundProduct = true;
                response(null, {result: mockData[i].product_name});
                break;
            }
        }

        if (!foundProduct) {
            response(null, {result: ''})
        }


    };
};