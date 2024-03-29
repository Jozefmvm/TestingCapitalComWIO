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
        return $('.licLangSw.js-licLangSw .licLangSw__btn.gI.gCenter.gXs.js-licLangSwBtn.js-countries');
    }


    get changeCountry(){
        return $('.fieldDropdown.fieldDropdown--filter.fieldDropdown--lg.js-fieldDropdownFilter');
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


    get languageEn(){
        return $('[class="iconMd flagMin flagMin--gb"]');
    }

    get languageDe(){
        return $('[class="iconMd flagMin flagMin--de"]');
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
        await element.waitForClickable({ timeout: 5000 });
        await element.click()
    }


    async SelectCountryAndLanguage(country, language){

        await this.changeCountryAndLanguage.click({ timeout:5000 });
        await this.changeCountry.click({timeout:5000});
        await country.click({ timeout:5000 });
        await this.changeCountryAndLanguage.click({timeout:5000});
        await language.click({timeout:5000});
        
    }




}


module.exports = { Header };