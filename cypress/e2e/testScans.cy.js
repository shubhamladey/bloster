///<reference types = 'Cypress'/>
const loginPage = require('../support/PageObjects/LoginPage.js')
const liveScan = require('../support/PageObjects/LiveScan.js')
const dashboardPage = require('../support/PageObjects/DashboardPage.js')


describe('Validate New Scan Functionality', () => {

  beforeEach(()=>{
    cy.visit(Cypress.env('baseUrl'))
    cy.get(dashboardPage.login_Button)
    loginPage.loginIntoApplication()

  })

  it('Validate scan output using single valid url', () => {

    liveScan.scanLink('www.gmail.com')

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