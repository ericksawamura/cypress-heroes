describe('Tests Cypress-Heroes', () => {
  it('Sucess Login', () => {
    cy.visit('/heroes')
    cy.get("button").eq(0).click()
    cy.get("input").eq(0).type('admin@test.com')
    cy.get("input").eq(1).type('test123')
    cy.get(".bg-blue-700").click()
  })

  it('Fail Login', () => {
    cy.visit('/heroes')
    cy.get("button").eq(0).click()
    cy.get("input").eq(0).type('test@test.com.br')
    cy.get("input").eq(1).type('admin')
    cy.get(".bg-blue-700").click()
    cy.get('.text-red-500').should('be.visible')
  })
  })
