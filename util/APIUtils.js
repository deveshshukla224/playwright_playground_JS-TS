const data = JSON.parse(JSON.stringify(require('../test_data/matrixLogin.json')));
const createBuildingData = JSON.parse(JSON.stringify(require('../test_data/createBuilding.json')));
class APIUtils {
    constructor(apiContext){
        this.apiContext = apiContext;

    }

    async getToken(){
        const loginResponse = await this.apiContext.post("https://staging.api.mymatrixrent.com/auth/login",{
            data:{
                email:data['email'],
                password:data['password']
            }
        })
        //get the response from the login api and parse it as json
        const loginResponseBody = await loginResponse.json();
        const token = loginResponseBody.token;
        console.log("token value from api test",token);
        return token;
}

    async createBuilding(token){
        const response_of_building_creation = await this.apiContext.post("https://staging.api.mymatrixrent.com/buildings",{
            headers:{
                "Authorization":`bearer ${token}`
            },
            data:  createBuildingData
        });
        const response_of_building_creation_body = await response_of_building_creation.json();
        console.log("response_of_building_creation",response_of_building_creation_body['data']['id']);
        console.log("response_of_building_creation",response_of_building_creation_body['data']['name']);
        return response_of_building_creation_body;
    // console.log("response_of_building_creation",await response_of_building_creation.json()['data']['id']); 
}
}

module.exports = {APIUtils};    