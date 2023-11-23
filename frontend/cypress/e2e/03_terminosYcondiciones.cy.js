describe('Test Términos y Condiciones', () => {
  before(() => {
    // Visitar la URL de la página principal (http://localhost:8080/elcocinillas/)
    cy.visit('http://localhost:8080/elcocinillas/');
    // Esperar a que se cargue la página
    cy.wait(1000); // Puedes ajustar el tiempo de espera según sea necesario
  });

  it('Acceder a la página de Términos y Condiciones', () => {
    // Buscar en el top bar el menú de Términos y Condiciones y hacer clic
    cy.contains('T&C').click();

    // Esperar a que la URL cambie a la página de Términos y Condiciones
    cy.url().should('include', '/elcocinillas/t&c');
  });
});
