//const {test, expect,request} = require('@playwright/test');
import {test, expect,request} from '@playwright/test';
import {APIUtils} from '../util/APIUtils';
let token;

test.beforeAll(async({})=>{
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext);
    token = await apiUtils.getToken();
    
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
    const apiUtils = new APIUtils(context_api_for_creating_building);
    const response_of_building_creation = await apiUtils.createBuilding(token);
    console.log("response_of_building_creation",response_of_building_creation);
       
});