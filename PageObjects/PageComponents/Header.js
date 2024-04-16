const { BasePage } = require('../BasePage');


class Header extends BasePage {



    get logoLinkHeader() {
        return $('.gI.gCenter.gXs .cc-header__logo');
    }


    get educationLinkHeader() {
        return $('[data-type="nav_id96"]');
    }


    get marketsLinkHeader(){
        return $('[data-type="nav_id3"]');
    }


    get cryptocurrenciesMarketsHeader(){
        return $('[data-type="nav_id65"]');
    }


    get changeCountryAndLanguage(){
        return $('[class="licLangSw js-licLangSw"]');
    }


    get changeCountry(){
        return $('[class="fieldDropdown fieldDropdown--filter fieldDropdown--lg js-fieldDropdownFilter"]');
    }


    get brazilCountry(){
        return $('[data-country="br"]');
    }


    get spainCountry(){
        return $('[data-country="es"]');
    }


    get franceCountry(){
        return $('[data-country="fr"]');
    }


    get unitedKingdomCoutry(){
        return $('[data-country="gb"]');
    }


    get arabEmiratesCountry(){
        return $('[data-country="ae"]');
    }


    get germanyCountry(){
        return $('[data-country="de"]');
    }


    get australiaCountry(){
        return $('[data-country="au"]');
    }


    get argentinaCountry(){
        return $('[data-country="ar"]');
    }


    get languageEn(){
        return $('[class="iconMd flagMin flagMin--gb"]');
    }

    get languageDe(){
        return $('[class="iconMd flagMin flagMin--de"]');
    }


    get languageAr(){
        return $('[class="iconMd flagMin flagMin--ab"]');
    }


    get licence(){
        return $('#licenseMessageSpan');
    }


    get allTabsFromHeader(){
        return $$('[data-type="nav_id2"], [data-type="nav_id96"], [data-type="nav_id3"], [data-type="nav_id10"], [data-type="nav_id16"]');
    }


    get acceptAllButton(){
        return $('.banner-actions-container #onetrust-accept-btn-handler'); 
    }


    get currentCountry(){
        return $('small[class="js-currCountry"]');
    }



    async ClickToElement(element) {

        await element.waitForClickable({timeout: 10000});
        await element.click()
        
    }


    async SelectCountryAndLanguage(country, language){

        await this.changeCountryAndLanguage.waitForDisplayed({timeout:10000});
        await this.changeCountryAndLanguage.click();
        await this.changeCountry.waitForDisplayed({timeout:10000});
        await this.changeCountry.click();
        await country.waitForDisplayed({timeout:10000})
        await country.click();
        await this.changeCountryAndLanguage.waitForClickable({timeout:10000})
        await this.changeCountryAndLanguage.click();
        await language.waitForClickable({timeout:10000})
        await language.click();
        
    }

    async GoToCryptocurrencies(){

        await this.marketsLinkHeader.waitForDisplayed({timeout:10000});
        await this.marketsLinkHeader.moveTo( 846, 59);
        await this.cryptocurrenciesMarketsHeader.waitForClickable({timeout:10000});
        await this.cryptocurrenciesMarketsHeader.click();
    
    }




}


module.exports = { Header };