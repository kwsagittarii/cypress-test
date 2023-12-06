describe('Smart table item editing', () => {
  it('Edit an item in smart table', () => {
    cy.visit('pages/tables/smart-table');
    cy.xpath('//i[@class="nb-edit"]').first().click();
    cy.xpath('//ng2-st-tbody-create-cancel/parent::td/following-sibling::*[2]').within(() => {
      cy.xpath('//input[@ng-reflect-name="firstName"]').click().clear().type('John').type('{enter}');x
    });
    cy.xpath('//tr[@class="ng-star-inserted ng2-smart-row"]//*[text()="John"]');
  })
})
