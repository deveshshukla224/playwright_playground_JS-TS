//const {LoginPage} = require('./LoginPage');
import {LoginPage} from './LoginPage';
import {ClientPage} from './ClientPage';
import {MatrixLoginPage} from './MatrixLoginPage';
import {Page} from '@playwright/test';


export class POmanager{
    page:Page;
    loginPage:LoginPage;
    clinetPage:ClientPage;
    matrixLoginPage:MatrixLoginPage;

    constructor(page: Page){
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
