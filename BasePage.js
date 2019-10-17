const SeleniumInfra = require("./SeleniumInfra");
const Winston = require("./logger")


class BasePage {
  constructor() {
    this.selenium = new SeleniumInfra()
      ;
  }
}

module.exports = BasePage

