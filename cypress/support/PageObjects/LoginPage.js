class LoginPage{

    usernameField = 'input[type="email"]'
    passwordField ='input[type="password"]'
    continueButton = 'button:contains("Continue")'
    loginButton = 'button[type="submit"]'

    loginIntoApplication(username, password){
        cy.get(this.usernameField).type(username)
        cy.get(this.continueButton).click()
        cy.get(this.passwordField).type(password)
        cy.get(this.loginButton).click()
    }

}
module.exports = new LoginPage