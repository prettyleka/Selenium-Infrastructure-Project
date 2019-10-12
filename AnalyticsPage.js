class AnalyticsPage {
    constructor(selenium) {
	    this.selenium = selenium
	}

    async navigateToAnalyticsPage() {
            await this.selenium.getURL("https://lh-crm.herokuapp.com/analytics")
    }


    async emailCounter(){
        await this.selenium.getTextFromElement("css", "#root > div > div.analytics > div.badges > div:nth-child(2) > div.badge-val")
    }

    async checkEmailCounter(){
        await this.selenium.getTextFromElement("css", "#root > div > div.analytics > div.badges > div:nth-child(2) > div.badge-val")
        
    } 

    async soldPositionNumber(){
        await this.selenium.getTextFromElement("css", "#root > div > div.analytics > div.badges > div:nth-child(3) > div.badge-val")
    }

    async changePosition(input){
        await this.selenium.write(input, "css", "#root > div > div.actions-container > div.update-container > table > div > input")

        await this.selenium.clickElement("css", "#root > div > div.actions-container > div.update-container > table > table > tr.change-sold > th:nth-child(2) > input[type=button]")
    }

    async checkSoldNumber(){
        await this.selenium.getTextFromElement("css", "#root > div > div.analytics > div.badges > div:nth-child(3) > div.badge-val")

    }
    

}    

module.exports = AnalyticsPage