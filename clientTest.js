const BasePage = require("./BasePage");
const ClientsPage = require("./ClientsPage")
const ActionsPage = require("./ActionsPage")
const logger = require('./logger');

class ClientsPageTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.clientsPage = new ClientsPage(this.testSelenium)
        this.actionsPage = new ActionsPage(this.testSelenium)


    }

    // Takes inputs, adds new client and then search for a client and validate if its  exist

    async addAndValidateClientTest() {

        await this.actionsPage.navigateToActionsPage()
        await this.clientsPage.addClient("Val", "Basov", "Israel", "Emily Durham", "blabla@blabla.com")
        await this.clientsPage.navigateToClientsPage()
        await this.clientsPage.searchAndValidateClient("Basov")


    }

    // Takes input, search for a client, delete it and validate if it was deleted

    async deleteAndValidateClientTest() {
        await this.clientsPage.navigateToClientsPage()
        await this.clientsPage.deleteAndValidateClient("Basov")
    }

    // Clicks on the right arrow and checks that pages change

    async clickRightArrowTest() {
        await this.clientsPage.navigateToClientsPage()
        await this.clientsPage.clickRightArrow()
    }
}


let clientPageTest = new ClientsPageTest();

clientPageTest.addAndValidateClientTest()
logger.warn("this is addAndValidateClientTest")
// clientPageTest.deleteAndValidateClientTest()
// logger.warn("this is deleteAndValidateClientTest")
// clientPageTest.clickRightArrowTest()
// logger.warn("this is clickRightArrowTest")


