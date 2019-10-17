const BasePage = require("./BasePage");
const ClientsPage = require("./ClientsPage")
const ActionsPage = require("./ActionsPage")
const HomePage = require("./HomePage")
const logger = require('./logger');


class ActionsPageTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.clientsPage = new ClientsPage(this.testSelenium)
        this.actionsPage = new ActionsPage(this.testSelenium)
        this.homePage = new HomePage(this.testSelenium)
    }

    //Takes an input, changes the owner name and then search for a client and checks the owner was changed 
    async changeAndValidateClientByOwner() {
        await this.actionsPage.navigateToActionsPage()
        await this.actionsPage.changeOwner("Val Basov")
        await this.clientsPage.navigateToClientsPage()
        await this.actionsPage.searchAndValidateOwner("Basov")

    }


    // Takes an input, search for a client, changes the mail type then takes an input, search for a client and checks the mail type was changed
    async changeAndValidateMailType() {
        await this.actionsPage.navigateToActionsPage()
        await this.actionsPage.cahgeMailType("Val Basov")
        await this.clientsPage.navigateToClientsPage()
        await this.actionsPage.searchAndValidateMailType("Basov")
    }


    // Click on element without input and catch a pop-up
    async soldEmptyTest() {
        await this.actionsPage.navigateToActionsPage()
        await this.actionsPage.soldEmpty()
    }
}


let actionsPageTest = new ActionsPageTest();
// actionsPageTest.changeAndValidateClientByOwner()
// logger.warn("this is changeAndValidateClientByOwner test")
// actionsPageTest.changeAndValidateMailType()
// logger.warn("this is changeAndValidateMailType test")
actionsPageTest.soldEmptyTest()
logger.warn("this is soldEmptyTest")