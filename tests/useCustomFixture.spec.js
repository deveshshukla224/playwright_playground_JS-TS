const { customFixtureTest} = require('../util/custom-fixture');

customFixtureTest('Test using customData1', async ({ testData }) => {
    console.log(testData.userName); // Output: testuser
    console.log(testData.password); // Output: testpassword
    
});


