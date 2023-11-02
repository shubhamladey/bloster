///<reference types = 'Cypress'/>
const loginPage = require('../support/PageObjects/LoginPage.js')
const menuHeader = require('../support/PageObjects/MenuHeader.js')


describe('Validate New Scan Functionality', () => {

  beforeEach(()=>{
    cy.visit(Cypress.env('baseUrl'))
    cy.get(menuHeader.loginButton)
    loginPage.loginIntoApplication()

  })

  it('Validate scan output using single valid url', () => {

  })
  it('Validate scan output using  multiple url', () => {

  })
  it('Verify scan button is disable when user enter more than limit (i.e 10+ Urls)', () => {

  })
  it('Verify scan output is available for all the 10 valid urls entered', () => {

  })
  it('Verify scan output for invalid url-without www and .com', () => {

  })
  it('Verify scan output for invalid url-without www and .com- invalid urlname containing www and .com', () => {

  })
  it('Verify scan output contains the IP address for valid source Url', () => {
    
  })

})