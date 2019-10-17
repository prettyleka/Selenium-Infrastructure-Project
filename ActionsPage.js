const Winston = require("./logger")
class ActionsPage {
    constructor(selenium) {
        this.selenium = selenium
    }

    async navigateToActionsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/actions")
    }


    // Takes an input and changes the owner name 
    async changeOwner(input) {
        await this.selenium.write(input, "css", "#root > div > div.actions-container > div.update-container > table > div > input")
        await this.selenium.write("Hull Conrad", "css", "#root > div > div.actions-container > div.update-container > table > table > tr.change-owner > th:nth-child(2) > input")
        await this.selenium.clickElement("css", "#root > div > div.actions-container > div.update-container > table > table > tr.change-owner > th:nth-child(3) > input[type=button]")

    }

    // Takes an input, search for a client and checks if the owner was changed
    async searchAndValidateOwner(input) {
        await this.selenium.write(input, "xpath", '//*[@id="root"]/div/div[4]/div[1]/input')
        if (await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > table > tr.clientDetails > th:nth-child(5)") == "Hull Conrad") {
            logger.info("owner is changed and was validated")
        }
        else {
            logger.warn("owner isn't changed")
        }
    }

    // Takes an input, search for a client and changes the mail type 
    async cahgeMailType(input) {
        await this.selenium.write(input, "css", "#root > div > div.actions-container > div.update-container > table > div > input")
        await this.selenium.write("A", "css", "#change-email-type > th:nth-child(2) > input")
        await this.selenium.clickElement("css", "#change-email-type > th:nth-child(3) > input[type=button]")

    }
    // Takes an input, search for a client and checks if the mail type was changed 
    async searchAndValidateMailType(input) {
        await this.selenium.write(input, "xpath", '//*[@id="root"]/div/div[4]/div[1]/input')
        if (await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > table > tr:nth-child(2) > th:nth-child(8)") == "A") {
            logger.info("mail type is canged and was validated")
        }
        else {
            logger.warn("mail type wasn't changed")
        }
    }

    // Clicks on element without inputs and catch a pop-up
    async soldEmpty() {
        await this.selenium.clickElement("css", "#root > div > div.actions-container > div.update-container > table > table > tr.change-sold > th:nth-child(2) > input[type=button]")
        await this.selenium.getTextFromElement("className", "error-pop-up")

    }




}


module.exports = ActionsPage


