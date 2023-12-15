describe('Test del Footer', () => {
  it('Test de enlaces', () => {
    cy.visit('http://localhost:8080/elcocinillas/');

    cy.contains('Acerca de').click()
    cy.url().should('include', '/info/1');
    cy.contains('Contacto').click()
    cy.url().should('include', '/info/2');
    cy.contains('Información Legal').click()
    cy.url().should('include', '/info/3');
    cy.contains('Política de Cookies').click()
    cy.url().should('include', '/info/4');
    cy.contains('Privacidad').click()
    cy.url().should('include', '/info/5');
    cy.contains('Términos & Condiciones').click()
    cy.url().should('include', '/info/6');
  })
})