const BasePage = require("./BasePage");
const ClientsPage = require("./ClientsPage")
const ActionsPage = require("./ActionsPage")
const HomePage = require("./HomePage")

class ActionsPageTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.clientsPage = new ClientsPage(this.testSelenium)
        this.actionsPage = new ActionsPage(this.testSelenium)
        this.homePage = new HomePage(this.testSelenium)}
        // if your test uses more pages, you will have to inisiate them here, in the constractor
        async changeAndValidateClientByOwner(){
            await this.actionsPage.navigateToActionsPage()
            await this.actionsPage.changeOwner("Val Basov")
            await this.clientsPage.navigateToClientsPage()
            await this.actionsPage.searchAndValidateOwner("Basov")

        }

        async changeAndValidateMailType(){
            await this.actionsPage.navigateToActionsPage()
            await this.actionsPage.cahgeMailType("Val Basov")
            await this.clientsPage.navigateToClientsPage()
            await this.actionsPage.searchAndValidateMailType("Basov")
        }

        async soldEmptyTest(){
            await this.actionsPage.navigateToActionsPage()
            await this.actionsPage.soldEmpty()
        }
    }


    let actionsPageTest = new ActionsPageTest();
    actionsPageTest.soldEmptyTest()