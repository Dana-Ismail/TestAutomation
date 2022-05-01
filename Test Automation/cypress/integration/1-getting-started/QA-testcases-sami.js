/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
require("cypress-xpath");

const username = "stimpy"
const password = "11923667sS"
const keyword = "software"


// case_sensitive
it("TestCase3", () => {
    cy.visit('https://skillsmatch.mdx.ac.uk/en')
    cy.get('#username').type(`${username}`)
    cy.get('#password').type(`${password}`)
    cy.get('.btn').click()
    cy.xpath(`//*[@id="navbarSupportedContent"]/ul[1]/li[3]/a`).click()
    cy.xpath('//*[@test-data="AdvancedOptions"]').click()

    const keyword_Case_Sensitive = 'Python'
    cy.get(`.tagify__input`).type(`${keyword_Case_Sensitive}`).type('{enter}')
    cy.xpath('//*[@test-data="case_sensitive"]').click()
    cy.xpath(`//*[@test-data="searchButton"]`).click()
    cy.xpath('//div[@id="search-result"]').children().each((elem) => {
        cy.get(elem).find('span[test-data="MatchedKeywords"]').should('contain', 'Python')
    })

})


// sort_by_user_reviews
it("TestCase4", () => {
    cy.visit('https://skillsmatch.mdx.ac.uk/en')
    cy.get('#username').type(`${username}`)
    cy.get('#password').type(`${password}`)
    cy.get('.btn').click()
    cy.xpath(`//*[@id="navbarSupportedContent"]/ul[1]/li[3]/a`).click()
    cy.xpath('//*[@test-data="AdvancedOptions"]').click()

    cy.get(`.tagify__input`).type(`${keyword}`).type('{enter}')
    cy.xpath('//*[@test-data="sort_by_user_reviews"]').click()
    cy.xpath(`//*[@test-data="searchButton"]`).click()
    var counter = "";
    let ratings = []
    for (let i = 1; i <= 10; i++) {
        cy.xpath('//*[@test-data="searchItem_' + i + '"]//child::div[contains(@test-data,"UserFeedback")]').find('*[class]').then(element => {
            counter = 0;
            for (let j = 0; j < 5; j++) {
                if (element.[j].classList.[0]) {
                    counter++;
                }
            }
            if (!element.[4].classList.[0]) {
                counter = 0;
            }
            ratings[i - 1] = counter
        })
    }
    cy.then(() => {
        var count = 1
        for (let i = 0; i <= 10; i++) {
            if (ratings[i] >= ratings[i + 1]) {
                count++;
            }
            else if (ratings[i] < ratings[i + 1]) {
                count--;
            }
        }
        if (count == 10) {
            cy.log("works as expected")
        }
    })
})