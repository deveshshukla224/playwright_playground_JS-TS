//const {test, expect,request} = require('@playwright/test');
import {test, expect,request} from '@playwright/test';
const data = JSON.parse(JSON.stringify('../test_data/dummyLogin.json'));
let token;



test.beforeAll(async({})=>{
    const apiContext = await request.newContext();
    //create a new context for the api request similar to browser context
    //make request to the login api via context
    const loginResponse = await apiContext.post("https://staging.api.mymatrixrent.com/auth/login",{
        data:{
            email:data['email'],
            password:data['password']
        }
    })
    //get the response from the login api and parse it as json
    const loginResponseBody = await loginResponse.json();
    expect(loginResponse.status()).toBe(200);
    token = loginResponseBody.token;
    console.log("token value from api test",token);
    
});

test("Login via token Injection", async({page})=>{

    await page.addInitScript((value_of_token)=>{
        window.localStorage.setItem('auth_token',"bearer "+value_of_token);
        //if data is set in session storage then it will window.sessionStorage.setItem(key,value)
    },token)
    

    console.log("token value from web test",token);
    await page.goto("https://staging.app.mymatrixrent.com/")
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL("https://staging.app.mymatrixrent.com/app/applications?page=1");
});


test("add Property", async({page})=>{
    const context_api_for_creating_building = await request.newContext();
    const response_of_building_creation = await context_api_for_creating_building.post("https://staging.api.mymatrixrent.com/buildings",{
        headers:{
            "Authorization":`bearer ${token}`
        },
        data:{
            name: "test_building_creation_four",
            organisation_id: 116,
            address_line_1: "333,S Miami Ave",
            address_line_2: "",
            state_code: "FL",
            city_name: "Miami",
            zip_code: "33130",
            latitude: "25.7710405",
            longitude: "-80.1930838",
            type: "multi_unit",
            monthly_rent: 0,
            status: undefined,
            security_deposit: 0,
            cats_allowed: null,
            dogs_allowed: null,
            number_of_bathrooms: 0,
            number_of_bedrooms: 0,
            pha_voucher_enabled: false
        }  
    });
    const response_of_building_creation_body = await response_of_building_creation.json();

    console.log("response_of_building_creation",response_of_building_creation_body['data']['id']);
    console.log("response_of_building_creation",response_of_building_creation_body['data']['name']);
    // console.log("response_of_building_creation",await response_of_building_creation.json()['data']['id']);    
});