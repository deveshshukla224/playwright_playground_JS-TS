const base = require('@playwright/test');

exports.customFixtureTest = base.test.extend({
    testData:{
        userName: 'testuser',
        password: 'testpassword'
    }   
});