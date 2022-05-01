/// <reference types="cypress" />
require("cypress-xpath");
it('skillsmatch test', ()=>{
    cy.visit('https://skillsmatch.mdx.ac.uk/')
    cy.get('#username').type("macha")
    cy.get('#password').type("macha{enter}")

    cy.get('[class="nav-link"]').contains('ابحث').click()
    cy.get('[class="tagify__input"]').type("برمجيات{enter}")
    cy.get('[test-data="AdvancedOptions"]').click()
    cy.get('[test-data="translateInput"]').first().select('en')
  
  
    cy.get('[test-data="searchButton"]').click()
  
    cy.get('[class="search-result-box card-box"]').each((elem) => {
      cy.get(elem).find('[test-data="MatchedKeywords"]').should('contain', 'software')
  
  
  });


});