class LoginPage{

    usernameField = 'input[type="email"]'
    passwordField ='input[type="password"]'
    continueButton = 'button:contains("Continue")'
    loginButton = 'button[type="submit"]'

    loginIntoApplication(){
        cy.get(this.usernameField).type(Cypress.env('username'))
        cy.get(this.continueButton).click()
        cy.get(this.passwordField).type(Cypress.env('password'))
        cy.get(this.loginButton).click()
    }

}
module.exports = new LoginPage