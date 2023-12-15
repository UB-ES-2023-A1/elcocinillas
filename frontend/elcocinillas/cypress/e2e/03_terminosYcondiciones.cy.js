//De momento no se puede hacer porque no está puesto el boton para acceder al directorio de t&c 

describe('Test Términos y Condiciones', () => {
  before(() => {
    // Visitar la URL de la página principal (http://localhost:8080/elcocinillas/)
    cy.visit('http://localhost:8080/elcocinillas/t&c');
    // Esperar a que se cargue la página
    cy.wait(1000); 
  });

  it('Acceder a la página de Términos y Condiciones', () => {
    cy.url().should('include', '/t&c');
  });
});
