
Cypress.Commands.add('login', (email, password) => { 
    cy.visit(Cypress.env('baseUrl'))
    
 })

