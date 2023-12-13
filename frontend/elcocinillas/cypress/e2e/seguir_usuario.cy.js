//test correcto de prueba

describe('Test seguir usuario', () => {
  beforeEach(() => {
    // visitar la URL de la página principal antes de cada prueba
    cy.visit('https://ub-es-2023-a1.github.io/elcocinillas/');
    cy.get('[data-cy=iniciar_sesion]').click()
    cy.url().should('include', '/userlogin');
  });
  it('Seguir a usuario correctamente', () => {
    // primero iniciamos sesion
    cy.get('input[name="mail"]').type('usuariodepruebafalsoxd@gmail.com');
    cy.get('input[name="psw"]').type('123456');

    // buscar el botón de iniciar sesión y hacer clic
    cy.get('form').submit();

    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.equal('Sesión iniciada con éxito');
    });

    cy.on('window:confirm', () => true);

    cy.url().should('include', '/recetas');

    //cy.visit('http://localhost:8080/elcocinillas/recetas/Crepes');
    //rellenar datos para buscar la receta que queremos:
    //// Seleccionar tiempo

   // cy.wait(1000)
    //cy.url().should('include', '/Crepes');
    
    //cy.get('[data-cy=imagenAgregarAmigo]').click;

    //cy.on('window:alert', (alertMessage) => {
      //expect(alertMessage).to.equal('Has empezado a seguir a: Beatriz');
    //});
    //cy.wait(500);
    //cy.on('window:confirm', () => true);
    //Has empezado a seguir a: Beatriz - Se ha eliminado a: Beatriz de tu lista de amigos
  });
  });