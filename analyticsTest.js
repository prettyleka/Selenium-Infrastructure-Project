const BasePage = require("./BasePage");
const ClientsPage = require("./ClientsPage")
const ActionsPage = require("./ActionsPage")
const HomePage = require("./HomePage")
const AnalyticsPage = require("./AnalyticsPage")
const logger = require("./logger")

class AnalyticsPageTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.clientsPage = new ClientsPage(this.testSelenium)
        this.actionsPage = new ActionsPage(this.testSelenium)
        this.homePage = new HomePage(this.testSelenium)
        this.analyticsPage = new AnalyticsPage(this.testSelenium)
    }

    // Takes a number from email counter, change mail type and check if the number was changed
    async changeMailTypeAndCheck() {
        await this.analyticsPage.navigateToAnalyticsPage()
        await this.analyticsPage.emailCounter()
        await this.actionsPage.navigateToActionsPage()
        await this.actionsPage.cahgeMailType("Val Basov")
        await this.analyticsPage.navigateToAnalyticsPage()
        await this.analyticsPage.checkEmailCounter()

    }

    // Takes a number of sold positions,change sold position and check if the number was changed
    async changeSoldAndCheck() {
        await this.analyticsPage.navigateToAnalyticsPage()
        await this.analyticsPage.checkSoldNumber()
        await this.actionsPage.navigateToActionsPage()
        await this.analyticsPage.changePosition("Val Basov")
        await this.analyticsPage.navigateToAnalyticsPage()
        setTimeout(() => {
            logger.warn("count to 5, it's timer")
            this.analyticsPage.checkSoldNumber()
        }, 5000)
    }


    //Check if the site is able to uploads 10 times in row 
    async stabilityTest() {
        for (let i = 0; i <= 10; i++) {
            await this.analyticsPage.navigateToAnalyticsPage()
            logger.info("done " + i)
        }
    }
}

let analyticsPageTest = new AnalyticsPageTest();
analyticsPageTest.changeSoldAndCheck()
logger.warn("this is changeSoldAndCheck test")
// analyticsPageTest.stabilityTest()
// logger.warn("this is stabilityTest")