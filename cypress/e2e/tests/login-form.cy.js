describe('Verify login form', () => {
  it('Verifying login form', () => {
    cy.visit('/pages/forms/layouts');
    cy.get('#inputEmail3').click().type('test@test.com');
    cy.get('#inputPassword3').click().type('password');
    cy.get('.checkbox > nb-checkbox > .label > .custom-checkbox').click();
    cy.get('.form-horizontal button').contains('Sign in').click();
  })
})
