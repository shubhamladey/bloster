///<reference types = 'Cypress'/>
const loginPage = require('../support/PageObjects/LoginPage.js')
const liveScan = require('../support/PageObjects/LiveScan.js')
const landingPage = require('../support/PageObjects/LandingPage.js')


describe('Validate New Scan Functionality', () => {

  beforeEach(()=>{
    cy.visit(Cypress.env('baseUrl'),{failOnStatusCode:false})
    cy.get(landingPage.login_Button)
    loginPage.loginIntoApplication()

  })

  it('Validate scan output using single valid url', () => {

    let url = ['www.google.com']
    liveScan.setFilters()
    liveScan.enterLinks(url)
    liveScan.validateOutput(valid,url)

  })
  it('Validate scan output using  multiple url', () => {
    let url = ['www.google.com','www.gmail.com']
    liveScan.setFilters()
    liveScan.enterLinks(url)
    liveScan.validateOutput(valid,url)
  })
  it('Verify scan button is disable when user enter more than limit (i.e 10+ Urls)', () => {

    let url = ['www.gmail.com','www.youtube.com','www.github.com','www.flipkart.com','www.amazon.com','www.coforge.com','www.myntra.com','www.yahoo.com','www.outlook.com','www.w3schools.com','www.lenskart.com']
    liveScan.setFilters()
    liveScan.enterLinks(url)
  })
  it('Verify scan output is available for all the 10 valid urls entered', () => {

    let url = ['www.gmail.com','www.youtube.com','www.github.com','www.flipkart.com','www.amazon.com','www.coforge.com','www.myntra.com','www.yahoo.com','www.outlook.com','www.w3schools.com']
    liveScan.setFilters()
    liveScan.enterLinks(url)
    liveScan.validateOutput(valid,url)

  })
  it('Verify scan output for incomplete url, url-without www and .com', () => {

    let url = ['gmail','youtube','github','flipkart','amazon','coforge','myntra','yahoo','outlook','w3schools']
    liveScan.setFilters()
    liveScan.enterLinks(url)
    liveScan.validateOutput(invalid,url)

  })
  it('Verify scan output for invalid urlname containing www and .com', () => {

    let url = ['www.jkjdksjka.com','www.jedkadk.com','www.kldeiresa22.com','www.weiqwei2232.com','www.weqe2323.com','www.23eefef.com','www.323rfrww.com','www.er232111wf.com','www.32323rffdf.com','www.323fdfdf11.com']
    liveScan.setFilters()
    liveScan.enterLinks(url)
    liveScan.validateOutput(invalid,url)

  })

})