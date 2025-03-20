const {test,expect} = require('@playwright/test');
const { assert } = require('console');
const mockData = {
    responseCode: 200,
    products: []
  }


//Flow : api request -> intercept the request -> modify the response -> send the modified response to the client
test('mocking data',async({page})=>{
    await page.goto("https://www.automationexercise.com/")
    await page.waitForLoadState('networkidle');
    //intercepting the request made to the endpoint /products
    //fetch the original response and then alter the response
    //using route.fulfill() method we can alter the response
    //response is the original response from the endpoint - we are not modifying it 
    //we are modifying the response before sending it to the client
    //we are sending the modified response to the client by updating the response body
    await page.route("https://www.automationexercise.com/products",async(route)=>{
        const response = await page.request.fetch(route.request())  
        //original response 
        let body= JSON.stringify(mockData);
        //convert the js object to json string
        await route.fulfill({
            response,
            body
            //modified body of response
        })
    })
    
    await page.locator('a[href="/products"]').click();
});
