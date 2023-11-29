describe('Register page headers checking', () => {
  it('Check headers on the register page', () => {
    cy.visit('/auth/register');
    cy.xpath('//h1[@id="title"]').contains('Register');
    cy.xpath('//label[@for="input-name"]').contains('Full name:');
    cy.xpath('//label[@for="input-email"]').contains('Email address:');
    cy.xpath('//label[@for="input-password"]').contains('Password:');
    cy.xpath('//label[@for="input-re-password"]').contains('Repeat password:');
    cy.xpath('//span[@class="text"]').contains(' Agree to Terms & Conditions');
    cy.xpath('//a[@class="github with-icon"]').should('exist');
    cy.xpath('//a[@class="facebook with-icon"]').should('exist');
    cy.xpath('//a[@class="twitter with-icon"]').should('exist');
  })
})
