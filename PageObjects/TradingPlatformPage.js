const {BasePage} = require('../PageObjects/BasePage');

class TradingPlatformPage extends BasePage {

    get themeSwitherTradingPlatform(){
        return $('[class="theme-switcher ng-star-inserted"]');
    }


    get modalIconClose(){
        return $('[class="iconex-close-small icon-square modal__header-btn"]');
    }


    get modalIcon(){
      return $('questionnaire-low-skilled [class="modal"]')
    }


    async CloseModalIcon(){

      try { 
        await this.modalIconClose.waitForExist({timeout:20000});
         if (this.modalIconClose.isDisplayed()){
            this.modalIconClose.click()
         }
        
      } catch (error) {
        console.log(`${error}`)
      }
    }
   
}

module.exports = { TradingPlatformPage };