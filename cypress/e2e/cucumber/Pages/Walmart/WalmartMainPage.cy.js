class MainPage {
    elements = {
        searchBar: () => cy.get('.input-group > #mainSearchbar'),
      }


    WebsiteURL() {
      cy.visit("www.walmart.com.mx");
      cy.wait(2000);
      
    }

  
   searchBtn(){
    this.elements.searchBtn().click();
   } 
 }
 const main = new MainPage();
 export default main;