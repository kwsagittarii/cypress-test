describe('The first test suite', () => {
  it('First test', () => {
    cy.visit('layout/stepper');
    cy.url().should('contain', 'stepper');
  })

  it('Second test', () => {
    cy.visit('layout/stepper');
    cy.get('.label-index').should('not.contain.text', 'Invalid text');
  })
})
