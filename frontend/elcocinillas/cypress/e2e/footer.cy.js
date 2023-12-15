describe('Test del Footer', () => {
  /*
    Se testea que apretar cada apartado del Footer ('Acerca de', 'Contacto', 
    'Información Legal', 'Política de Cookies', 'Privacidad', 'Términos & Condiciones')
    lleva al url correcto ('/info/:id') donde el valor de 'id' para cada apartado
    está definido en info.js.
  */
  it('Test de enlaces', () => {
    cy.visit('http://localhost:8080/elcocinillas/');

    // Test que clickear 'Acerca de' lleva al url correcto:
    cy.contains('Acerca de').click()
    cy.url().should('include', '/info/1');
    // Test que clickear 'Contacto' lleva al url correcto:
    cy.contains('Contacto').click()
    cy.url().should('include', '/info/2');
    // Test que clickear 'Información Legal' lleva al url correcto:
    cy.contains('Información Legal').click()
    cy.url().should('include', '/info/3');
    // Test que clickear 'Política de Cookies' lleva al url correcto:
    cy.contains('Política de Cookies').click()
    cy.url().should('include', '/info/4');
    // Test que clickear 'Privacidad' lleva al url correcto:
    cy.contains('Privacidad').click()
    cy.url().should('include', '/info/5');
    // Test que clickear 'Términos & Condiciones' lleva al url correcto:
    cy.contains('Términos & Condiciones').click()
    cy.url().should('include', '/info/6');
  })
})