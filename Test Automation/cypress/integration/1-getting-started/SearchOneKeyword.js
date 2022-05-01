/// <reference types="cypress" />
require("cypress-xpath");

it('skillsmatch test', ()=>{
    cy.visit('https://skillsmatch.mdx.ac.uk/')
    cy.get('#username').type("macha")
    cy.get('#password').type("macha{enter}")


    cy.get('[class="nav-link"]').contains('ابحث').click()
    cy.get('[class="tagify__input"]').type("software{enter}")
    cy.get('[test-data="searchButton"]').click()
    cy.get('[test-data="TotalMatches"]').contains('9')
    cy.visit('https://skillsmatch.mdx.ac.uk/en/course/5795?keywords=software')


   cy.get('[class="container-fluid"]').invoke('text').then((text) => {
 var matches =  text.match(/software/img).length;
     
    if (matches>=9){
   
 cy.log('matching is correct')
  }else
  {
     cy.log("doesn't match numbers")  
  }

});
});