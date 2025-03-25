//const {test,expect} = require('@playwright/test');
import {test,expect} from '@playwright/test'
//const {POmanager} = require('../pageobjects/POmanager');
import {POmanager} from '../pageobjects/POmanager'
const clientpage_dataset = JSON.parse(JSON.stringify(require('../test_data/clientPage_test_data.json')));


test.use({
    launchOptions: {
      args: ['--start-maximized'],
    },
    viewport: null, // This ensures the window starts maximized
  });


for(const data of clientpage_dataset){
test(`Practise - Client Login Page for ${data.username}`, async ({page}) => {
      const poManager = new POmanager(page);
      const clientPage = poManager.getClinetPage()
      await clientPage.goTo();
      await clientPage.login(data.username, data.password);
    //data in one instance of array of data set that is why we are using data.username and data.password to get the value
    //and loop will run for each data set

});
}