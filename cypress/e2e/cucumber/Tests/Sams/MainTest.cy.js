import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import main from "../../Pages/Sams/WalmartMainPage.cy.js";


Cypress.on("uncaught:exception", () => {
    return false;
  });
  
  Given("I navigate to the Walmart website", () => {
    main.WebsiteURL();
  });