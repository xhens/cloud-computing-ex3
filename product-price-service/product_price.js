module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //ToDO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);


    //ToDO: add the pattern functions and describe the logic inside the function
    function productPrice(msg, response) {
        console.log("test");
        var foundProduct = '';
        for (var i=0; i<mockData.length; i++) {
            if(mockData[i].product_id == msg.productId) {
                console.log(mockData[i]);
                foundProduct += 1;
                break;
            }
        }
        if (foundProduct) {
            response(null, {result: mockData[foundProduct - 1].product_price})
        } else {
            response(null, {result: ''});
        }
    }

};