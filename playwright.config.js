// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  //testDir:'/home/devslane-75/Devesh/playwright_js_sdet_QA/tests/LoginPageCases.spec.js',
  
  //path to test files
  timeout: 40 * 1000,
  //timeout for test - test needs to be completed in this time
  expect: {
    timeout: 30 * 1000
  },
  //timeout for expect[assersations] - will wait for this time for expect to pass or match the expected value
  reporter: 'html',
  projects:
  [
    {
      name: 'chrome',
      use: {
        headless: false,
        //run in headless mode
        browserName:'chromium',
        //browser to be used,
        screenshot: 'only-on-failure',
        trace: 'on'
      }
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        //browser to be used
        screenshot: 'only-on-failure',
        trace: 'on',
        headless:true
      }
    }
  ]
  //reporter to be used - html
  
});

