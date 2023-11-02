///<reference types = 'Cypress'/>
const loginPage = require('../support/PageObjects/LoginPage.js')
const menuHeader = require('../support/PageObjects/MenuHeader.js')


describe('template spec', () => {

  beforeEach(()=>{
    cy.visit(Cypress.env('baseUrl'))
    cy.get(menuHeader.loginButton)

  })

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})