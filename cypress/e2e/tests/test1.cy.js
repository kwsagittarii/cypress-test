describe('Test 1', () => {
  it('Checks text inside each step of the stepper', () => {
    cy.visit('/layout/stepper');

    // Checking the first step
    cy.get('.horizontal > .step-content > h3.ng-star-inserted').contains('Step content #1');
    cy.get('.horizontal > .step-content > [aria-disabled="false"]').click();

    // Checking the second step
    cy.get('.horizontal > .step-content > h3.ng-star-inserted').contains('Step content #2');
    cy.get('.horizontal > .step-content > [nbsteppernext=""]').click();

    // Checking the third step
    cy.get('.horizontal > .step-content > h3.ng-star-inserted').contains('Step content #3');
    cy.get('.horizontal > .step-content > [nbsteppernext=""]').click();

    // Checking the fourth step
    cy.get('.horizontal > .step-content > h3.ng-star-inserted').contains('Step content #4');
    cy.get('.horizontal > .step-content > .btn-disabled').should('be.disabled');
  })
})
