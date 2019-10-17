class ClientsPage {
    constructor(selenium) {
        this.selenium = selenium

    }
    async navigateToClientsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/client")
    }

    // Takes inputs, search for a client and validate if its  exist
    async searchAndValidateClient(input) {
        await this.selenium.write(input, "xpath", '//*[@id="root"]/div/div[4]/div[1]/input')
        await this.selenium.isElementExists("css", '#root > div > div.clients-component > table > tr:nth-child(2)')
    }

    // Adds a client

    async addClient(name, lastname, country, owner, email) {
        await this.selenium.write(name, "id", "firstName")
        await this.selenium.write(lastname, "id", 'lastName')
        await this.selenium.write(country, "id", "country")
        await this.selenium.write(owner, "css", "input[id='owner']")
        await this.selenium.write(email, "css", "#email")
        await this.selenium.clickElement('css', '#root > div > div.actions-container > div.add-client-container > div:nth-child(2) > input')

    }

    // Takes an input, search for a client, delete it and validate if it was deleted

    async deleteAndValidateClient(input) {
        await this.selenium.write(input, "xpath", '//*[@id="root"]/div/div[4]/div[1]/input')
        await this.selenium.clickElement("css", '#root > div > div.clients-component > table > tr.clientDetails')
        await this.selenium.clickElement("css", "#root > div > div.clients-component > div.details-pop-up-container > div > div.update-pop-up-btn > input.delete-client-popup-btn")
        setTimeout(() => {
            console.log("count to 5")
            this.selenium.isElementExists("css", '#root > div > div.clients-component > table > tr:nth-child(2)')
        }, 5000)

    }

    // Clicks on the right arrow and checks that pages change


    async clickRightArrow() {
        await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
        await this.selenium.clickElement("css", "#root > div > div.clients-component > div.page-numbers > img:nth-child(5)")
        await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
    }

}

module.exports = ClientsPage


