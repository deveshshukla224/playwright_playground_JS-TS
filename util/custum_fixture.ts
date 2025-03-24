import { test as baseTest } from '@playwright/test'
interface TestData{ 
    userName: string;
    password: string;
}

export const customFixtureTest = baseTest.extend<{ testData: TestData }>({
    testData:{
        userName: 'testuser',
        password: 'testpassword'
    }   
});