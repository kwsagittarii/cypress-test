describe('Filling register form', () => {
  it('Fill and check register form', () => {
    cy.visit('/auth/register');
    cy.xpath('//form[@novalidate]').within(() => {
      cy.xpath('//input[@id="input-name"]').click().type('John Raskin');
      cy.xpath('/@ng-reflect-model="John Raskin"').should('exist');

      cy.xpath('//input[@id="input-email"]').click().type('test@email.com');
      cy.xpath('/@ng-reflect-model="test@email.com"').should('exist');

      cy.xpath('//input[@id="input-password"]').click().type('password');
      cy.xpath('//input[@id="input-password"]/@ng-reflect-model="password"').should('exist');

      cy.xpath('//input[@id="input-re-password"]').click().type('password');
      cy.xpath('//input[@id="input-re-password"]/@ng-reflect-model="password"').should('exist');

      cy.xpath('//*[@name="terms"]//*[@class="custom-checkbox"]').click();
      cy.xpath('//*[@name="terms"]//span[@class="custom-checkbox checked"]').should('exist');

      cy.xpath('//button').contains('Register').click();
    });
  })
})
