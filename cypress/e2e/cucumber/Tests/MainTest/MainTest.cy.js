// /// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import main from "../../Pages/LiverpoolSearch/MainPage.cy.js";

// Cypress.once("uncaught:exception", (err, runnable) => {
//   return false;
// });

Cypress.on("uncaught:exception", () => {
  return false;
});

Given("I navigate to the Liverpool website", () => {
  main.WebsiteURL();
});

Then("I want to search a product", () => {
  main.clickSearchMenu();
});

And("I enter {string} in the search bar", (item) => {
  main.enterItem(item);
});

And("I press the search button", () => {
  cy.get('[style="justify-content:center;display:flex"] > div > svg').click();
  cy.wait(3300);
  main.searchBtn();
  cy.wait(5000);
});

Then("I see search results for {string} related items", (item) => {
  // validación de datos
  cy.contains(item).should("be.visible");
});

And("I see the title and price of the item on the displayed page", () => {
  main.verifyArticleTitle();
  main.verifyArticlePrice();
});

Then("I filter the results by size {string} inches", (size) => {
  main.filterbySize();
});

And("I filter the results by price {string}", (price) => {
  main.elements.priceFilter().check();
});

And("I filter the results by brand {string}", (brand) => {
  main.searchBrandName(brand);
  main.elements.brandSony().check();
});

When("I want to search a product in the categorias menu", () => {
  cy.wait(3300);
  cy.get('[style="justify-content:center;display:flex"] > div > svg').click();
  cy.wait(3300);
  main.elements.menuCategorias().click();
});

And("I place the cursor over the Belleza option", () => {
  cy.wait(3300);
  main.elements.submenuBelleza().trigger("mouseover");
});

And("I select the Perfumes de Hombre option in the displayed menu", () => {
  main.elements.categoryPerfumes().click();
});

Then("I filter the results by {string} brand", (brand) => {
  main.searchBrandName(brand);
  main.elements.brandDior().check();
});

And("Count the number of results", () => {
  cy.wait(2000);
  cy.get(".a-plp-results-title > span")
    .invoke("text") // Obtén el texto del elemento
    .then((text) => {
      cy.get("div.m-plp-card-container").should("have.length", text);
    });
});
