describe('Smart table item creation', () => {
  it('Create item in smart table', () => {
    cy.visit('pages/tables/smart-table');
    cy.xpath('//i[@class="nb-plus"]').click();
    cy.xpath('//thead/tr[@class="ng-star-inserted"]').should('exist');
  })
})
