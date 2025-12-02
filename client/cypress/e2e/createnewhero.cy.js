describe('Tests Cypress-Heroes', () => {
  beforeEach(() => {
    cy.visit('/heroes')
    cy.get("button").eq(0).click()
    cy.get("input").eq(0).type('admin@test.com')
    cy.get("input").eq(1).type('test123')
    cy.get(".bg-blue-700").click()
  })
  
    it('Create New Hero', () => {
    cy.get("button").eq(0).click()
    cy.get("input").eq(0).type("Cat Hero")
    cy.get("input").eq(1).type("10000")
    cy.get("input").eq(2).type("200")
    cy.get("input").eq(3).type("500")
    cy.get("select").select('Mind Control')
    cy.get('[data-cy="avatarFile"]').selectFile('cypress/fixtures/cat.png')
    cy.get("button").eq(2).click()
    cy.contains('Cat Hero').should('be.visible')
  })

  it('Creating heroes with an empty field ', () => {
    cy.get("button").eq(0).click()
    cy.get("button").eq(2).click()
    cy.get('.text-red-500').should('be.visible')
    })
})
  