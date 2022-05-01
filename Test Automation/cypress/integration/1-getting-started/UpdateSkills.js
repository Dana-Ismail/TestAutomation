/// <reference types="cypress" />
require("cypress-xpath");

it('skillsmatch test', function(){

    cy.visit('https://skillsmatch.mdx.ac.uk/')
    cy.get('#username').type("baraa")
    cy.get('#password').type("baraa{enter}")
    cy.get('[class="nav-link"]').contains('Profile').click()
  
    cy.get('[test-data="UpdateMySkills"]').click()	
    cy.get('[test-data="StartUpdatingMySkills"]').click() 
    cy.scrollTo('bottom')

//About DigCompEdu
    cy.get('[id="5"]').check({ force: true }).click({ multiple: true })
    cy.get('[test-data="NextStep"]').click({ multiple: true })	

//Area 1
  
   cy.xpath('//*[@id="answerForm"]/fieldset[2]').within(() => {
    cy.xpath(`.//*[@test-data="answer_3"]`).eq(0).click()
    cy.xpath(`.//*[@test-data="answer_3"]`).eq(1).click()
    cy.xpath(`.//*[@test-data="answer_4"]`).eq(2).click()
    cy.xpath(`.//*[@test-data="answer_5"]`).eq(3).click()
    cy.xpath(`.//*[@class="next action-button"]`).click()
  });

//Area 2
cy.xpath('//*[@id="answerForm"]/fieldset[3]').within(() => {
    cy.xpath(`.//*[@test-data="answer_3"]`).eq(0).click()
    cy.xpath(`.//*[@test-data="answer_4"]`).eq(1).click()
    cy.xpath(`.//*[@test-data="answer_2"]`).eq(2).click()
    cy.xpath(`.//*[@class="next action-button"]`).click()
  });

//Area 3
cy.xpath('//*[@id="answerForm"]/fieldset[4]').within(() => {
    cy.xpath(`.//*[@test-data="answer_2"]`).eq(0).click()
    cy.xpath(`.//*[@test-data="answer_3"]`).eq(1).click()
    cy.xpath(`.//*[@test-data="answer_5"]`).eq(2).click()
    cy.xpath(`.//*[@test-data="answer_4"]`).eq(3).click()
    cy.xpath(`.//*[@class="next action-button"]`).click()
  });

//Area 4
cy.xpath('//*[@id="answerForm"]/fieldset[5]').within(() => {
    cy.xpath(`.//*[@test-data="answer_1"]`).eq(0).click()
    cy.xpath(`.//*[@test-data="answer_4"]`).eq(1).click()
    cy.xpath(`.//*[@test-data="answer_2"]`).eq(2).click()
    cy.xpath(`.//*[@class="next action-button"]`).click()
  });

//Area 5
cy.xpath('//*[@id="answerForm"]/fieldset[6]').within(() => {
    cy.xpath(`.//*[@test-data="answer_5"]`).eq(0).click()
    cy.xpath(`.//*[@test-data="answer_3"]`).eq(1).click()
    cy.xpath(`.//*[@test-data="answer_4"]`).eq(2).click()
    cy.xpath(`.//*[@class="next action-button"]`).click()
  });

//Area 6
cy.xpath('//*[@id="answerForm"]/fieldset[7]').within(() => {
    cy.xpath(`.//*[@test-data="answer_2"]`).eq(0).click()
    cy.xpath(`.//*[@test-data="answer_3"]`).eq(1).click()
    cy.xpath(`.//*[@test-data="answer_1"]`).eq(2).click()
    cy.xpath(`.//*[@test-data="answer_5"]`).eq(3).click()
    cy.xpath(`.//*[@test-data="answer_4"]`).eq(4).click()
    cy.xpath(`.//*[@class="next action-button"]`).click()
  });


//Finally
   cy.xpath('//*[@id="answerForm"]/fieldset[8]').within(() => {
    cy.xpath(`.//*[@test-data="answer_1"]`).eq(0).click()
    cy.xpath(`.//*[@test-data="answer_3"]`).eq(1).click()
    cy.xpath(`.//*[@test-data="answer_2"]`).eq(2).click()
    cy.xpath(`.//*[@test-data="Confirm"]`).click()
  });

  //score 
    cy.xpath(`.//*[@test-data="area_1_Scor"]`).contains('(7/16)') 
    cy.get('[test-data="area_2_Scor"]').contains('(6/12)') 
    cy.get('[test-data="area_3_Scor"]').contains('(10/16)') 
    cy.get('[test-data="area_4_Scor"]').contains('(4/12)') 
    cy.get('[test-data="area_5_Scor"]').contains('(9/12)') 
    cy.get('[test-data="area_6_Scor"]').contains('(10/20)') 
  
 //Rating
   cy.xpath('//div[contains(@test-data,"area_1_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length', 2)
   cy.xpath('//div[contains(@test-data,"area_2_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length', 2)
   cy.xpath('//div[contains(@test-data,"area_3_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length', 3)
   cy.xpath('//div[contains(@test-data,"area_4_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length', 2)
   cy.xpath('//div[contains(@test-data,"area_5_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length', 4)
   cy.xpath('//div[contains(@test-data,"area_6_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length', 2)

})

