const BasePage = require("./BasePage");
const ClientsPage = require("./ClientsPage")
const ActionsPage = require("./ActionsPage")

class ClientsPageTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.clientsPage = new ClientsPage(this.testSelenium)
        this.actionsPage = new ActionsPage(this.testSelenium)
        
        // if your test uses more pages, you will have to inisiate them here, in the constractor
    }
   
    async addAndValidateClientTest(){
        
        await this.actionsPage.navigateToActionsPage()
        await this.clientsPage.addClient("Val", "Basov", "Israel", "Emily Durham", "blabla@blabla.com")
        await this.clientsPage.navigateToClientsPage()
        await this.clientsPage.searchAndValidateClient("Basov")
        
    }

    async deleteAndValidateClientTest(){
        await this.clientsPage.navigateToClientsPage()
        await this.clientsPage.deleteAndValidateClient("Basov")
    }
    
    async clickRightArrowTest(){
        await this.clientsPage.navigateToClientsPage()
        await this.clientsPage.clickRightArrow()
    }
}   


let clientPageTest = new ClientsPageTest();
// let actionsPageTest = new ActionsPageTest()
// clientPageTest.addAndValidateClientTest()
// clientPageTest.deleteAndValidateClientTest()
clientPageTest.clickRightArrowTest()

