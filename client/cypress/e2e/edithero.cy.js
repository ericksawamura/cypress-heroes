describe('Tests Cypress-Heroes', () => {
  beforeEach(() => {
    cy.visit('/heroes')
    cy.get("button").eq(0).click()
    cy.get("input").eq(0).type('admin@test.com')
    cy.get("input").eq(1).type('test123')
    cy.get(".bg-blue-700").click()
  })

  it('Edit Hero', () => {
    cy.get("[data-cy='pencil']").eq(1).click()
    cy.get("input").eq(0).clear().type("Edit Hero")
    cy.get("input").eq(1).clear().type("111")
    cy.get("input").eq(2).clear().type("222")
    cy.get("input").eq(3).clear().type("333")
    cy.get("button").eq(3).click()
    cy.contains('Edit Hero').should('be.visible')
  })

    it('Delete Hero', () => {
    cy.get("button").eq(0).click()
    cy.get("input").eq(0).type("Cat Hero")
    cy.get("input").eq(1).type("10000")
    cy.get("input").eq(2).type("200")
    cy.get("input").eq(3).type("500")
    cy.get("select").select('Mind Control')
    cy.get('[data-cy="avatarFile"]').selectFile('cypress/fixtures/cat.png')
    cy.get("button").eq(2).click()
    cy.contains('Cat Hero').should('be.visible')
    cy.get("[data-cy='trash']").eq(7).click()
    cy.get('.bg-red-600').click()
  })
  })

