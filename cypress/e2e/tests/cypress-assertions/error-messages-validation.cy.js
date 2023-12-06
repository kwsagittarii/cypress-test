describe('Validation of error messages on the Register page', () => {
  it('Validate error messages on invalid input', () => {
    cy.visit('/auth/register');
    cy.xpath('//form[@novalidate]').within(() => {
      cy.xpath('//input[@id="input-name"]').click().type('1');
      cy.xpath('//input[@id="input-email"]').click();
      cy.xpath('//input[@id="input-password"]').click();
      cy.xpath('//input[@id="input-re-password"]').click();
      cy.xpath('//*[@id="input-name"]//following-sibling::p[@*="caption status-danger"]').contains('Full name should contains from 4 to 50 characters');
      cy.xpath('//*[@id="input-email"]//following-sibling::p[@*="caption status-danger"]').contains('Email is required!');
      cy.xpath('//*[@id="input-password"]//following-sibling::p[@*="caption status-danger"]').contains('Password is required!');
    })
  })
})
