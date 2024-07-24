class MainPage {
    elements = {
        searchBar: () => cy.get('.input-group > #mainSearchbar'),
        searchBtn: () => cy.get(':nth-child(3) > .icon-zoom'),
        firstArticle: () => cy.get('[data-prodid="1154249156"] > a > .m-plp-card-container > .m-figureCard__figure > :nth-child(2) > .m-figureCard__figcaption > .d-flex > .card-title'),
        firstArticlePrice: ()=> cy.get('[data-prodid="1154249156"] > a > .m-plp-card-container > .m-figureCard__figure > :nth-child(2) > .m-figureCard__figcaption > .o-card__image__container > :nth-child(1) > .a-card-discount'),
        btnSubmit: () => cy.get('type="submit"]'),
        burgerMenu: () => cy.get('#entry_217833 > .icon-left > .icon > svg > use'),
        tamanoVerMas: () => cy.get("#Tamao"),
        tamanoFilter: () => cy.get("#variants\\.normalizedSize-55\\ pulgadas"),
        searchBrand: () => cy.get('#searchBrand'),
        brandFilter: () => cy.get("#Tamao"),
        priceFilter: () => cy.get("#variants\\.prices\\.sortPrice-10000-700000"),
        brandSony: () => cy.get("#brand-SONY"),
        brandDior: () => cy.get('#brand-DIOR'),
        menuCategorias: () => cy.get('.o-navDesktop > .m-navDesktop__menuList > .m-navDesktop__section > .a-header__strongLink'),
        submenuBelleza: () => cy.get('#categories-sidebarMenu > div > div:nth-child(6) > li > a'),
        categoryPerfumes:() => cy.get('#CAT5020010 > div.row.align-items-top.resp-container > div > div > div.sbox-1 > ul > li:nth-child(2) > div > a'),
          }
    

    searchBrandName(brand){
      this.elements.searchBrand().clear("S");
      cy.wait(1500);
      this.elements.searchBrand().type(brand);
      cy.wait(1500);
    }
    
    filterbySize(){
      this.elements.tamanoVerMas().click();
      this.elements.tamanoFilter().click
    }

    clickSearchMenu(){
      this.elements.searchBar().clear();
    }

    WebsiteURL() {
      cy.visit("www.liverpool.com.mx");
      cy.wait(2000);
      
    }

    enterItem(item) {
     this.elements.searchBar().type(item);
     return this;
   }
  
   searchBtn(){
    this.elements.searchBtn().click();
   }

    verifyArticleTitle() {
     return this.elements.firstArticle().should('be.visible'); //.should('contain', 'PlayStation');
   }

   verifyArticlePrice(){
    return this.elements.firstArticlePrice().should('be.visible');
   }

 }
 const main = new MainPage();
 export default main;