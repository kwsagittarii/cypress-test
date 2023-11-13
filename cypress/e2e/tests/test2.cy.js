describe('Test 2', () => {
  it('Checks the "Enter your name" modal window', () => {
    cy.visit('/modal-overlays/dialog');

    // Checking the 'Enter Name' button
    cy.get('.form-input-card button').contains('Enter Name').click();
    cy.get('nb-dialog-container');

    // Checking the modal
    cy.get('.ng-star-inserted > nb-card > nb-card-header').contains('Enter your name');
    cy.get('input.size-medium.shape-rectangle[placeholder="Name"]');
    cy.get('nb-dialog-container .cancel').contains('Cancel');
    cy.get('nb-dialog-container .status-success').contains('Submit');
  })
})
