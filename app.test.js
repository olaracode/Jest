const { fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js')

test("One euro should Be 1.1 USD", function(){
    expect(fromEuroToDollar(1)).toBe(1.1);
})

test("One euro should be 1.206 dollars", function(){  
    expect(fromDollarToYen(1)).toBe(0.0084); 
})

test("One euro should be 1.206 dollars", function(){  
    expect(fromYenToPound(1)).toBe(0.0064);
})