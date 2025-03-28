//const {test,expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';
import { url } from 'inspector';


test('intercepting request',async({page})=>{

    //intercepting the request made to the endpoint
    await page.route("https://www.google.com/",async(route)=>{
        //upadte the request to the new url , one can update headers,body,etc in similar way
        await route.continue({url:"https://developer.mozilla.org/en-US/"})
    })
    await page.goto("https://www.google.com/")
    await page.waitForLoadState('networkidle');
    expect(await page.title()).toContain("MDN Web Docs");
});