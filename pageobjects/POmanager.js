const {LoginPage} = require('./LoginPage');
const {ClientPage} = require('./ClientPage');
const {MatrixLoginPage} = require('./MatrixLoginPage');


class POmanager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.clinetPage = new ClientPage(this.page);
        this.matrixLoginPage = new MatrixLoginPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getClinetPage(){
        return this.clinetPage;
    }

    getMatrixLoginPage(){
        return this.matrixLoginPage;
    }
}

module.exports = {POmanager};