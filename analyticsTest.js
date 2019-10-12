const BasePage = require("./BasePage");
const ClientsPage = require("./ClientsPage")
const ActionsPage = require("./ActionsPage")
const HomePage = require("./HomePage")
const AnalyticsPage = require("./AnalyticsPage")

class AnalyticsPageTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.clientsPage = new ClientsPage(this.testSelenium)
        this.actionsPage = new ActionsPage(this.testSelenium)
        this.homePage = new HomePage(this.testSelenium)
        this.analyticsPage = new AnalyticsPage(this.testSelenium)
    }

    async changeMailTypeAndCheck(){
        await this.analyticsPage.navigateToAnalyticsPage()
        await this.analyticsPage.emailCounter()
        await this.actionsPage.navigateToActionsPage()
        await this.actionsPage.cahgeMailType("Val Basov")
        await this.analyticsPage.navigateToAnalyticsPage()
        setTimeout(()=>{
            console.log("count to 5")
        this.analyticsPage.checkEmailCounter()}, 5000)
    }

    async changeSoldAndCheck(){
        await this.analyticsPage.navigateToAnalyticsPage()
        await this.analyticsPage.soldPositionNumber()
        await this.actionsPage.navigateToActionsPage()
        await this.analyticsPage.changePosition("Val Basov")
        await this.analyticsPage.navigateToAnalyticsPage()
        setTimeout(()=>{
            console.log("count to 5")
        this.analyticsPage.checkSoldNumber()}, 5000)
    }

    async stabilityTest(){
        for(let i=0; i<=10; i++){
        await this.analyticsPage.navigateToAnalyticsPage()
        console.log("done " + i)}
    }
}

let analyticsPageTest = new AnalyticsPageTest();
analyticsPageTest.stabilityTest()